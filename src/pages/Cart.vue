<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cart",

  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["removeFromCart", "clearCart"]),
  },
};
</script>
<template>
  <div>
    <h2>Carrello</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - {{ item.price }}
        <button class="btn btn-danger" @click="removeFromCart(index)">
          Rimuovi
        </button>
      </li>
    </ul>

    <!--! Pulsante che svuota il carrello -->
    <div class="">
      <button class="btn btn-warning" @click="clearCart">
        Svuota carrello
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
