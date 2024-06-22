import { createStore } from "vuex";

export const store = createStore({
  state: {
    cart: [], // Array per contenere i piatti nel carrello
  },
  mutations: {
    addToCart(state, dish) {
      state.cart.push(dish);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
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
