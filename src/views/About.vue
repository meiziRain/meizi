<template>
  <div id="about">
    <!-- <div id="slogan" @mouseover="mouseover()" @mouseout="mouseout()"></div> -->
    <div id="profile">
      <!-- <div id="avatar"><img style="width:100%;height:100%;border-radius:50%" src="../assets/about/avatar.jpg" alt=""></div> -->
      <div style="height:7rem;"></div>
      <CircleHover id="circleHover"></CircleHover>
      <div id="nickname">Meizi</div>
      <div id="position">前端开发者</div>
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
      <div id="project-item-1">
        <!-- COIDEA:demo:header START -->
        <header>
          <nav class="navigation">
            <li>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 54 54"
                style="enable-background:new 0 0 54 54;"
                xml:space="preserve"
              >
                <circle cx="7" cy="47" r="4" />
                <circle cx="27" cy="47" r="4" class="circle" />
                <circle cx="47" cy="47" r="4" />
                <circle cx="7" cy="27" r="4" class="circle" />
                <circle cx="27" cy="27" r="4" />
                <circle cx="47" cy="27" r="4" class="circle" />
                <circle cx="7" cy="7" r="4" />
                <circle cx="27" cy="7" r="4" class="circle" />
                <circle cx="47" cy="7" r="4" />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </li>
          </nav>

          <nav class="main">
            <li>
              <a href="http://www.htmleaf.com/jQuery/Layout-Interface/201903185568.html">article</a>
            </li>
            <li>
              <a
                href="https://github.com/COIDEAwebsite/slideshow-with-fullscreen-detail-view"
                target="_blank"
              >Github</a>
            </li>
          </nav>
        </header>
        <!-- COIDEA:demo:header END -->

        <!-- COIDEA:demo:slider START -->
        <section class="coidea-slider">
          <!-- COIDEA:animation:helpers START -->
          <div class="slider-helpers">
            <div class="arrea black-arrea"></div>
            <div class="arrea white-arrea"></div>
          </div>
          <!-- COIDEA:animation:helpers END -->

          <!-- COIDEA:slider:holder START -->
          <div class="slider-holder">
            <!-- COIDEA:slider START -->
            <div class="slider">
              <!-- COIDEA:slider:item START -->
              <div
                id="slider-item-1"
                class="slider-item"
                style="background-image: url(../assets/about/img-1.jpg);"
                data-id="1"
                data-headline="Renee Johnson"
                data-description="Look and feel client-facing usability follow up. Affiliate marketing prototype look and feel ROI flesh out. Target audience lean organic tweak CTA. Reach internally affiliate marketing ecosystem mission statement lead generation implementation. Ecosystem lead generation value-add hackathon ecosystem optimize follow up onboarding."
              ></div>
              <!-- COIDEA:slider:item END -->

              <!-- COIDEA:slider:item START -->
              <div
                id="slider-item-2"
                class="slider-item"
                style="background-image: url(../assets/about/img-2.jpg);"
                data-id="2"
                data-headline="Logan Boyd"
                data-description="Conversion mission statement client-facing transparent post launch in the queue hackathon. Credentials OLA ETA follow up innovation mobile-first scope out mission statement credentials. B2B push the envelope plow through take a stab at it segment. Game changer proximity regroup value proposition mobile-first reach proximity."
              ></div>
              <!-- COIDEA:slider:item END -->

              <!-- COIDEA:slider:item START -->
              <div
                id="slider-item-3"
                class="slider-item"
                style="background-image: url(../assets/about/img-3.jpg);"
                data-id="3"
                data-headline="Leona Day"
                data-description="Good fit ramp up usability transparent prototype traction heads down fluid innovation. Good fit value creation flesh out discovery transparent CTA tweak . OLA deliverables scope out proposed usability game changer pipeline ramp up. Credentials mission statement reach discovery flesh out usability internally ROI. Fluid mock up user persona value creation."
              ></div>
              <!-- COIDEA:slider:item END -->

              <!-- COIDEA:slider:item START -->
              <div
                id="slider-item-4"
                class="slider-item"
                style="background-image: url(../assets/about/img-4.jpg);"
                data-id="4"
                data-headline="Linda Young"
                data-description="SEO retainer optimize tweak. Discovery third party game plan strategic partners scope out API post launch tackle it. Deliverables hackathon functionality strategic partners copy deck fluid. Value-add third party next level whiteboard scope out kick-off hackathon look and feel."
              ></div>
              <!-- COIDEA:slider:item END -->

              <!-- COIDEA:slider:item START -->
              <div
                id="slider-item-5"
                class="slider-item"
                style="background-image: url(../assets/about/img-5.jpg);"
                data-id="5"
                data-headline="Katrina Steward"
                data-description="Ramp up lean target audience dynamic look and feel innovation kick-off implementation retainer. Optimize heads down onboarding segment. Retainer good fit tweak affiliate marketing value proposition. Ecosystem organic cross platform regroup ramp up scope out ETA dev environment. Plow through prototype streamline consolidate ROI third party lead generation reach. Dynamic functionality game plan follow up copy deck value-add usability deliverables."
              ></div>
              <!-- COIDEA:slider:item END -->

              <!-- COIDEA:slider:item START -->
              <div
                id="slider-item-6"
                class="slider-item"
                style="background-image: url(../assets/about/img-6.jpg);"
                data-id="6"
                data-headline="Jessie Larson"
                data-description="SEO retainer optimize tweak. Discovery third party game plan strategic partners scope out API post launch tackle it. Deliverables hackathon functionality strategic partners copy deck fluid. Value-add third party next level whiteboard scope out kick-off hackathon look and feel."
              ></div>
              <!-- COIDEA:slider:item END -->
            </div>
            <!-- COIDEA:slider END -->

            <!-- COIDEA:slider:navigation START -->
            <div class="slider-nav">
              <span class="slider-nav-btn go-next">
                <img src="../assets/about/icon-arrow-top.png" />
              </span>
              <span class="slider-nav-length"></span>
              <span class="slider-nav-progress">
                <span class="progress"></span>
              </span>
              <span class="slider-nav-index">1</span>

              <!-- if needed, uncomment this part for prev button - IMPORTANT: styling is not applied to this button!!! -->
              <!-- <div class="slider-nav-btn go-prev">Prev</div> -->
            </div>
            <!-- COIDEA:slider:navigation END -->
          </div>
          <!-- COIDEA:slider:holder END -->

          <!-- COIDEA:page:content START -->
          <div class="slider-content">
            <div class="slider-content-inner">
              <span class="subheadline">fiction</span>
              <h1>Our Story</h1>
              <p>We inspire more people to read more, encourage them to share their enjoyment of reading and celebrate the difference that reading makes.</p>
              <a href="#">Read the full Story</a>
            </div>
          </div>
          <!-- COIDEA:page:content END -->
        </section>
        <!-- COIDEA:demo:slider END -->

        <!-- COIDEA:page:modal START -->
        <div class="coidea-modal">
          <!-- COIDEA:page:modal:helper START -->
          <div class="arrea black-arrea"></div>
          <!-- COIDEA:page:modal:helper START -->

          <!-- COIDEA:page:modal:video START -->
          <div class="video-holder">
            <video playsinline autoplay="autoplay" muted loop poster>
              <source type="video/mp4" class="mp4" src="../assets/about/background.mp4" />
              <!-- <source type="video/webm" class="webm" src="assets/video/background.webm"> -->
            </video>
          </div>
          <!-- COIDEA:page:modal:video END -->

          <!-- COIDEA:page:modal:content START -->
          <div class="coidea-modal-inner">
            <h2></h2>
            <div class="modal-content"></div>
          </div>
          <!-- COIDEA:page:modal:content END -->
        </div>
        <!-- COIDEA:page:modal END -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo.vue";
import CircleHover from "@/components/CircleHover.vue";
import { novacancy } from "@/assets/about/jquery.novacancy.js"; //注意路径
import { videoPlayer } from "@/assets/about/videoPlayer.js";

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
    CircleHover
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    AOS.init({
      easing: "ease-out-back",
      duration: 1000
    });
    novacancy();
    this.init();

    videoPlayer();
  },
  methods: {
    down() {
      
    },
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
@import "../assets/about/videoPlayer.css";
#about {
  position: absolute;
  /* 内容大于屏幕即要这样？ */
  width: 100vw;
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
#project {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
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

