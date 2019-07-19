<template>
  <div id="logoDiv" @click="$emit('click')" @mouseenter="$emit('mouseenter')" @mouseleave="$emit('mouseleave')">
    <img class="img" alt="Meizi" src="../assets/icon.png">
  </div>
</template>

<script>
export default {
  name: "logo",
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logoDiv {
}
.img {
  width: 100%;
  height: 100%;
}


</style>
