<template>
  <div id="studio">
    <div id="content">
      <!-- <Star></Star> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Star from "@/components/Star.vue";
export default {
  name: "studio",
  components: {
    Star,
  }
};
</script>

<style scoped>
#studio {
  position: relative;
  z-index: 1;
  height: 100rem;
  width:10rem;
  border: 1px solid red;
}
#content{

}
</style>


