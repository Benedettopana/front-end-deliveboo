<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
import {store} from './data/store';

export default {
  components: {
    Header,

    Footer,
  },

  data() {
    return {
      axios,
      store,
      restaurants: [],
      // typeName: [],
    };
  },

    methods: {
      getApi(){
        axios.get(store.apiUrl + '/restaurants')
        .then(result=> {
          // this.typeName = result.data.types.name;
          this.restaurants = result.data.restaurants
          
          console.log(result.data);
          console.log(this.typeName);
        })
        .catch(error => {
        console.log(error);
        console.log(error.message);
        })
      }
    },
    mounted(){
      this.getApi(this.$route.params)
    }
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
