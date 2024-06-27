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
      // scroll
      isScrolled: false,

      // Variabile di controllo per la homepage
      isHomePage: this.$route.name === "home",
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
          this.store.selected = [];
          console.log(result.data.restaurants);
          console.log(store.restaurants);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    },

    // Scroll
    handleScroll() {
      // Aggiorno is scroll solo se sono nella "home"
      if (this.isHomePage) {
        const jumbotronHeight = document.querySelector(".jumbotron")
          .offsetHeight;
        this.isScrolled = window.scrollY > jumbotronHeight;
      }
    },
  },

  // Utilizzo un watcher su "route.name" per aggiornare:
  // isHomePage/isScrolled quando cambio la rotta
  watch: {
    "$route.name"(newName) {
      this.isHomePage = newName === "home";
      if (!this.isHomePage) {
        this.isScrolled = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <!--* il binding di scrolled avviene solo quando sono nella "home" -->
  <header
    class="container-fluid"
    :class="{ scrolled: isScrolled || !isHomePage }"
  >
    <!--? Navbar -->
    <nav
      class="navbar fixed-top"
      :class="{ 'navbar-scrolled': isScrolled || !isHomePage }"
    >
      <div class="container">
        <a class="navbar-brand pt-0">Boo</a>

        <ul class="d-flex justify-content-center align-items-center pt-2">
          <li class="mx-3">
            <router-link :to="{ name: 'home' }" @click="getApi"
              >Home</router-link
            >
          </li>
          <li class="mx-2">
            <router-link :to="{ name: 'advanceResearch' }"
              >Ristoranti</router-link
            >
          </li>
          <li class="mx-3">
            <router-link :to="{ name: 'cart' }">Carrello</router-link>
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
  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
  }

  nav {
    height: 70px;
    transition: background-color 0.3s;

    &.navbar-scrolled {
      background-color: #181b21;
    }

    li {
      list-style: none;
      // padding-top: 5px;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: #e88735;
        }
      }
    }
  }
}

// resetto l'altezza
header.container-fluid {
  margin-top: 0 !important;
}

header.scrolled nav {
  background-color: #181b21;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
