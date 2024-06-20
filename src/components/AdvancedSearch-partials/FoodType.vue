<script>
export default {};
</script>
<template>
  <div class="container-fluid">
    <h1>Categorie</h1>
    <!--? Riga -->
    <div class="row justify-content-center">
      <!--% Colonne -->
      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/fast-food.png`" alt="" />
          </div>
          <p class="my-3">Fast-food</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/ramen.png`" alt="" />
          </div>
          <p class="my-3">Cinese</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/taco.png`" alt="" />
          </div>
          <p class="my-3">Tacos</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/hamburger.png`" alt="" />
          </div>
          <p class="my-3">Hamburger</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/kebab.png`" alt="" />
          </div>
          <p class="my-3">Kebab</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/noodles.png`" alt="" />
          </div>
          <p class="my-3">Noodles</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/pizza.png`" alt="" />
          </div>
          <p class="my-3">Pizza</p>
        </div>
      </div>

      <div class="col-1">
        <div class="type-card">
          <div class="type-icon my-3">
            <img :src="`img/food-type/salad.png`" alt="" />
          </div>
          <p class="my-3">Insalata</p>
        </div>
      </div>
      <!--% /Colonne -->
    </div>
    <!--? /Riga -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$type-card-bg-color: #ececec;
$type-card-text-color: #b2adbe;
.type-card {
  background-color: $type-card-bg-color;
  color: $type-card-text-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // formato
  width: 130px;
  aspect-ratio: 1;
  border-radius: 20px;
  // /formato

  // Debug TODO: togliere
  cursor: pointer;

  // Effetti
  transition: all 0.6s;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  &:hover {
    scale: 1.1;
  }
  .type-icon {
    width: 50px;
    // img {
    // }
  }
}
</style>
