<template>
  <div id="app">
    <!-- 预加载博客每日图 -->
    <div v-show="false" id="toLoadImg"></div>

    <Loading v-if="loading" id="loading"></Loading>

    <div v-else id="content">
      <div v-if="!$store.state.isMobile" id="nav">
        <!-- <router-link :class="{selected: 1==currentindex}" to="/blog" @click.native="toBlog">Blog</router-link>
      <router-link :class="{selected: 2==currentindex}" to="/studio" @click.native="toStudio">Studio</router-link>
      <router-link :class="{selected: 3==currentindex}" to="/daily" @click.native="toDaily">Daily</router-link>
        <router-link :class="{selected: 4==currentindex}" to="/about" @click.native="toAbout">About</router-link>-->

        <Iris class="iris"></Iris>
      </div>
      <router-view />
      <!-- 是一个顶级的外链，它会渲染和顶级路由匹配的组件。 -->
      <Logo id="logo" @click="goHome()" @mouseenter="mouseenter()" @mouseleave="mouseleave()"></Logo>
      <Neonmenu id="neonmenu" v-if="$store.state.isMobile"></Neonmenu>

      <!--用于预加载 font-awesome的图标 -->
      <div v-show="false">
        <i class="fas fa-home fa-2x"></i>
        <i class="fas fa-blog fa-2x"></i>
        <i class="fas fa-tachometer-alt fa-2x"></i>
        <i class="far fa-calendar-check fa-2x"></i>
        <i class="far fa-address-card fa-2x"></i>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Logo from "./components/Logo.vue";
import Iris from "./components/Iris.vue";
import Neonmenu from "@/components/Neonmenu.vue";

import Loading from "./components/Loading.vue";
export default {
  name: "home",
  components: {
    Logo,
    Iris,
    Loading,
    Neonmenu
  },
  data() {
    return {
      currentindex: 0,
      showCanvas: 0,
      loading: true,
      loader: 0
    };
  },

  created() {
    //dom生成前
    // 判断设备类型

    console.log(this.navArray);

    if (this._isMobile()) {
      console.log("Mobile");
      this.$store.state.isMobile = true;
    } else {
      console.log("PC");
      this.$store.state.isMobile = false;
    }

    this.loader = setInterval(() => {
      this.loading = false;
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.loader);
  },
  mounted() {
    //dom生成后
    // Preload images
    // const preloadImages = () => {
    //   return new Promise((resolve, reject) => {
    //     imagesLoaded(
    //       document.querySelectorAll("#bg"),
    //       { background: true },
    //       resolve
    //     );
    //   });
    // };
    // // Preload fonts
    // const preloadFonts = () => {
    //   return new Promise((resolve, reject) => {
    //     WebFont.load({
    //       typekit: {
    //         id: "crf4rue"
    //       },
    //       active: resolve
    //     });
    //   });
    // };
    // Promise.all([preloadImg()]).then(() => {
    //   this.loading = false;
    // });
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    goHome() {
      let me = this;
      // sessionStorage.setItem("currentindex", 0);
      // console.log(sessionStorage.getItem("currentindex"));
      me.currentindex = 0;
      me.$router.push({
        name: "home"
      });
    },

    mouseenter() {
      let logo = document.getElementById("logo");
      logo.style.animation = "rotate 3s linear infinite";
    },
    mouseleave() {
      let logo = document.getElementById("logo");
      logo.style.animation = "";
    },
    toHome: function() {
      let me = this;
      me.currentindex = 0;
      me.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style>
#app {
  background-color: rgb(15, 14, 14);
}
#content {
  width: 100vw;
  height: 100vh;
}
#toLoadImg {
  background: url(https://api.dujin.org/bing/1920.php) no-repeat fixed;
}
#loading {
  width: 100%;
  height: 100%;
}
#neonmenu {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  z-index: 1000;
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
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}
@-o-keyframes rotate {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(359deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
#logo :hover {
  transform: scale(1.3);
}
#nav {
  position: fixed;
  z-index: 999;
  right: 6%;
  top: 4%;
}
</style>


