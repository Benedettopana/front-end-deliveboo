<script>
export default {};
</script>
<template>
  <div class="container-fluid">
    <!--% Jumbotron -->
    <div class="container-jumbo w-100">
      <div class="jumbo-img w-100">
        <img :src="`../public/img/jumbotron/jumboexemple.jpg`" alt="" />
      </div>
    </div>
    <!--% /Jumbotron -->
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
.container-jumbo {
  margin-top: 70px;
  height: calc(99vh - 55px);
  // height: 100%;
  .jumbo-img {
    // width: 100%;
    height: 100%;
    img {
      height: 100%;
      // width: 100%;
      object-fit: cover;
    }
  }
}
</style>
