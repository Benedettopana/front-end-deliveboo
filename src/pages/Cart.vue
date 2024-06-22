<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cart",

  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
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
  </div>
</template>

<style lang="scss" scoped></style>
