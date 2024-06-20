<script>
export default {};
</script>
<template>
  <div class="container-md d-flex justify-content-center my-3">
    <div class="food-card">
      <!--! Img Piatto -->
      <div class="food-img">
        <img src="" alt="" />
      </div>
      <!--! /Img Piatto -->
      <!--? Informazioni piatto e aggiunta al carrello -->
      <div class="food-info">
        <!-- Nome piatto -->
        <p>Pizza Margherita</p>
        <!-- /Nome piatto -->
        <!-- Descrizione piatto -->
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          tempora vero voluptatibus culpa iure quos rem, corporis voluptate iste
          porro.
        </p>
        <!-- /Descrizione piatto -->
        <!-- Prezzo piatto -->
        <p>$ 8,00</p>
        <!-- /Prezzo piatto -->

        <!-- TODO: fare aggiunta al carrello -->
        <!--% Aggiungi al carrello -->
        <div class="add-to-card">
          <button type="button" class="btn btn-primary">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
        <!--% /Aggiungi al carrello -->
      </div>
      <!--? /Informazioni piatto e aggiunta al carrello -->

      <!-- TODO: Stampa dinamica se vegano (true/false) -->
      <!--* Vegan -->
      <div class="vegan">
        <i class="fa-solid fa-leaf"></i>
      </div>
      <!--* /Vegan -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
$food-card-bg-color: #ececec;
$food-card-text-color: #b2adbe;
$vegan-icon-color: #059862;
.food-card {
  background-color: $food-card-bg-color;
  color: $food-card-text-color;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  // formato
  // width: 60%;
  // aspect-ratio: 1/0.5;
  border-radius: 20px;
  // /formato

  // Debug TODO: togliere
  cursor: pointer;

  // Effetti
  transition: all 0.6s;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  &:hover {
    scale: 1.01;
  }

  // Info piatto
  .food-info {
    padding: 30px;
  }
  // /Info piatto

  // Aggiungi al carrello
  .add-to-card {
    display: flex;
    justify-content: center;
  }
  // /Aggiungi al carrello

  // Icon vegan
  .vegan {
    position: absolute;
    top: 20px;
    right: 15px;
    transform: translate(-50%, -50%);

    i {
      font-size: 1.2em;
      color: $vegan-icon-color;
    }
  }
  // /Icon vegan
}
</style>
