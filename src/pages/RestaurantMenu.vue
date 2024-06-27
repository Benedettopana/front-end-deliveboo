<script>
import FoodCard from "../components/partials/FoodCard.vue";
import { store } from "../data/store";
import AsideMenu from "../components/RestaurantMenu-partials/AsideMenu.vue";
import AsideCart from "../components/RestaurantMenu-partials/AsideCart.vue";

export default {
  name: "restaurantMenu",

  components: {
    FoodCard,
    AsideMenu,
    AsideCart,
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
    <h1 class="text-center pt-5">{{ store.restaurant_detail.name }}</h1>

    <div class="row row-cols-3 my-5">
      <div class="col-3">
        <!-- <AsideMenu /> -->
      </div>
      <div class="col-6">
        <p class="text-center px-5 pt-5">
          {{ store.restaurant_detail.desc }}
        </p>
        <p class="text-center px-5 pt-2">
          {{ store.restaurant_detail.address }}
        </p>
        <!--? Card piatti -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-2">
          <FoodCard
            v-for="dish in store.restaurant_detail.dishes"
            :key="dish.id"
            :dish="{
              ...dish,
              restaurant_id: store.restaurant_detail.id,
              restaurant_name: store.restaurant_detail.name,
            }"
            :restaurantName="store.restaurant_detail.name"
          />
        </div>
        <!--? /Card piatti -->
      </div>
      <div class="col-3">
        <AsideCart />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
