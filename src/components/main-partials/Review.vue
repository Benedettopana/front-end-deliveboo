<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <div class="container-fluid h-100">
    <div class="mySlider">
      <div class="swiper-wrapper text-center">
        <swiper
          :initial-slide="2"
          :slidesPerView="3"
          :spaceBetween="20"
          :centeredSlides="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="review-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, odit?
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, odit?
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, odit?
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, odit?
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, odit?
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$review-card-bg-color: #ececec;
$review-card-text-color: #b2adbe;

.mySlider {
  width: 100%;
  height: 250px;
  margin-top: 100px;

  .review-card {
    width: 50%;
    height: 100%;
    background-color: $review-card-bg-color;
    color: $review-card-text-color;
    padding: 30px;
    border-radius: 20px;
  }
}
</style>
