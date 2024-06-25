<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
import { store } from "../../data/store.js";
import { mapActions } from "vuex";
import { useToast } from "vue-toastification";

export default {
  props: {
    cartItems: Array,
    totalPrice: String,
    currentRestaurant: Object,
  },

  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      clientToken: null,
      dropinInstance: null,
      axios,
      store,
      dishes: this.cartItems,
      name: "",
      address: "",
      email: "",
      phone: "",
      notes: "",
      orderId: "",

      showPaymentSection: false,
    };
  },

  // async mounted() {
  //   await this.getClientToken();
  //   this.setupBraintreeDropIn();
  // },

  methods: {
    ...mapActions(["clearCart"]),

    async getClientToken() {
      const response = await axios.get(`${store.apiUrl}/payment/token`);
      this.clientToken = response.data.token;
    },
    setupBraintreeDropIn() {
      dropin.create(
        {
          authorization: this.clientToken,
          container: "#dropin-container",
        },
        (err, instance) => {
          if (err) {
            this.toast.error(err);
            return;
          }
          this.dropinInstance = instance;
        }
      );
    },
    async submitPayment() {
      this.dropinInstance.requestPaymentMethod(async (err, payload) => {
        if (err) {
          this.toast.error(err);
          return;
        }
        const response = await axios.post(`${store.apiUrl}/payment/process`, {
          payment_method_nonce: payload.nonce,
          amount: this.totalPrice,
        });
        if (response.data.success) {
          console.log(
            "PAGAMENTO ANDATO!>>>>>>>>>>",
            response.data.transaction_id
          );
          this.orderId = response.data.transaction_id;
          this.toast.success("Pagamento andato a buon fine.");
          console.log("form>>", this.name, this.address, this.email);

          // Chiamata axios
          axios
            .post(`${store.apiUrl}/send-order`, {
              code: this.orderId,
              tot: this.totalPrice,
              name: this.name,
              address: this.address,
              email: this.email,
              phone: this.phone,
              notes: this.notes,
              dishes: this.dishes,
            })
            .then((response) => {
              console.log(response);
              // Svuota il carrello
              this.clearCart();

              // Redirect tutto è andato a buon fine!
              this.$router.push({
                name: "OrderConfirmation",
                params: { orderId: this.orderId },
              });
            })
            .catch(function (error) {
              this.toast.error(error);
              console.log(error);
              // Operazione di invio non andata a buon fine!
              // Ricaricare la pagina per rigenarare il token!
              window.location.reload();
            });
        } else {
          this.toast.error("Pagamento fallito: " + response.data.message);
        }
      });
    },

    // Validazione form
    validateForm() {
      if (
        this.name.length >= 3 &&
        this.address.length >= 3 &&
        this.validateEmail(this.email)
      ) {
        this.showPaymentSection = true;
        this.$nextTick(() => {
          this.getClientToken().then(() => {
            this.setupBraintreeDropIn();
          });
        });
      } else {
        this.toast.warning(
          "Per favore, compila tutti i campi obbligatori correttamente."
        );
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<template>
  <div class="">
    <!--? Form -->
    <div v-if="!showPaymentSection">
      <form @submit.prevent="validateForm">
        <!--* Nome e cognome -->
        <div class="my-3">
          <label for="name" class="form-label"
            >Nome e Cognome (<span class="text-danger">*</span>)</label
          >
          <input
            type="text"
            class="form-control"
            id="text"
            v-model="name"
            aria-describedby="name"
            placeholder="Marco Rossi"
            required
            minlength="3"
            maxlength="100"
          />
        </div>
        <!--* /Nome e cognome -->
        <!--* Address -->
        <div class="my-3">
          <label for="address" class="form-label"
            >Indirizzo dove recapitare l'ordine (<span class="text-danger"
              >*</span
            >)</label
          >
          <input
            type="text"
            class="form-control"
            id="text"
            v-model="address"
            aria-describedby="address"
            placeholder="Via Delle Rose 12"
            required
            minlength="3"
            maxlength="100"
          />
        </div>
        <!--* /Address -->
        <!--* Email -->
        <div class="my-3">
          <label for="email" class="form-label"
            >Inserisci la tua email (<span class="text-danger">*</span>)</label
          >
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            aria-describedby="emailHelp"
            placeholder="tuaemail@email.it"
          />
          <div id="email" class="form-text small">
            Invieremo un email a questo indirizzo per la conferma dell'ordine
          </div>
        </div>
        <!--* /Email -->

        <!--* Numero di telefono -->
        <div class="my-3">
          <label for="phone" class="form-label">Numero di telefono</label>
          <input
            type="text"
            class="form-control"
            id="text"
            v-model="phone"
            aria-describedby="phone"
            placeholder="+39 3123456789"
            minlength="10"
            maxlength="10"
          />
        </div>
        <!--* /Numero di telefono -->
        <!--? Note -->
        <div class="form-floating my-3">
          <textarea
            class="form-control"
            placeholder="Lascia una nota al corriere"
            id="notes"
            v-model="notes"
          ></textarea>
          <label for="notes">Lascia una nota.</label>
        </div>
        <!--? /Note -->
        <div class="small my-3">
          I campi con l'<span class="text-danger">*</span> sono obbligatori e
          necessari per procedere all'ordine.
        </div>
        <button class="btn btn-primary" type="submit">
          Procedi al pagamento
        </button>
      </form>
    </div>
    <!--? /Form -->

    <!--! Pagamento -->
    <div v-if="showPaymentSection">
      <div id="dropin-container"></div>
      <button class="btn btn-primary" type="submit" @click="submitPayment">
        Paga
      </button>
    </div>
    <!--! Pagamento -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
