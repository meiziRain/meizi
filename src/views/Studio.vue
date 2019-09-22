<template>
  <div id="studio" >
    <!-- <SocialLinkCube></SocialLinkCube> -->
    <!-- <Carousel></Carousel> -->
    <!-- <Carousel3D></Carousel3D> -->
    <test></test>
  </div>
</template>

<script>
// @ is an alias to /src
import Star from "@/components/Star.vue";
import SocialLinkCube from "@/components/SocialLinkCube.vue";
import Carousel from "@/components/Carousel.vue";
import Carousel3D from "@/components/Carousel3D.vue";
export default {
  name: "studio",
  components: {
    Star,
    Carousel,
    Carousel3D
  },
  methods: {

  }
};
</script>

<style scoped>
#studio {
  width: 100vw;
  height: 100vh;
}

#sociallinkcube {
  overflow: hidden;
}
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>


