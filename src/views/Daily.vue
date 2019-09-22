<template>
  <div id="daily">
    <div id="bg">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moonlight from "../components/Moonlight.vue";
export default {
  name: "daily",
  components: {
    Moonlight,
  }
};
</script>

<style scoped>
#daily {
  /* position: relative; */
  z-index: 1;
}
#bg {
  background: url(https://api.dujin.org/bing/1920.php) no-repeat fixed;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  z-index: 1;
}
</style>


