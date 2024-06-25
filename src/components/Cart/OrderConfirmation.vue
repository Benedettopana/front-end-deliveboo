<script>
export default {
  name: "OrderConfirmation",
  props: {
    orderId: String,
  },
};
</script>

<template>
  <div class="container-fluid m-5">
    <div class="p-5">
      <h1>Ordine Confermato</h1>
      <p>Il tuo ordine è andato a buon fine!</p>
      <p>
        Codice della transazione: <strong>{{ orderId }}</strong>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
