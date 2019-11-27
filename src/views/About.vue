<template>
  <div id="about">
    <div id="profile">
      <div style="height:18vh;"></div>
      <CircleHover id="circleHover"></CircleHover>

      <div
        id="nickname"
        class="lax"
        data-lax-scale="(vh) 0.2, (vh*0.8) 1, (vh*0.2) 1, -elh 0.2"
        data-lax-anchor="self"
      >
        Meizi
        <!-- 字体Monoton -->
      </div>
      <div
        id="job"
        class="lax"
        data-lax-scale="(vh) 0.2, (vh*0.8) 1, (vh*0.2) 1, -elh 0.2"
        data-lax-anchor="self"
      >Front-end web development</div>
      <div>
        <div id="introduce" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
          <br />A neon-style UI component library ?
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
    <div id="about-project">
      <div id="video-wrap" class="demo-4" ref="overlay">
        <div class="hamburger" @click="closeVideo" style="display:none;" ref="hamburger">
          <div class="hamburger__line hamburger__line--cross01">
            <div class="hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-4"></div>
          </div>
          <div class="hamburger__line hamburger__line--cross02">
            <div class="hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-4"></div>
          </div>
        </div>
        <div class="global-menu">
          <div id="video" ref="video">
            <video controls>
              <source src="../assets/about/bookshop.mp4" type="video/mp4" />
            </video>
            <div>
              <!-- sth here -->
            </div>
          </div>
        </div>
        <svg
          ref="closeSvg"
          class="shape-overlays"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path class="shape-overlays__path" />
          <path class="shape-overlays__path" />
        </svg>
      </div>

      <div class="grid">
        <div class="grid__item theme-1" style="color:white;">
          <div class="grid__item-content">
            <nav class="grid__item-nav"></nav>
            <h2 class="grid__item-title grid__item-title--small">Bookshop</h2>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
              class="aboutBaseFont mobileText"
            >
              前端基于
              <CopyText content="Vue.js" animationName="rubberBand"></CopyText>框架，使用 vuex 实现多页面间的数据传输，
              axios 与后端进行数据交互，搭配elementUI ，ivew等开源组件库。
              <br />后端基于
              <CopyText content="Spring+SpringMVC+Mybatis" animationName="rubberBand"></CopyText>整合框架。用户密码使用MD5加密，评论敏感词过滤，session 保持购物车数据 。
              <br />
              <br />
              <a
                href="https://github.com/meiziRain/Bookshop-frontEnd"
                target="blank"
                style="outline:none;"
              >
                <i class="fab fa-github"></i>
              </a>
            </p>
          </div>
        </div>
        <div class="grid__item grid__item--bg theme-2">
          <!--  自定义属性没有大小写区分 ，坑！-->
          <div
            class="grid__item-img"
            :data-displacement="projectImg.displacement8"
            :data-cover="projectImg.book"
            :data-back="projectImg.bookshop"
            data-intensity="-0.65"
            data-speed-in="1.2"
            data-speed-out="1.2"
          ></div>
          <!-- FIXME: 对于distortion.js有hover效果的必须添加 pointer-events: none; 不添加没有hover效果，添加后自定义的 <CopyText>又给屏蔽了。 -->
          <div class="grid__item-content" style="	pointer-events: none;">
            <span class="grid__item-meta">
              <i class="fab fa-chrome" style="font-size: 2.5em;"></i>
            </span>
            <h2 class="grid__item-title">Clean UI</h2>
            <h3 class="grid__item-subtitle">
              <span>flexible layout,interactive design</span>
              <br />
              <br />
              <br />
              <a
                class="grid__item-link"
                style="font-size:1.2em;color:var(--color-main);"
                @click="openVideo()"
              >&larr;Discover more</a>
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
          ></div>
          <div class="grid__item-content" style="	pointer-events: none;">
            <span class="grid__item-meta">
              <i class="fab fa-android" style="font-size: 2.5em;color:rgb(0, 133, 119);"></i>
            </span>
            <h2 class="grid__item-title">Gold Abacus</h2>
            <h3 class="grid__item-subtitle">
              <span>A simple android app</span>
            </h3>
          </div>
        </div>
        <div class="grid__item theme-4" style="color:black;">
          <div class="grid__item-content">
            <h2 class="grid__item-title grid__item-title--small">More accurate and faster</h2>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
            >
              基于
              <CopyText content="Java" animationName="rubberBand"></CopyText>的Android APP
              涉及APP权限申请，邮件收发，文件解压缩，文件读写。
              <CopyText content="SQLite" animationName="rubberBand"></CopyText>数据库。
              <br />
              <br />
              <li>服务于事器材租赁业相关人员，解决了人工计算租金繁琐，出错率高，效率低下等问题</li>
              <br />
              <li>补足PC客户端无法随时随地查看租金详情的缺陷。</li>
              <br />
              <li>降低人工成本。</li>
              <br />
            </div>
          </div>
        </div>
        <div class="grid__item theme-5">
          <div class="grid__item-content">
            <nav class="grid__item-nav">
              <a class="grid__item-link">微信服务号</a>
            </nav>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
            >
              <h2 class="grid__item-title grid__item-title--small">海口云医社</h2>
              <p class="grid__item-text">足不出户也能享受的医疗服务.</p>
              <br />
              <p>扫描二维码了解更多。</p>
            </div>
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
            <img class="qrCodeImg" src="../assets/about/qrCode.png" alt="Image" />
          </div>
          <div class="grid__item-content" style="	pointer-events: none;">
            <span class="grid__item-meta">
              <i class="fab fa-weixin" style="font-size: 2.5em;color:rgb(0, 173, 25);"></i>
            </span>
            <!-- <h2 class="grid__item-title">Build it forever</h2> -->
            <h3 class="grid__item-subtitle"></h3>
          </div>
        </div>
      </div>
    </div>
    <div id="about-bottom">
      <div id="about-bottom-left">📫&nbsp;&nbsp;meiziRain</div>
      <div id="about-bottom-right">@gmail.com</div>
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

//轮播图
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

//遮罩
import { ease, ShapeOverlays } from "@/assets/about/project/easings.js";

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
      aboutPageTimeOut: 0,
      elmOverlay: [],
      elmHamburger: [],
      overlay: [],
      projectImg: {
        displacement8: require("../assets/about/project/displacement/8.jpg"),
        book: require("../assets/about/project/bookshop-cover.png"),
        bookshop: require("../assets/about/project/bookshop1.png"),
        gold: require("../assets/about/project/gold_cover.png"),
        gold4: require("../assets/about/project/gold4.png"),
        displacement1: require("../assets/about/project/displacement/1.jpg")
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
    this.distort();

    //
    this.elmHamburger = document.querySelector(".hamburger");
    this.elmOverlay = document.querySelector(".shape-overlays");
    this.overlay = new ShapeOverlays(this.elmOverlay);
  },
  methods: {
    // http://www.htmleaf.com/html5/SVG/201710184785.html
    // handleVideoPage()  openVideo()  closeVideo()
    handleVideoPage() {
      if (this.overlay.isAnimating) {
        return false;
      }
      this.overlay.toggle();
      if (this.overlay.isOpened === true) {
        this.elmHamburger.classList.add("is-opened-navi");
        // FIXME:  video属性更改必须等上面的加载完， 未知原因，此处延时后可以出效果
        this.aboutPageTimeOut = setTimeout(() => {
          this.$refs.video.classList.add("is-opened");
        }, 100);

        // FIXME:  防止快速点击动画交替错乱。
        this.aboutPageTimeOut = setTimeout(() => {
          this.$refs.hamburger.style.display = "block";
        }, 1000);
      } else {
        this.$refs.video.classList.remove("is-opened");
        this.elmHamburger.classList.remove("is-opened-navi");
      }
    },
    openVideo() {
      //渲染
      this.$refs.overlay.style.display = "block";
      this.handleVideoPage();
    },
    closeVideo() {
      this.handleVideoPage();
      this.$refs.hamburger.style.display = "none";
      this.aboutPageTimeOut = setTimeout(() => {
        this.$refs.overlay.style.display = "none";
      }, 800);
    },
    distort() {
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
    // css只能为每一个元素设置一个animation属性

    init() {
      $("#nickname").novacancy({
        blink: 1,
        off: 1,
        color: "Red",
        glow: ["0 0 80px Red", "0 0 30px FireBrick", "0 0 6px DarkRed"]
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.aboutPageTimeOut);
  }
};
</script>

<style scoped>
@import "../assets/about/distortion.css";
@import "../assets/about/project/ham.css";
.qrCodeImg {
  width: 60%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#video-wrap {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0px;
  /* 高于iris组件 */
  z-index: 999;
  top: 0px;
}
#video {
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* 必须要加 */
  z-index: 1;
  opacity: 0;
  transform: translateY(-200%);
  transition: transform 1s, opacity 1s !important;
  transition-timing-function: ease-in;
}
video {
  width: 80vw;
  height: auto;
  box-shadow: -5px 5px 20px #a3a3a3;
  transform: translate(10%, 10%);
}
video:focus {
  outline: none;
}
.is-opened {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition-timing-function: ease !important;
}
#about-bottom {
  width: 100vw;
  height: 40vh;
}
#about-bottom-left {
  color: white;
  float: left;
  width: 50%;
  text-align: right;
  line-height: 40vh;
  height: 100%;
  background-color: rgb(0, 0, 0);
}
#about-bottom-right {
  color: black;
  float: right;
  width: 50%;
  text-align: left;
  line-height: 40vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
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
#job {
  color: #999;
  text-align: center;
  padding: 1.2em;
}
#introduce {
  font-family: "Cabin Sketch", cursive;
  word-break: break-word;
  line-height: 1.75;
  /* font-weight: 600; */
  font-size: 1.4em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#down {
  text-align: center;
  color: var(--color-main);
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
}
.fa-github {
  font-size: 2.5em;
  color: white;
}
.fa-github:hover {
  color: var(--color-main);
}
.aboutBaseFont {
  word-break: break-word;
  line-height: 1.4;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 1px;
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
  #introduce {
    font-size: 1.2em;
  }
}
@media screen and (max-width: 700px) {
  video {
    width: 100vw;
    transform: translate(0, 40%);
  }
}
@media screen and (max-width: 400px) {
  video {
    width: 100vw;
    transform: translate(0, 100%);
  }
}
</style>

