<script>
import { mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";

export default {
  name: "Cart",

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
        console.error("Ristorante non corretto");
      }
    },

    decrementItem(item) {
      this.removeFromCart(item);
      this.toast.error(`${item.name} rimosso dal carrello.`);
    },

    clearCartHandler() {
      this.clearCart();
      this.toast.warning("Carrello svuotato");
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
  <transition
    :name="cartItems.length > 0 ? 'slide-in' : 'slide-out'"
    mode="out-in"
  >
    <div :key="cartItems.length > 0 ? 'full' : 'empty'">
      <div class="cart mx-0 mx-xl-5" v-if="cartItems.length > 0">
        <h3 class="text-center mb-4">Il tuo ordine</h3>

        <p v-if="currentRestaurant" class="fst-italic">
          Ordine da: <strong>{{ currentRestaurant.name }}</strong>
        </p>
        <div>
          <!-- <p class="mt-4 fst-italic">Il tuo ordine: -->
          <!-- <strong>Il tuo ordine:</strong> -->
          <!-- </p> -->
          <ul class="px-0 px-md-2">
            <li v-for="(item, index) in cartItems" :key="index" class="mb-3">
              <div class="s">
                {{ item.dish.name }} - &euro;{{
                  item.dish.price.replace(".", ",")
                }}
              </div>

              <!--* Bottoni di incremento & decremento del piatto -->
              <div class="buttons">
                <!--! Decremento -->
                <button
                  class="btn"
                  @click="decrementItem(item.dish)"
                  style="--bs-btn-font-size: 0.75rem"
                >
                  <i class="fa-solid fa-minus my-icon my-btn"></i>
                </button>

                <div class="quantity text-center">
                  {{ item.quantity }}
                </div>

                <!--? Incremento -->
                <button
                  class="btn"
                  @click="incrementItem(item.dish)"
                  style="--bs-btn-font-size: 0.75rem"
                >
                  <i class="fa-solid fa-plus my-icon my-btn"></i>
                </button>
              </div>
            </li>
          </ul>
          <div class="my-4">
            <strong> Totale: &euro; {{ totalPrice.replace(".", ",") }} </strong>
          </div>
          <!--! BTN svuota carrello/Vai al carrello -->
          <div class="d-md-flex mx-md-3 mx-xl-0 d-md-block">
            <router-link
              :to="{ name: 'cart' }"
              class="btn ordina-adesso my-2 w-100"
            >
              Ordina adesso
            </router-link>
          </div>

          <!-- <div class="d-md-flex mx-md-3 mx-xl-0 d-md-block">
            <button
              @click="clearCartHandler"
              class="btn btn-outline-warning svuota-carrello me-1 my-2 w-100"
            >
              Svuota
            </button>
            <router-link
              :to="{ name: 'cart' }"
              class="btn btn-primary ordina-adesso my-2 w-100"
            >
              Ordina adesso
            </router-link>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
$cart-bg-color: white;
$cart-text-color: #000;

.cart {
  background-color: $cart-bg-color;
  color: $cart-text-color;
  font-size: 1.2rem;
  border: 3px solid rgb(232, 135, 53);
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  // position: fixed;
  // z-index: 2;
  // top: 40%;
  // right: 50px;

  li {
    list-style: none;
    cursor: pointer;

    .quantity {
      padding: 5px 0;
    }
  }

  .buttons {
    display: flex;
    // gap: 10px;
    margin-top: 10px;

    & button {
      text-align: center;
    }
  }

  .my-btn {
    border: 3px solid #e88735;
    color: #e88735 !important;
    border-radius: 50%;
    padding: 7px 7px !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    .my-icon {
      font-size: 0.8rem;
    }
  }
}

// .btn.btn-outline-warning.svuota-carrello {
//   --bs-btn-color: #e88735 !important;
//   --bs-btn-border-color: #e88735 !important;
//   --bs-btn-hover-color: #000;
//   --bs-btn-hover-bg: #e88735 !important;
//   --bs-btn-hover-border-color: #e88735 !important;
//   --bs-btn-focus-shadow-rgb: 255, 193, 7;
//   --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #e88735 !important;
//   --bs-btn-active-border-color: #e88735 !important;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #e88735 !important;
//   --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #e88735 !important;
//   --bs-gradient: none;
//   // border: none !important;
//   &:hover {
//     color: #fff;
//     background-color: #e88735 !important;
//     border-color: none !important;
//     box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
//   }
// }

.ordina-adesso {
  background-color: #e88735 !important;
  color: #fff !important;
  --bs-btn-border-color: #e88735 !important;
  &:hover {
    border-color: none !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.5s ease-in;
}

.slide-in-enter {
  transform: translateX(100%);
}

.slide-in-leave-to {
  transform: translateX(-100%);
}

.slide-out-enter-active,
.slide-out-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-out-enter {
  transform: translateX(-100%);
}

.slide-out-leave-to {
  transform: translateX(100%);
}
</style>
