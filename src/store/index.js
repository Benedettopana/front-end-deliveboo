import { createStore } from "vuex";

//? Salvataggio dei dati nel localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

//? Caricamento dei dati dal localStorage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

//% Salvo il ristorante
const saveCurrentRestaurantToLocalStorage = (restaurantId) => {
  if (restaurantId) {
    localStorage.setItem("currentRestaurant", restaurantId);
  } else {
    localStorage.removeItem("currentRestaurant");
  }
};

//% Carico il ristorante
const loadCurrentRestaurantFromLocalStorage = () => {
  return localStorage.getItem("currentRestaurant");
};

// Creo lo store con il ristorante e i piatti che ho messo nel carrello.
export const store = createStore({
  state: {
    cart: loadCartFromLocalStorage(),
    currentRestaurant: loadCurrentRestaurantFromLocalStorage(),
    // cart: [], // Array per contenere i piatti nel carrello
  },

  mutations: {
    // pusho e salvo il piatto e l'id del ristorante
    addToCart(state, { dish, restaurantId }) {
      state.cart.push(dish);
      if (!state.currentRestaurant) {
        state.currentRestaurant = restaurantId;
      }
      saveCartToLocalStorage(state.cart);
      saveCurrentRestaurantToLocalStorage(state.currentRestaurant);
    },

    // rimuovo e salvo le modifiche
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
      saveCartToLocalStorage(state.cart);
      // Se il carrello è vuoto svuto anche currentRestaurant
      if (state.cart.length === 0) {
        state.currentRestaurant = null;
        saveCurrentRestaurantToLocalStorage(null);
      }
    },

    //! Resetto il carrello
    clearCart(state) {
      state.cart = [];
      state.currentRestaurant = null;
      saveCartToLocalStorage(state.cart);
      saveCurrentRestaurantToLocalStorage(null);
    },
  },

  //? Azioni del mapActions
  actions: {
    // Aggiungo piatto
    addToCart({ commit, state }, { dish, restaurantId }) {
      if (state.currentRestaurant && state.currentRestaurant !== restaurantId) {
        throw new Error("Puoi ordinare solo da un ristorante alla volta.");
      }
      commit("addToCart", { dish, restaurantId });
    },

    // Rimuovo il piatto
    removeFromCart({ commit }, index) {
      commit("removeFromCart", index);
    },

    //! Pulisco il carrello
    clearCart({ commit }) {
      commit("clearCart");
    },
  },

  //? mapGetters
  getters: {
    cartItems: (state) => state.cart,
    currentRestaurant: (state) => state.currentRestaurant,
  },
});
