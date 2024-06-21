<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  components: {},
  data() {
    return {
      store,
      axios,
      nameToSearch: "",
    };
  },
  methods: {
    search() {
      store.message = "";
      if (this.nameToSearch.length > 0) {
        axios
          .get(store.apiUrl + "/search/" + this.nameToSearch)
          .then((result) => {
            // this.typeName = result.data.types.name;
            console.log("RISULTATO RICERCA >>>>>>>>>", result.data);
            if (result.data.restaurants.length == 0) {
              store.message = "Nessun ristorante trovato";
            }
            console.log(store.message);
            store.restaurants = result.data.restaurants;
            this.nameToSearch = "";
            this.$router.push({ name: "advanceResearch" });

            // console.log(result.data.restaurants);
            // console.log(store.restaurants);
          })
          .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
      } else {
        this.getApi();
        this.$router.push({ name: "advanceResearch" });
      }
    },
    getApi() {
      axios
        .get(store.apiUrl + "/restaurants")
        .then((result) => {
          // this.typeName = result.data.types.name;
          store.restaurants = result.data.restaurants;

          console.log(result.data.restaurants);
          console.log(store.restaurants);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    },
  },
};
</script>

<template>
  <header class="container-fluid">
    <!--? Navbar -->
    <nav class="navbar bg-primary fixed-top" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand pt-0">Boo</a>

        <ul class="d-flex justify-content-center align-items-center pt-2">
          <li class="mx-3">
            <router-link :to="{ name: 'home' }" @click="getApi"
              >Home</router-link
            >
          </li>
          <li class="mx-3">
            <router-link :to="{ name: 'advanceResearch' }"
              >Ricerca Avanzata</router-link
            >
          </li>
          <!-- <li class="mx-3">
            <router-link :to="{ name: 'restaurantMenu' }"
              >Menu Ristorante</router-link
            >
          </li> -->
        </ul>

       <!-- <form class="d-flex" role="search" @submit.prevent="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model.trim="this.nameToSearch"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
    <!--? /Navbar -->
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

header {
  width: 99vw !important;

  nav {
    height: 70px;
    li {
      list-style: none;
      // padding-top: 5px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
