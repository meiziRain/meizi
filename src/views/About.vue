<template>
  <div id="about">
    <!-- <div id="slogan" @mouseover="mouseover()" @mouseout="mouseout()"></div> -->
    <div id="profile">
      <!-- <div id="avatar"><img style="width:100%;height:100%;border-radius:50%" src="../assets/about/avatar.jpg" alt=""></div> -->
      <div style="height:7rem;"></div>
      <CircleHover id="circleHover"></CircleHover>
      <div
        id="nickname"
        class="lax"
        data-lax-scale="(vh) 0.2, (vh*0.8) 1, (vh*0.2) 1, -elh 0.2"
        data-lax-anchor="self"
      >Meizi</div>
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
      <div data-scroll class="page page--layout-2">
        <div class="pro-content content--alternate content--padded">
          <div class="content__item content__item--expand" style="--aspect-ratio: 700/525;">
            <div class="content__item-imgwrap">
              <div
                class="content__item-img"
                
              >
              <ScrollImg :imgSrc="bookshopIndex"></ScrollImg>
              </div>
            </div>
            <h2 class="content__item-title">BookShop</h2>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
              class="content__item-description"
            >A little happy sunlight shining through there.Just let your mind wander and enjoy. This should make you happy. Just let your mind wander and enjoy. This should make you happy. Just let your mind wander and enjoy. This should make you happy.  In nature, dead trees are just as normal as live trees.</p>
          </div>
          <div class="content__item content__item--expand" style="--aspect-ratio: 800/462;">
            <div class="content__item-imgwrap">
              <div
                class="content__item-img"
                style="background-image: url(../assets/blog/img-2.jpg);"
              ></div>
            </div>
            <h2 class="content__item-title">Nj</h2>
            <p
              class="content__item-description"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
            >All you have to learn here is how tJust let your mind wander and enjoy. This should make you happy. Just let your mind wander and enjoy. This should make you happy. o have fun. No pressure. Just relax and watch it happen.</p>
          </div>
          <div class="content__item content__item--expand" style="--aspect-ratio: 700/447;">
            <div class="content__item-imgwrap">
              <div
                class="content__item-img"
                style="background-image: url(../assets/blog/img-2.jpg);"
              ></div>
            </div>
            <h2 class="content__item-title">Al</h2>
            <p
              class="content__item-description"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
            >Just let your mind wander and enjoy. This should make you happy. There are no mistakes. Just let your mind wander and enjoy. This should make you happy. Just let your mind wander and enjoy. This should make you happy. Just let your mind wander and enjoy. This should make you happy. You can fix anything that happens.</p>
          </div>
          <p class="credits">
            Photography by
            <a href="https://www.instagram.com/byfoul/">Frankie Cordoba</a>
          </p>
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
import { novacancy } from "@/assets/about/jquery.novacancy.js"; //注意路径
import { SmoothScrolling } from "@/assets/about/SmoothScrolling.js";

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
    ScrollImg
  },
  data() {
    return {
      // 向子组件传递图片地址需要将图片模块导入，ES6 为 import ， common.js 为  require 。
      bookshopIndex:require('../assets/about/bookshop-index.jpg'),
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

    // 图片滚动效果
    // SmoothScrolling();
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
    }
  }
};
</script>

<style scoped>
@import "../assets/about/SmoothScrolling.css";
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
.section {
  width: 100vw;
  height: 100vh;
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
</style>

