<template>
  <div id="studio">
<SocialLinkCube></SocialLinkCube>
  </div>
</template>

<script>
// @ is an alias to /src
import Star from "@/components/Star.vue";
import SocialLinkCube from "@/components/SocialLinkCube.vue";
export default {
  name: "studio",
  components: {
    Star,
    SocialLinkCube
  }
};
</script>

<style scoped>
#sociallinkcube{
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


