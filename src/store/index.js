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

export const store = createStore({
  state: {
    cart: loadCartFromLocalStorage(),
    // cart: [], // Array per contenere i piatti nel carrello
  },
  mutations: {
    addToCart(state, dish) {
      state.cart.push(dish);
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
      saveCartToLocalStorage(state.cart);
    },
  },
  actions: {
    addToCart({ commit }, dish) {
      commit("addToCart", dish);
    },
    removeFromCart({ commit }, index) {
      commit("removeFromCart", index);
    },
  },
  getters: {
    cartItems: (state) => state.cart,
  },
});
