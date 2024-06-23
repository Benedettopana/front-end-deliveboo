<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",

  methods: {
    ...mapActions(["removeFromCart", "clearCart", "addToCart"]),

    incrementItem(item) {
      this.addToCart({
        dish: item,
        restaurant: this.currentRestaurant,
      });
    },

    decrementItem(item) {
      this.removeFromCart(item);
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
          <div>
            {{ item.dish.name }} - &euro;{{
              item.dish.price.replace(".", ",")
            }}
            x {{ item.quantity }}
          </div>

          <!--* Bottoni di incremento & decremento del piatto -->
          <div class="buttons">
            <!--? Incremento -->
            <button class="btn btn-success" @click="incrementItem(item.dish)">
              +
            </button>
            <!--! Decremento -->
            <button class="btn btn-danger" @click="decrementItem(item.dish)">
              -
            </button>
          </div>
        </li>
      </ul>
      <div>
        <strong>Totale: &euro;{{ totalPrice.replace(".", ",") }}</strong>
      </div>
      <button @click="clearCart" class="btn btn-warning">
        Svuota Carrello
      </button>
      <router-link :to="{ name: 'cart' }" class="btn btn-primary">
        Vai al carrello
      </router-link>
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

  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>
