<script>
import { mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";
import Paym from "../components/Cart/Paym.vue";

export default {
  name: "cart",

  components: {
    Paym,
  },

  setup() {
    const toast = useToast();
    return { toast };
  },

  methods: {
    ...mapActions(["removeFromCart", "clearCart", "addToCart"]),

    incrementItem(item) {
      if (this.currentRestaurant) {
        this.addToCart({
          dish: item,
          restaurant: this.currentRestaurant,
        });
        this.toast.success(`${item.name} aggiunto al carrello.`);
      } else {
        console.error("Ristorante corrente errato!");
      }
    },

    decrementItem(item) {
      this.removeFromCart(item);
      this.toast.warning(`${item.name} rimosso dal carrello.`);
    },

    clearCartHandler() {
      this.clearCart();
      this.toast.error("Carrello svuotato.");
    },
  },

  computed: {
    ...mapGetters(["cartItems", "currentRestaurant"]),

    totalPrice() {
      return this.cartItems
        .reduce(
          (total, item) => total + parseFloat(item.dish.price) * item.quantity,
          0
        )
        .toFixed(2);
    },
  },
};
</script>
<template>
  <div class="container-fluid cart-detail">
    <div class="row row-cols-2">
      <div class="col">
        <h1>Dettagli del Carrello</h1>

        <p v-if="currentRestaurant">
          Ordine da: <strong>{{ currentRestaurant.name }}</strong>
        </p>
        <div v-if="cartItems.length > 0">
          <ul>
            <li v-for="(item, index) in cartItems" :key="index">
              <div>
                {{ item.dish.name }} - &euro;{{
                  item.dish.price.replace(".", ",")
                }}
              </div>
              <div class="buttons">
                <button
                  @click="decrementItem(item.dish)"
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-minus text-white"></i>
                </button>

                <div class="text-center pt-1">
                  {{ item.quantity }}
                </div>

                <button
                  @click="incrementItem(item.dish)"
                  class="btn btn-success"
                >
                  <i class="fa-solid fa-plus text-white"></i>
                </button>
              </div>
            </li>
          </ul>
          <div>
            <strong>Totale: &euro;{{ totalPrice.replace(".", ",") }}</strong>
          </div>
          <button @click="clearCartHandler" class="btn btn-warning">
            Svuota Carrello
          </button>
        </div>
        <div v-else>
          <p>Il carrello è vuoto</p>
        </div>
      </div>

      <div class="col">
        <!--? Passo le props al Paym component -->
        <div class="my-5">
          <Paym
            :cartItems="cartItems"
            :totalPrice="totalPrice"
            :currentRestaurant="currentRestaurant"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

.cart-detail {
  padding: 20px;
  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    & button {
      text-align: center;
    }
  }
}
</style>
