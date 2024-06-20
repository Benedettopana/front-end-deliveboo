<script>
import RestaurantCard from "../partials/RestaurantCard.vue";
import { store } from "../../data/store";
export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container-xxl my-5">
    <h2 class="text-center">Ristoranti</h2>
    <h4>{{ store.message }}</h4>
    <div class="row">
      <RestaurantCard
        v-for="restaurant in store.restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
