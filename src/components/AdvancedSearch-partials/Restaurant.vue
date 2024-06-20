<script>
import RestaurantCard from "../partials/RestaurantCard.vue";
import { store } from "../../data/store";
export default {
  components: {
    RestaurantCard,
  },
  data() {
    return {
      store
    }
  }

};
</script>
<template>
  <div>
    <h2>Ristoranti</h2>
    
    <RestaurantCard v-for="restaurant in store.restaurants" :key="restaurant.id" :restaurant="restaurant"/>
 
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
