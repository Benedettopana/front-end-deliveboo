<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
import { store } from "../../data/store.js";

export default {
  props: {
    cartItems: Array,
    totalPrice: String,
    currentRestaurant: Object,
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
    };
  },

  async mounted() {
    await this.getClientToken();
    this.setupBraintreeDropIn();
  },

  methods: {
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
            console.error(err);
            return;
          }
          this.dropinInstance = instance;
        }
      );
    },
    async submitPayment() {
      this.dropinInstance.requestPaymentMethod(async (err, payload) => {
        if (err) {
          console.error(err);
          return;
        }
        const response = await axios.post(`${store.apiUrl}/payment/process`, {
          payment_method_nonce: payload.nonce,
          amount: this.totalPrice,
          // order_details: {
          //   name: this.name,
          //   address: this.address,
          //   email: this.email,
          //   phone: this.phone,
          //   notes: this.notes,
          //   cardItems: this.cardItems,
          //   restaurant: this.currentRestaurant,
          // },
        });
        if (response.data.success) {
          console.log(
            "PAGAMENTO ANDATO!>>>>>>>>>>",
            response.data.transaction_id
          );
          this.orderId = response.data.transaction_id;
          alert("Payment successful!");
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
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          alert("Payment failed: " + response.data.message);
        }
      });
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col">
      <div id="dropin-container"></div>
      <button type="submit" @click="submitPayment">Pay</button>
    </div>
    <div class="col">
      <form method="post">
        <div class="my-3">
          <input type="text" v-model="name" placeholder="Nome e Cognome" />
        </div>
        <div class="my-3">
          <input type="text" v-model="address" placeholder="Indirizzo" />
        </div>
        <div class="my-3">
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="my-3">
          <input type="tel" v-model="phone" placeholder="Numero di Telefono" />
        </div>
        <div class="my-3">
          <textarea v-model="notes" placeholder="Note"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
