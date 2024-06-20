<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
// import {store} from './data/store';

export default {
  components: {
    Header,

    Footer,
  },

  data() {
    return {
      axios,
    };
  },
};
</script>

<template>
  <Header />

  <div>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
