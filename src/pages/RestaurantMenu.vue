<script>
import FoodCard from "../components/partials/FoodCard.vue";
export default {
  name: "restaurantMenu",

  components: {
    FoodCard,
  },
};
</script>

<template>
  <div class="container-fluid">
    <!-- TODO:Aggiungere  in modo dinamico il nome -->
    <h1 class="text-center mt-5">Il mio ristorante</h1>

    <div class="row row-cols-3 my-5">
      <div class="col-2">aside</div>
      <div class="col-8">
        <!--? Card piatti -->
        <div class="row">
          <!-- TODO: Stampa card dinamiche -->
          <div class="col-12">
            <FoodCard />
          </div>
          <div class="col-12">
            <FoodCard />
          </div>
          <div class="col-12">
            <FoodCard />
          </div>
          <div class="col-12">
            <FoodCard />
          </div>
          <div class="col-12">
            <FoodCard />
          </div>
          <div class="col-12">
            <FoodCard />
          </div>
        </div>
        <!--? /Card piatti -->
      </div>
      <div class="col-2">check</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
