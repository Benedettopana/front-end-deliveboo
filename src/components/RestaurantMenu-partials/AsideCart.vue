<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",

  methods: {
    ...mapActions(["removeFromCart", "clearCart"]),
  },

  computed: {
    ...mapGetters(["cartItems", "currentRestaurant"]),
    totalPrice() {
      return this.cartItems
        .reduce((total, item) => total + parseFloat(item.price), 0)
        .toFixed(2);
    },

    restaurantName() {
      console.log(this.currentRestaurant);
      return this.currentRestaurant
        ? this.currentRestaurant.name
        : "Nessun ristorante selezionato";
    },
  },
};
</script>
<template>
  <div class="cart">
    <h3>Carrello</h3>

    <p v-if="currentRestaurant">
      Ordine da: <strong>{{ currentRestaurant.name }}</strong>
    </p>
    <div v-if="cartItems.length > 0">
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          <div>{{ item.name }} - &euro;{{ item.price.replace(".", ",") }}</div>
          <button @click="removeFromCart(index)" class="btn btn-danger">
            Rimuovi
          </button>
        </li>
      </ul>
      <div>
        <strong>Totale: &euro;{{ totalPrice.replace(".", ",") }}</strong>
      </div>
      <button @click="clearCart" class="btn btn-warning">
        Svuota Carrello
      </button>
    </div>
    <div v-else>
      <p>Il carrello è vuoto</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
$cart-bg-color: #ececec;
$cart-text-color: #b2adbe;

.cart {
  background-color: $cart-bg-color;
  color: $cart-text-color;

  padding: 20px;
  margin: 10px;
  border-radius: 15px;

  li {
    list-style: none;
    cursor: pointer;
  }
}
</style>
