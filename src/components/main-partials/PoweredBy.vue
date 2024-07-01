<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, FreeMode],
    };
  },
};
</script>

<template>
  <div class="powered-container">
    <h1 class="text-center">Powered by:</h1>
    <div class="mySlider">
      <swiper
        :breakpoints="{
          '0': {
            slidesPerView: 1,
          },
          '550': {
            slidesPerView: 2,
          },
          '820': {
            slidesPerView: 3,
          },
          '1150': {
            slidesPerView: 4,
          },
          '1400': {
            slidesPerView: 5,
          },
        }"
        :modules="modules"
        class="mySwiper"
        loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }"
        speed="4000"
        freeMode="true"
        freeModeMomentum="false"
      >
        <swiper-slide>
          <div class="review-card position-relative" style="margin-left: 5%;">
            <h6>Benny</h6>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-card position-relative">
            <h6>Elena</h6>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-card position-relative">
            <h6>Enrico</h6>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-card position-relative">
            <h6>Eugenio</h6>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-card position-relative">
            <h6>Juri</h6>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-card position-relative">
            <h6>Mirco</h6>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.mySlider {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 70px;

  .review-card {
    margin: 0 auto;
    width: 250px;
    height: 250px;
    background-color: white;
    color: black;
    padding: 30px 20px;
    border-radius: 20px;
    border: 3px solid rgb(232, 135, 53);
  }
}
</style>
