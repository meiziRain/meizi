<template>
  <div id="loading"></div>
</template>

<script>
export default {
  name: "loading",
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Page Loader */
@keyframes bgColorTransition {
  0% {
    background-color: rgb(255, 255, 255);
  }
  25% {
    background-color: rgb(168, 168, 168);
  }
  50% {
    background-color: rgb(83, 83, 83);
  }
  100% {
    background-color: rgb(15, 14, 14);
  }
}
@-webkit-keyframes bgColorTransition {
  0% {
    background-color: rgb(255, 255, 255);
  }
  25% {
    background-color: rgb(168, 168, 168);
  }
  50% {
    background-color: rgb(83, 83, 83);
  }
  100% {
    background-color: rgb(15, 14, 14);
  }
}
#loading::before {
  content: "";
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 为了不显得突兀，加了白色到黑色过度 */
  animation: bgColorTransition 2s ease-in-out;
  animation-fill-mode: forwards;
}

#loading::after {
  content: "";
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.4;
  background: #de6565;
  animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}
</style>
