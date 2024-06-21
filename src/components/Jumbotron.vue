<script>
export default {
  data() {
    return {
      image: null,
      items: [],
      contents: [
        { name: "Piatto 1", description: "Aggiungi desc.." },
        { name: "Piatto 2", description: "Aggiungi desc.." },
        { name: "Piatto 3", description: "Aggiungi desc.." },
        { name: "Piatto 4", description: "Aggiungi desc.." },
        { name: "Piatto 5", description: "Aggiungi desc.." },
        { name: "Piatto 6", description: "Aggiungi desc.." },
      ],
      rotate: 0,
      active: 0,
      countItem: 0,
      rotateAdd: 0,
      autoplayInterval: null,
    };
  },

  methods: {
    slider() {
      this.image = document.querySelector(".jumboImg");
      this.items = document.querySelectorAll(".jumboImg .item");
      this.countItem = this.items.length;
      this.rotateAdd = 360 / this.countItem;
    },

    nextSlider() {
      this.active = (this.active + 1) % this.countItem;
      this.rotate += this.rotateAdd;
      this.show();
    },

    prevSlider() {
      this.active = (this.active - 1 + this.countItem) % this.countItem;
      this.rotate -= this.rotateAdd;
      this.show();
    },

    show() {
      this.image.style.setProperty("--rotate", this.rotate + "deg");
      this.contents.forEach((content, key) => {
        // if (key == this.active) {
        //   content.active = true;
        // } else {
        //   content.active = false;
        // }
        content.active = key === this.active;
      });
    },

    // Autoplay
    startAutoplay() {
      // Cambia slider ogni 3 secondi
      this.autoplayInterval = setInterval(this.prevSlider, 3000);
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    },
    // /Autoplay
  },

  mounted() {
    this.slider();
    this.show();
    this.startAutoplay();
  },

  beforeDestroy() {
    this.stopAutoplay();
  },
};
</script>

<template>
  <!--% Jumbotron -->
  <div class="container-fluid">
    <div class="slider">
      <div class="title">DeliveBoo!</div>
      <div
        class="jumboImg"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div class="item" style="--i: 1">
          <img :src="`/img/jumbotron/1.PNG`" class="dishImg" />
        </div>
        <div class="item" style="--i: 2">
          <img :src="`/img/jumbotron/2.PNG`" class="dishImg" />
        </div>
        <div class="item" style="--i: 3">
          <img :src="`/img/jumbotron/3.PNG`" class="dishImg" />
        </div>
        <div class="item" style="--i: 4">
          <img :src="`/img/jumbotron/4.PNG`" class="dishImg" />
        </div>
        <div class="item" style="--i: 5">
          <img :src="`/img/jumbotron/5.PNG`" class="dishImg" />
        </div>
        <div class="item" style="--i: 6">
          <img :src="`/img/jumbotron/6.PNG`" class="dishImg" />
        </div>
      </div>
      <div
        class="content"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div
          class="item"
          v-for="(content, index) in contents"
          :key="index"
          :class="{ active: index === active }"
        >
          <h1>{{ content.name }}</h1>
          <div class="des">
            {{ content.description }}
          </div>
          <button>See more</button>
        </div>
      </div>
      <button id="prev" @click="nextSlider">&lt;</button>
      <button id="next" @click="prevSlider">&gt;</button>
    </div>
  </div>
  <!--% /Jumbotron -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.slider {
  margin: 0;
  font-family: monospace;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #2b2f3a, #0d0e12);
  overflow: hidden;
  &::before {
    position: absolute;
    width: 50%;
    height: 100vh;
    content: "";
    top: 0;
    left: 0;
    background-color: #e88735;
  }
}

.dishImg {
  width: calc(100% / 3) !important;
}
.title {
  position: absolute;
  top: 10%;
  right: 60%;
  text-align: right;
  color: #fff;
  font-size: 150px;
  width: 40%;
  font-family: "Pacifico", cursive;
  text-shadow: 3px 5px 0px #478860;
  line-height: 0.9em;
  transform: rotate(-5deg);
}
.jumboImg {
  position: absolute;
  bottom: 0%;
  left: 50%;
  --rotate: 0deg;
  transform: translate(-50%, 50%) rotate(var(--rotate));
  width: 1300px;
  height: 1300px;
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
  outline: 1px dashed #fff5;
  outline-offset: -100px;
  & .item {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    rotate: calc(60deg * var(--i));
    & img {
      height: 420px;
    }
  }
}

.content {
  color: #fff;
  position: absolute;
  top: 10%;
  left: 60%;
  text-align: justify;
  width: 350px;
  & h1 {
    color: #e88735;
    font-size: xxx-large;
  }
  & button {
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #e88735;
    color: #fff;
    border: none;
    float: right;
  }
  & .item {
    display: none;
  }
  & .item.active {
    display: block;
  }
}
@keyframes showContent {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
  }
}
.content .item.active h1 {
  opacity: 0;
  animation: showContent 0.5s ease-in-out 1 forwards;
}
.content .item.active .des {
  opacity: 0;
  animation: showContent 0.5s 0.3s ease-in-out 1 forwards;
}
.content .item.active button {
  opacity: 0;
  animation: showContent 0.5s 0.6s ease-in-out 1 forwards;
}

#prev,
#next {
  position: absolute;
  border: none;
  top: 50%;
  left: 250px;
  font-size: 100px;
  font-family: cursive;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  opacity: 0.3;
}
#next {
  left: unset;
  right: 250px;
}
#next:hover,
#prev:hover {
  opacity: 1;
}
</style>
