<script>
import AsideAdvResearch from "../components/AdvancedSearch-partials/AsideAdvResearch.vue";
import Banner from "../components/AdvancedSearch-partials/Banner.vue";
import FoodType from "../components/AdvancedSearch-partials/FoodType.vue";
import Restaurant from "../components/AdvancedSearch-partials/Restaurant.vue";

export default {
  name: "advanceResearch",

  components: {
    AsideAdvResearch,
    Banner,
    FoodType,
    Restaurant,
  },
};
</script>

<template>
  <div>
    <h1 class="my-5">Ricerca avanzata</h1>
    <AsideAdvResearch />
    <Banner />
    <FoodType />
    <Restaurant />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
