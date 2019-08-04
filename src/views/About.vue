<template>
  <div id="about">
    <!-- <div id="slogan" @mouseover="mouseover()" @mouseout="mouseout()"></div> -->
    <div id="profile">
      <!-- <div id="avatar"><img style="width:100%;height:100%;border-radius:50%" src="../assets/about/avatar.jpg" alt=""></div> -->
      <CircleHover style="  margin-top: 7rem;"></CircleHover>
      <div id="nickname">Meizi</div>
      <div id="position">前端开发者</div>
      <div id="introduce">
        heloe asskasjka akjskasjk aksjk
        <br />asas as adsfggd sfsf hfyrtygxvx
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo.vue";
import CircleHover from "@/components/CircleHover.vue";
import { novacancy } from "@/assets/about/jquery.novacancy.js"; //注意路径
export default {
  name: "about",
  components: {
    Logo,
    CircleHover
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    novacancy();
    this.init();
  },
  methods: {
    mouseover() {
      console.log("mouseover");
      var sloganObj = document.getElementById("slogan");
      sloganObj.style.animationName = "sloganMouseover";
      sloganObj.style.animationDuration = "0.2s";
    },
    mouseout() {
      console.log("mouseout");
      var sloganObj = document.getElementById("slogan");
      sloganObj.style.animationName = "sloganMouseout";
      sloganObj.style.animationDuration = "0.5s";
    },
    // css只能为每一个元素设置一个animation属性

    init() {
      $("#nickname").novacancy({
        blink: 1,
        off: 1,
        color: "Red",
        glow: ["0 0 80px Red", "0 0 30px FireBrick", "0 0 6px DarkRed"]
      });
    }
  }
};
</script>

<style scoped>
#about {
  width: 100vw;
  color: white;
}
#nickname {
  border: 1px solid red;
  font-weight: 300;
  text-align: center;
  font-size: 6em;
  font-family: "Monoton", cursive;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  /* transition: font-weight 0.2s ease; */
}
@media screen and (max-width: 400px) {
  #nickname {
    font-weight: 300;
    font-size: 3em;
  }
}
#nickname:hover {
  font-weight: 600;
}
#profile {
  top: 30%;
  border: 1px solid red;
  height: 30rem;
}
#avatar {
  height: 8rem;
  width: 8rem;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
}
#position {
  color: #999;
  text-align: center;
  padding: 1.2em;
}

#introduce {
  width: 20rem;
  word-break: break-word;
  line-height: 1.75;
  font-weight: 600;
  font-size: 1.1em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#slogan {
  border: 1px solid red;
  width: 15rem;
  height: 20rem;
  z-index: 2;
  margin-left: 20rem;
  position: relative;
  margin-top: 4%;
  background: url(../../public/demo.jpg);
  animation: sloganInit 0.8s linear;
  animation-fill-mode: forwards;
  /* 设置对象状态为动画结束时的状态 */
}
@keyframes sloganInit {
  0% {
    margin-top: 4%;
    opacity: 0;
  }
  50% {
    margin-top: 6%;
    opacity: 0.5;
  }
  100% {
    margin-top: 8%;
    opacity: 1;
  }
}
@keyframes sloganMouseover {
  0% {
    margin-top: 8%;
  }
  100% {
    margin-top: 4%;
  }
}
@keyframes sloganMouseout {
  0% {
    margin-top: 4%;
  }
  100% {
    margin-top: 8%;
  }
}
</style>

