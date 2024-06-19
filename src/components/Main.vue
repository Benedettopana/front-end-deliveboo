<script>
import Bento from "./Main-partials/Bento.vue";
import Most from "./Main-partials/Most.vue";
import Counter from "./Main-partials/Counter.vue";

// import {store} from '../data/store';

export default {
  components: {
    Bento,
    Most,
    Counter,
  },
  data() {
    return {
      // store,
    };
  },
};
</script>

<template>
  <Bento />
  <Most />
  <Counter />
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
