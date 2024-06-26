
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
  computed: {
  imageUrl() {
    const baseUrl = "http://localhost:8000/storage"; 
    return `${baseUrl}/${this.dish.image}`;
  },
},

  mounted() {
    console.log("dish>>>>", this.dish);
  },
};
</script>
<template>
  <div v-if="dish.visibility" class="col d-flex justify-content-center  my-3">
    
    
    <div class="food-card">
<<<<<<< HEAD
      <div class="card" style="width: 18rem;">
        <img :src="imageUrl" class="card-img-top" :alt="dish.name">
        <div class="card-body">
          <h5 class="card-title">{{ dish.name }}</h5>
          <p class="card-text">{{ dish.desc }}</p>
          <a href="#" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i></a>
=======

        <img :src="imageUrl" class="card-img" :alt="dish.name">
        <div class="food-info">
          <h5 class="">{{ dish.name }}</h5>
          <p class="">{{ dish.desc }}</p>
          
>>>>>>> ee7bc84c09096f934a1cbad4c1c23a65da1a8736
        </div>
      </div>
        
 
          
 


      <!-- <div class="row row-cols-3 w-100">
  
        <div class="col">
  

            <img :src="imageUrl" :alt="dish.image">
            <p>{{ dish.name }}</p>
            
            <p>{{ dish.desc }}</p>
            
            <p>&euro; {{ dish.price.replace(".", ",") }}</p>







          

        </div>
        <div class="col-2">

          <div class="add-to-cart">
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCartHandler"
            >
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
 
        </div>
      </div> -->

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
  border: 5px solid rgb(232, 135, 53);
  display: flex;
  flex-direction: column;
  align-items: left;

  position: relative;
  // formato
  min-height: 100%;
  min-width: 100%;
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

  .card-img {
    height: 60%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  // Info piatto
  .food-info {
    padding: 15px 30px;
    color: black;
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
    bottom: 0px;
    right: 5px;
    transform: translate(-50%, -50%);

    i {
      font-size: 1.2em;
      color: $vegan-icon-color;
    }
  }
  // /Icon vegan
}




</style>
