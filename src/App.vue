<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
// import {store} from './data/store';

export default {
  components: {
    Header,
    Main,
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
  <Main />
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
