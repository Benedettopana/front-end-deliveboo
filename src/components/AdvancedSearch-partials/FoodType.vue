<script>
import axios from "axios";
import { store } from "../../data/store.js";

export default {
  data() {
    return {
      store,
      axios,
      types: [],
      icons: "img/food-type/",
    };
  },

  methods: {
    getApi() {
      store.message = "";
      axios
        .get(store.apiUrl + "/types")
        .then((result) => {
          this.types = result.data.types;
          console.log(result.data.types);
          console.log(this.types);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    },

    getRestaurantsByType(typeName) {
      store.message = "";
      this.store.loading = true; // Imposta loading su true all'inizio della richiesta
      console.log("entro nella chiamata", this.store.loading);
      axios
        .get(`${store.apiUrl}/restaurants/${typeName}`)
        .then((result) => {
          store.restaurants = result.data.restaurants;
          console.log(result.data.restaurants);
          console.log("sono nella chiamata", this.store.loading);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        })
        .finally(() => {
          setTimeout(() => {
            this.store.loading = false; // Imposta loading su false dopo 1 secondo
          }, 1500);
          console.log("esco nella chiamata e ho aspettato", this.store.loading);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>
<template>
  <div class="container-fluid">
    <h1>Categorie</h1>
    <!--? Riga -->
    <div class="row justify-content-center">
      <!--% Colonne -->
      <div class="col-1" v-for="item in types" :key="item.id">
        <div class="type-card" @click="getRestaurantsByType(item.name)">
          <!-- :class="[selected ? isSelected : notSelected]" -->
          <div class="type-icon my-3">
            <img :src="`${icons}${item.name}.png`" :alt="`${item.name}`" />
          </div>
          <p class="my-3">{{ item.name }}</p>
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
$type-card-bg-color-active: #0d6efd;
$type-card-text-color: #b2adbe;
.type-card {
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

  .isSelected {
    background-color: $type-card-bg-color-active;
  }

  .notSelected {
    background-color: $type-card-bg-color;
  }
}
</style>
