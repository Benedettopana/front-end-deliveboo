<script>
import { mapActions } from "vuex/dist/vuex.cjs.js";
import { useToast } from "vue-toastification";
export default {
  props: {
    dish: Object,
    restaurantName: String,
  },

  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["addToCart"]),
    addToCartHandler() {
      try {
        console.log("Nome ristorante>>>>>>>", this.dish.restaurant_name);
        const restaurant = {
          id: this.dish.restaurant_id,
          name: this.dish.restaurant_name,
        };
        this.addToCart({
          dish: this.dish,
          restaurant: restaurant,
        });
        console.log("questo è il piatto che sto aggiungendo>>>>", this.dish);
        this.toast.success(`${this.dish.name} aggiunto al carrello.`);
      } catch (error) {
        this.toast.error(error.message);
      }
    },
  },

  mounted() {
    console.log("dish>>>>", this.dish);
  },
};
</script>
<template>
  <div class="container-md d-flex justify-content-center my-3">
    <div v-show="dish.visibility" class="food-card">
      <div class="row row-cols-3 w-100">
        <!--! Img Piatto -->
        <div class="col-3">
          <div class="food-img">
            <img src="" alt="" />
          </div>
        </div>
        <!--! /Img Piatto -->
        <div class="col-7">
          <!--? Informazioni piatto e aggiunta al carrello -->
          <div class="food-info">
            <!-- Nome piatto -->
            <p>{{ dish.name }}</p>
            <!-- /Nome piatto -->
            <!-- Descrizione piatto -->
            <p>
              {{ dish.desc }}
            </p>
            <!-- /Descrizione piatto -->
            <!-- Prezzo piatto -->
            <p>&euro; {{ dish.price.replace(".", ",") }}</p>
            <!-- /Prezzo piatto -->
          </div>
        </div>
        <div class="col-2">
          <!-- TODO: fare aggiunta al carrello -->
          <!--% Aggiungi al carrello -->
          <div class="add-to-cart">
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCartHandler"
            >
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
          <!--% /Aggiungi al carrello -->
        </div>
      </div>

      <!--? /Informazioni piatto e aggiunta al carrello -->

      <!--* Vegan -->
      <div v-show="dish.vegan" class="vegan">
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
  width: 60%;
  border-radius: 20px;
  // /formato

  // Debug TODO: togliere
  // cursor: pointer;

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
  .add-to-cart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 20px;
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
