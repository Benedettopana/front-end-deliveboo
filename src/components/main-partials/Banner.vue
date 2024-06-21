<script>
export default {};
</script>
<template>
  <div class="container-fluid my-5">
    <div class="img-banner">
      <img :src="`/img/home/pic1.jpg`" alt="" />

      <div class="banner">
        <h3 class="text-center mt-4">
          I migliori ristoranti adesso a casa tua!
        </h3>

        <!--? BTN -->
        <div class="d-flex justify-content-center mt-5">
          <button class="btn">
            <router-link :to="{ name: 'advanceResearch' }"
              >Ricerca Avanzata</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$btn-bg-color: #16181e;
$btn-text-color: #e88735;
$banner-bg-color: #e88735;
$banner-text-color: #16181e;
.img-banner {
  width: 55%;
  position: relative;

  .banner {
    width: 40%;
    height: 30%;
    background-color: $banner-bg-color;
    color: $banner-text-color;
    font-size: 0.8em;
    border-radius: 20px;
    padding: 20px;
    // Posizionamento
    position: absolute;
    top: 50%;
    right: -40%;
    transform: translate(-50%, -50%);
    // /Posizionamento

    button {
      background-color: $btn-bg-color;
      // color: $btn-text-color;
      a {
        text-decoration: none;
        color: $btn-text-color;
      }
    }
  }
}
</style>
