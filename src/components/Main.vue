<script>
import Bento from "./main-partials/Bento.vue";
import Most from "./main-partials/Most.vue";
import Counter from "./main-partials/Counter.vue";

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
