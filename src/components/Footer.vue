<script></script>

<template>
  <footer class="mt-5">
    <div class="row p-4">
      <!--! aside left -->
      <div class="col d-flex flex-column">
        <!--? Logo -->
        <div class="logo mt-2">
          <h4>Logo figo</h4>
        </div>
        <!--? /Logo -->
        <!--% powered by -->
        <div class="mt-2">
          <p class="fw-light">powered by Team 5</p>
        </div>
        <!--% /powered by -->
      </div>
      <!--! /aside left -->

      <!--* aside Right -->
      <div class="col d-flex align-items-end flex-column">
        <!--? Nav -->
        <nav class="d-flex">
          <li>Home</li>
          <li>Ristoranti</li>
          <li>Chi Siamo</li>
        </nav>
        <!--? /Nav -->
        <!--% Icon -->
        <div class="d-flex icon-list justify-content-between mt-2">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-google-plus-g"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
        <!--% /Icon -->
      </div>
      <!--* /aside Right -->
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

$footer-bg-color: #1a1a1a;

footer {
  background-color: $footer-bg-color;
  color: #fff;
  height: 180px;
  width: 99vw;

  nav {
    li {
      list-style: none;
      margin: 10px;
    }
  }

  .icon-list {
    i {
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      aspect-ratio: 1;
      color: #fff;
      background-color: #f6a606;
      text-align: center;
      margin: 0 6px;
    }
  }
}
</style>
