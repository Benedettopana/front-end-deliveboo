<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/partials/Loader.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  components: {
    Header,
    Loader,
    Footer,
  },

  data() {
    return {
      axios,
      store,
      isApiCallInProgress: false,
      // typeName: [],
    };
  },

  methods: {
    async getApi() {
      if (this.isApiCallInProgress) return;

      this.isApiCallInProgress = true;
      this.store.loading = true;

      try {
        const result = await axios.get(`${store.apiUrl}/restaurants`);
        store.restaurants = result.data.restaurants;
        console.log(store.restaurants);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          this.store.loading = false;
          this.isApiCallInProgress = false;
        }, 1000);
      }
    },
  },
  mounted() {
    this.getApi(this.$route.params);
  },
};
</script>

<template>
  <Header />
  <!--* Loader -->
  <div v-if="store.loading">
    <Loader />
  </div>
  <!--* /Loader -->
  <!--? Contenuto Pagina -->
  <div v-else class="main-content">
    <router-view></router-view>
  </div>

  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
