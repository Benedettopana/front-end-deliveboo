<script>
import Jumbotron from "../components/Jumbotron.vue";
import Main from "../components/Main.vue";
export default {
  name: "home",

  components: {
    Jumbotron,
    Main,
  },

  data() {
    return {};
  },
};
</script>

<template>
  <Jumbotron />
  <Main />
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
