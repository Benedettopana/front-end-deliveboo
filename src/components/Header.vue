<script>
export default {
  components: {},
  data() {
    return {};
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
            <router-link :to="{name:'home'}">Home</router-link>
          </li>
          <li class="mx-3">
            <router-link :to="{name:'advanceResearch'}">Ricerca Avanzata</router-link>
          </li>
          <li class="mx-3">
            <router-link :to="{name:'restaurantMenu'}">Menu Ristorante</router-link>
          </li>
        </ul>
  
            

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!--? /Navbar -->


    <!--% Jumbotron -->
    <div class="container-jumbo w-100">
      <div class="jumbo-img w-100">
        <img :src="`../public/img/jumbotron/jumboexemple.jpg`" alt="" />
      </div>
    </div>
    <!--% /Jumbotron -->
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

header {
  width: 99vw !important;

  nav {
    height: 70px;
    li{
      list-style: none;
      // padding-top: 5px;
      a{
        color:white;
        text-decoration: none;
      }
    }
  }
  .container-jumbo {
    margin-top: 70px;
    height: calc(99vh - 55px);
    // height: 100%;
    .jumbo-img {
      // width: 100%;
      height: 100%;
      img {
        height: 100%;
        // width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
