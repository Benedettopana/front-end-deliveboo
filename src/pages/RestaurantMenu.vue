<script>
import FoodCard from "../components/partials/FoodCard.vue";
import { store } from "../data/store";
import AsideMenu from "../components/RestaurantMenu-partials/AsideMenu.vue";
export default {
  name: "restaurantMenu",

  components: {
    FoodCard,
    AsideMenu,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    redirectFunction() {
      this.$router.push({ name: "advanceResearch" });
    },
  },

  mounted() {
    // Se restauntDetail è vuoto ridireziono alla advanceResearch
    if (store.restaurant_detail.length == 0) {
      this.redirectFunction();
    }
  },
};
</script>

<template>
  <div class="container-fluid my-5">
    <h1 class="text-center mt-5">{{ store.restaurant_detail.name }}</h1>

    <div class="row row-cols-3 my-5">
      <div class="col-2">
        <AsideMenu />
      </div>
      <div class="col-8">
        <!--? Card piatti -->
        <div class="row">
          <div class="col-12">
            <FoodCard
              v-for="dish in store.restaurant_detail.dishes"
              :key="dish.id"
              :dish="dish"
            />
          </div>
        </div>
        <!--? /Card piatti -->
      </div>
      <div class="col-2">check</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
