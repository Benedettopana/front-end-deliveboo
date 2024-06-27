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
      myString: "",
      selectedTypes: [],

      ricerca: "",
    };
  },

  methods: {
    getTypes() {
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

    saveTypes(typeName) {
      if (this.store.selected.includes(typeName)) {
        this.store.selected = this.store.selected.filter(
          (type) => type !== typeName
        );
      } else {
        this.store.selected.push(typeName);
      }
      this.myString = this.store.selected.toString();
      this.getRestaurantsByType();
    },

    getRestaurantsByType() {
      store.message = "";
      this.store.loading = true;

      this.ricerca =
        this.store.selected.length < 1
          ? this.store.apiUrl + "/restaurants"
          : this.store.apiUrl + "/restaurants/type/?types=" + this.myString;

      axios
        .get(this.ricerca)
        .then((result) => {
          store.restaurants = result.data.restaurants;
          console.log(store.restaurants);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        })
        .finally(() => {
          setTimeout(() => {
            this.store.loading = false; // Imposta loading su false dopo 1 secondo
          }, 1500);
          this.myString = "";
        });
    },
    jumboSearch() {
      if (this.store.jumboChoose != "") {
        this.saveTypes(this.store.jumboChoose);
        this.store.jumboChoose = "";
      }
    },
  },
  mounted() {
    this.getTypes();
    this.jumboSearch();
    this.getRest;
  },
};
</script>
<template>
  <div class="container-fluid">
    <h1 class="mb-4 text-center my-text">Le nostre tipologie di Ristoranti</h1>
    <!--? Riga -->
    <div class="row justify-content-center px-5">
      <!--% Colonne -->
      <div
        class="col-md-2 col-sm-3 col-4 mb-4"
        v-for="item in types"
        :key="item.id"
        @click="saveTypes(item.name)"
      >
        <div
          class="type-card"
          :class="{ active: store.selected.includes(item.name) }"
        >
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
$type-card-bg-color-active: #e88735;
$type-card-text-color: #000000;

// .my-text{
//   color: #e88735;
// }

.type-card {
  color: $type-card-text-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // formato
  // width: 130px;
  // aspect-ratio: 1;
  border: 3px solid #e88735;
  border-radius: 20px;
  font-weight: 500;
  // /formato
  cursor: pointer;

  // Effetti
  transition: all 0.3s ease-out;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
  .type-icon {
    width: 40px;
    // img {
    // }
  }

  &.active {
    background-color: $type-card-bg-color-active;
    color: white;
  }

  .container-fluid {
    padding: 20px;
  }
}
</style>
