<script>
import { store } from "../../data/store";
export default {
  props: {
    restaurant: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="col-12 my-5 d-flex justify-content-center">
    <div class="restaurant-card">
      <!--! restaurant img -->
      <!-- <div class="restaurant-tumb text-white mb-3">
        <img :src="restaurant.image" alt="">
      </div> -->
      <!--! /restaurant img -->
      <!--? restaurant info -->
      <div class="restaurant-info">
        <h3>{{ restaurant.name }}</h3>
        <div>
          Categorie:
          <span v-for="item in restaurant.types" :key="item.id" class="me-2">
            {{ item.name }}
          </span>
        </div>
        <p>Indirizzo: {{ restaurant.address }}</p>
        <p>Descrizione: {{ restaurant.desc }}</p>
      </div>
      <!--? /restaurant info -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$restaurant-card-bg-color: #ececec;
$restaurant-card-text-color: #b2adbe;

.restaurant-card {
  background-color: $restaurant-card-bg-color;
  color: $restaurant-card-text-color;
  border-radius: 20px;
  width: 80%;
  padding: 20px;

  .restaurant-tumb {
    background-color: #210b2d;
    width: 100%;
    height: 150px;
    border-radius: 20px;
  }
}
</style>
