<template>
  <div id="about">
    <!-- <div id="slogan" @mouseover="mouseover()" @mouseout="mouseout()"></div> -->
    <div id="profile">
      <!-- <div id="avatar"><img style="width:100%;height:100%;border-radius:50%" src="../assets/about/avatar.jpg" alt=""></div> -->
      <div style="height:18vh;"></div>
      <CircleHover id="circleHover"></CircleHover>
      
      <div
        id="nickname"
        class="lax"
        data-lax-scale="(vh) 0.2, (vh*0.8) 1, (vh*0.2) 1, -elh 0.2"
        data-lax-anchor="self"
      >Meizi<!-- 字体Monoton --></div>
      <div
        id="position"
        class="lax"
        data-lax-scale="(vh) 0.2, (vh*0.8) 1, (vh*0.2) 1, -elh 0.2"
        data-lax-anchor="self"
      >前端开发者</div>
      <div>
        <div id="introduce" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
          heloe asskasjka akjskasjk aksjk
          <br />asas as adsfggd sfsf hfyrtygxvx
        </div>
        <div
          id="down"
          @click="down"
          data-aos="fade-up"
          data-aos-anchor-placement="top"
          data-aos-easing="ease"
          data-aos-delay="800"
        >
          <!-- 对比案列需要加上  data-aos-anchor-placement="top" -->

          <br />
          <i class="fas fa-chevron-down"></i>
          <br />
          <i class="fas fa-chevron-down" style="font-size:1.4em;"></i>
        </div>
      </div>
    </div>
    <div id="project">
      <div class="grid">
        <div class="grid__item theme-1">
          <div class="grid__item-content">
            <nav class="grid__item-nav"></nav>
            <h2 class="grid__item-title grid__item-title--small">Bookshop</h2>
          </div>
        </div>
        <div class="grid__item grid__item--bg theme-2">
          <!--  自定义属性没有大小写区分 ，坑！-->
          <div
            class="grid__item-img"
            :data-displacement="projectImg.displacement8"
            :data-cover="projectImg.img21"
            :data-back="projectImg.img22"
            data-intensity="-0.65"
            data-speed-in="1.2"
            data-speed-out="1.2"
          >
            <!-- <img class="distortionImg" src="../assets/about/project/Img21.jpg" alt="Image" />
            <img class="distortionImg" src="../assets/about/project/Img22.jpg" alt="Image" />-->
          </div>
          <div class="grid__item-content">
            <span class="grid__item-meta">California</span>
            <h2 class="grid__item-title">Jumping Around</h2>
            <h3 class="grid__item-subtitle">
              <span>California's last empty jump spots</span>
              <a class="grid__item-link" href="#">Discover more</a>
            </h3>
          </div>
        </div>
        <div class="grid__item grid__item--bg theme-3">
          <div
            class="grid__item-img"
            :data-displacement="projectImg.displacement1"
            :data-cover="projectImg.gold"
            :data-back="projectImg.gold4"
            data-intensity="0.2"
            data-speed-in="1.6"
            data-speed-out="1.6"
          >
            <!-- <img class="distortionImg" src="../assets/about/project/Img21.jpg" alt="Image" />
            <img class="distortionImg" src="../assets/about/project/Img22.jpg" alt="Image" />-->
          </div>
          <div class="grid__item-content">
            <span class="grid__item-meta">Italy</span>
            <h2 class="grid__item-title">Calm Serenity</h2>
            <h3 class="grid__item-subtitle">
              <span>Italy's secret meadows and fields</span>
              <a class="grid__item-link" href="#">Check them out</a>
            </h3>
          </div>
        </div>
        <div class="grid__item theme-4">
          <div class="grid__item-content">
            <nav class="grid__item-nav">
              <a href="#" class="grid__item-link">About</a>
              <a href="#" class="grid__item-link">Blog</a>
              <a href="#" class="grid__item-link">Membership</a>
            </nav>
            <h2 class="grid__item-title grid__item-title--small">Qualm Inspiration for Everybody</h2>
            <p
              class="grid__item-text"
            >Muse about, something incredible is waiting to be known, courage of our questions tesseract hearts of the stars great turbulent clouds the only home.</p>
            <a href="#" class="grid__item-link">Read more</a>
          </div>
        </div>
        <div class="grid__item theme-5">
          <div class="grid__item-content">
            <nav class="grid__item-nav">
              <a href="#" class="grid__item-link">Getting there</a>
              <a href="#" class="grid__item-link">Accomodation</a>
            </nav>
            <h2 class="grid__item-title grid__item-title--small">Bangkok's Hidden Foodstalls</h2>
            <p
              class="grid__item-text"
            >Tingling of the spine, network of wormholes preserve and cherish that pale blue dot cosmic ocean encyclopaedia galactica.</p>
            <a href="#" class="grid__item-link">Read more</a>
          </div>
        </div>
        <div class="grid__item grid__item--bg theme-6">
          <div
            class="grid__item-img"
            data-displacement="../assets/about/project/displacement/4.png"
            data-intensity="-0.4"
            data-speed-in="0.7"
            data-speed-out="0.3"
            data-easing="Sine.easeOut"
          >
            <!-- <img class="distortionImg" src="../assets/about/project/Img21.jpg" alt="Image" />
            <img class="distortionImg" src="../assets/about/project/Img22.jpg" alt="Image" />-->
          </div>
          <div class="grid__item-content">
            <span class="grid__item-meta">Sweden</span>
            <h2 class="grid__item-title">Build it forever</h2>
            <h3 class="grid__item-subtitle">
              <span>Sweden's famous furniture</span>
              <a class="grid__item-link" href="#">Discover more</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo.vue";
import lax from "lax.js";
import CircleHover from "@/components/CircleHover.vue";
import ScrollImg from "@/components/ScrollImg.vue";
import CopyText from "@/components/CopyText.vue";
import Carousel3D from "@/components/Carousel3D.vue";
import { novacancy } from "@/assets/about/jquery.novacancy.js"; //注意路径
import Slick from "vue-slick";

// hover.js  模糊效果： 个人将图片地址改为自定义属性传递，删除img标签
// http://www.htmleaf.com/html5/html5-canvas/201804165076.html
// https://github.com/robin-dela/hover-effect
import hoverEffect from "hover-effect";

//AOS  https://github.com/michalsnik/aos/tree/v2
//  http://www.htmleaf.com/jQuery/Layout-Interface/201606093578.html
// 1、aos属性需要添加data-前缀，否则识别不出来
// 2、init函数一定要有，它可以为全局标识aos属性的节点配置相应属性.
// 参考：https://blog.csdn.net/yujin0213/article/details/84532506
// FIXME: 为什么必须这此处导入，而main.js 中不行？
import AOS from "aos"; //滚动动效
import "aos/dist/aos.css";

export default {
  name: "about",
  components: {
    Logo,
    CircleHover,
    ScrollImg,
    CopyText,
    Carousel3D,
    Slick
  },
  data() {
    return {
      // 向子组件传递图片地址需要将图片模块导入，ES6 为 import ， common.js 为  require 。
      bookshopIndex: require("../assets/about/bookshop-index.jpg"),
      projectImg: {
        displacement8: require("../assets/about/project/displacement/8.jpg"),
        img21: require("../assets/about/project/img22.jpg"),
        img22: require("../assets/about/project/img21.jpg"),
        gold:require("../assets/about/project/gold_cover.png"),
        gold4:require("../assets/about/project/gold4.png"),
        displacement1: require("../assets/about/project/displacement/1.jpg"),
      },
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true
        // Any other options that can be got from plugin documentation
      }
    };
  },
  created() {
    // setup lax
  },
  mounted() {
    AOS.init({
      easing: "ease-out-back",
      duration: 1000
    });
    novacancy();
    this.init();

    //lax.js 滚动效果滚动事件绑定
    this.initLaxJS();

    //hover.js渲染
    Array.from(document.querySelectorAll(".grid__item-img")).forEach(el => {
      const imgs = Array.from(el.querySelectorAll(".distortionImg"));
      new hoverEffect({
        parent: el,
        intensity: "-0.1",
        speedIn: "0.4",
        speedOut: "0.4",
        easing: "power2.easeInOut",
        image1: el.dataset.cover,
        image2: el.dataset.back,
        displacementImage: el.dataset.displacement
      });
    });
  },
  methods: {
    initLaxJS() {
      window.onload = function() {
        lax.setup(); // init

        const updateLax = () => {
          lax.update(window.scrollY);
          window.requestAnimationFrame(updateLax);
        };

        window.requestAnimationFrame(updateLax);
      };
    },
    down() {},
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
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/about/distortion.css";
.docCloud {
  margin-top: 5%;
  margin-left: 5%;
}
.qltian {
  margin-left: 5%;
  margin-top: 5%;
  width: 321px;
  height: 321px;
}

.gold {
  margin-top: 2%;
  margin-left: 30%;
}
.slickImg {
  display: inline-block;
  width: 250px;
  height: 500px;
  margin-right: 2%;
  margin-top: 2%;
}
.slick-slide {
  width: none !important;
}
video:focus {
  outline: none;
}
#about {
  /* 内容大于屏幕即要这样？ */
  color: white;
}

#nickname {
  font-weight: 300;
  text-align: center;
  font-size: 6em;
  font-family: "Monoton", cursive;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  /* transition: font-weight 0.2s ease; */
}

#nickname:hover {
  font-weight: 600;
}
#profile {
  width: 100vw;
  height: 100vh;
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
#down {
  text-align: center;
  color: #d94f5c;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
}
.fa-github {
  font-size: 2.5em;
  cursor: pointer;
}
.fa-github:hover {
  color: #d94f5c;
}
.aboutBaseFont {
  word-break: break-word;
  line-height: 1.4;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 1px;
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

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@media screen and (max-width: 600px) {
  #nickname {
    font-weight: 300;
    font-size: 3em;
  }
}
</style>

