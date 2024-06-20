<script>
import RestaurantCard from "../partials/RestaurantCard.vue";
export default {
  components: {
    RestaurantCard,
  },
};
</script>
<template>
  <div>
    <h1>Restaurant</h1>

    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
