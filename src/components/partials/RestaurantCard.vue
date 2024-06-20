<script>
export default {};
</script>
<template>
  <div class="col-12 my-5">
    <div class="restaurant-card">
      <!--! restaurant img -->
      <div class="restaurant-tumb mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        temporibus. Facere numquam placeat dignissimos quod deleniti nesciunt
        ipsum quibusdam, iure quia molestias possimus porro tenetur, fugit sit
        saepe itaque eveniet!
      </div>
      <!--! /restaurant img -->
      <!--? restaurant info -->
      <div class="restaurant-info">
        <p>Nome: Il mio ristorant</p>
        <p>Categorie: pizza</p>
        <p>Indirizzo: Via dei platani 12</p>
        <p>
          Descrizione: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora quaerat recusandae eveniet sit velit beatae illo architecto
          magni! Animi hic ex soluta dignissimos reprehenderit, corrupti
          voluptatem possimus molestiae unde dolor commodi nostrum, accusamus
          expedita dicta harum vero, aut est assumenda.
        </p>
      </div>
      <!--? /restaurant info -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.restaurant-card {
  width: 80%;
  .restaurant-tumb {
    background-color: #210b2d;
    width: 100%;
    height: 150px;
    border-radius: 20px;
  }
}
</style>
