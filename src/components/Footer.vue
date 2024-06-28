<script></script>

<template>
  <footer class="mt-5 h-25">
    <div class="row p-4">
      <!--! aside left -->
      <div class="col d-flex flex-column">
        <!--? Logo -->
        <div class="w-50">
          <img class="logo" src="/public/img/logo.png" />
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
      <div
        class="col d-flex justify-content-center align-items-end flex-column"
      >
        <div>
          <!--? Nav -->
          <nav class="d-flex mb-4 justify-content-center">
            <li><a href="">Home</a></li>
            <li><a href="">Ristoranti</a></li>
          </nav>
          <!--? /Nav -->
          <!--% Icon -->
          <div class="d-flex icon-list justify-content-between mt-4">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
          </div>
          <!--% /Icon -->
        </div>
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
  width: 100vw;

  nav {
    li {
      list-style: none;
      margin: 10px;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #f6a606;
        }
      }
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
      &:hover {
        color: black;
      }
    }
  }
}

// ---------- Media Queries ---------- //

// Mobile
@media screen and (max-width: 660px) {
  footer {
    .icon-list {
      i {
        font-size: small;
        line-height: 20px;
        height: 20px;
      }
    }
    nav {
      li {
        font-size: 0.8rem;
      }
    }
  }
}

// Tablet
@media screen and (min-width: 768px) {
  footer {
    nav {
      margin-bottom: 30px;
      li {
        font-size: 1.3rem;
      }
    }
  }
}

// Desktop
@media screen and (min-width: 1200px) {
  footer {
    nav {
      li {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
