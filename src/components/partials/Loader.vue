<script>
import { store } from '../../data/store'
export default {
  data(){
    return{
      store
    }
  },
};
</script>
<template>
  <div>
    <div :class="['load', { 'min-eight100' : this.store.loading  } ] ">
      <div class="pan-loader">
        <div class="loader"></div>
        <div class="pan-container">
          <div class="pan"></div>
          <div class="handle"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
// Loader
.load {
  display: flex;
  justify-content: center;
  align-items: center;
}
.min-eight100{
  min-height: 100vh;
  
}
@keyframes loader {
  0% {
    width: 10%;
    transform: rotate(0deg);
  }
  10% {
    left: 0%;
    transform: rotate(0deg);
  }
  20% {
    width: 0%;
    left: 20%;
  }
  30% {
    width: 25%;
  }
  50% {
    left: 15%;
    width: 35%;
  }
  70% {
    width: 30%;
    left: 18%;
    transform: rotate(240deg);
  }
  90% {
    width: 30%;
    left: 10%;
  }
  100% {
    width: 2%;
    left: 25%;
    transform: rotate(360deg);
  }
}
@keyframes pan {
  0% {
    transform: rotate(0deg);
    transform-origin: top right;
  }
  10% {
    transform: rotate(-2deg);
    transform-origin: top right;
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes shadow {
  0% {
    width: 30%;
  }
  50% {
    width: 40%;
    left: 20px;
  }
  100% {
    width: 30%;
  }
}
.pan-loader {
  width: 180px;
  height: 180px;
}
.loader {
  position: relative;
  top: 10%;
  left: 0;
  z-index: -1;
  width: 60%;
  height: 45%;
  border: 10px solid transparent;
  border-bottom: 10px solid #e88735;
  border-radius: 50%;
  animation: loader 2s infinite;
  animation-timing-function: linear;
}
.pan-container {
  display: flex;
  width: 100%;
  animation: pan 2s infinite;
}
.pan {
  width: 60%;
  height: 20px;
  background: linear-gradient(#000, #333);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.handle {
  width: 40%;
  height: 10px;
  background: linear-gradient(#000, #333);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.shadow {
  position: relative;
  top: 15%;
  left: 15%;
  width: 30%;
  height: 8px;
  background: lightgray;
  border-radius: 20px;
  animation: shadow 2s infinite;
}
// /Loader
</style>
