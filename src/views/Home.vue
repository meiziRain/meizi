<template>
  <div id="home">
    <div id="bg">
      <!-- <Dusk v-if="$store.state.current=='dusk'"></Dusk>
      <Moonlight v-if="$store.state.current=='moonlight'"></Moonlight>
      <Sun v-if="$store.state.current=='sun'"></Sun> -->
    </div>
    <div id="word">
      <Flashword></Flashword>
    </div>
    <Logo id="logo" @mouseenter="mouseenter()" @mouseleave="mouseleave()"></Logo>
  </div>
</template>

<script>
// @ is an alias to /src

import Flashword from "@/components/Flashword.vue";
import Dusk from "@/components/Dusk.vue";
import Moonlight from "@/components/Moonlight.vue";
import Sun from "@/components/Sun.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "home",
  components: {
    Flashword,
    Dusk,
    Moonlight,
    Sun,
    Logo
  },
  data() {
    return {};
  },
  mounted() {
    const timeNow = require("dayjs");
    if (
      (timeNow().hour() >= 17 && timeNow().hour() < 20) ||
      (timeNow().hour() >= 4 && timeNow().hour() < 7)
    ) {
      console.log("04:00 AM ~07:00 AM or 05:00 PM ~ 08:00 PM");
      this.$store.state.current = "dusk";
    }
    if (timeNow().hour() >= 7 && timeNow().hour() < 17) {
      console.log("07:00 AM ~ 05:00 PM");
      this.$store.state.current = "sun";
    }
    if (timeNow().hour() >= 20 || timeNow().hour() < 4) {
      console.log("20:00 PM ~ 04:00 AM");
      this.$store.state.current = "moonlight";
    }
  },
  methods: {
    mouseenter() {
      let logo = document.getElementById("logo");
      logo.style.animation = "rotate 3s linear infinite";
    },
    mouseleave() {
      let logo = document.getElementById("logo");
      logo.style.animation = "";
    }
  }
};
</script>

<style scoped>
#home {
  /* position: relative;
  z-index: 1;


  margin: 0; */
    width: 100vw;
  height: 100vh;
  animation: fade 1s ease forwards;
    overflow: hidden;
      margin: 0;
}
#word {
  position: absolute;
  font-size: 5vw;
  width: 100vw;
  height: 20rem;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  opacity: 0.9;
  z-index: 999;
}
@-webkit-keyframes fade {
  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fade {
  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fade {
  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade {
  /*设置内容由显示变为隐藏*/
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#logo {
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  z-index: 999;
}
#logo :hover {
  transform: scale(1.3);
}
@media screen and (max-width: 400px) {
  #logo {
    width: 3rem;
    height: 3rem;
  }
}
</style>


