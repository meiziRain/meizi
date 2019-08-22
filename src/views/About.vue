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
      <div style="height:20vh">项目经历</div>
      <div class="item">
        <!-- <ScrollImg :imgSrc="bookshopIndex"></ScrollImg> -->
        <div class="bookshop_content">
          <video autoplay controls>
            <source src="../assets/about/bookshop.mp4" type="video/mp4" />
          </video>

          <!-- <h2 class="item-title">BookShop</h2> -->
          <div class="description">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-easing="ease"
              data-aos-delay="400"
              class="aboutBaseFont"
            >
              <br />前端基于
              <CopyText content="Vue.js" animationName="rubberBand"></CopyText>框架，使用 vuex 实现多页面间的数据传输，
              axios 与后端进行数据交互，搭配elementUI ，ivew等开源组件库。
              <br />后端基于
              <CopyText content="Spring+SpringMVC+Mybatis" animationName="rubberBand"></CopyText>整合框架。用户密码使用MD5加密，评论敏感词过滤，session 保持购物车数据 。
              <br />
              <br />
              <i class="fab fa-github"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <p class="credits">
        Photography by
        <a href="https://www.instagram.com/byfoul/">Frankie Cordoba</a>
      </p>
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
import { novacancy } from "@/assets/about/jquery.novacancy.js"; //注意路径

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
    CopyText
  },
  data() {
    return {
      // 向子组件传递图片地址需要将图片模块导入，ES6 为 import ， common.js 为  require 。
      bookshopIndex: require("../assets/about/bookshop-index.jpg")
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
.item {
  border: 1px solid red;
  height: 100vh;
  width: 100vw;
}
video {
  display: inline-block;
  width: 58%;
  height: auto;
  margin-left: 2%;
  object-fit: fill;
}
.description {
  display: inline-block;
  width: 30%;
  padding: 0 3% 0 3%;
  vertical-align: top;
}
.bookshop_content{
}
.section {
  width: 100vw;
  height: 100vh;
}
.fa-github {
  font-size: 2.5em;
  cursor: pointer;
}
.fa-github:hover {
  color: #d94f5c;
}
.aboutBaseFont{
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

@media screen and (max-width: 400px) {
  #nickname {
    font-weight: 300;
    font-size: 3em;
  }
  .description {
    width: 96%;
    float: none;
    padding: 2%;
    border: 1px solid red;
  }
  video {
    float: none;
    width: 100vw;
    height: auto;
      margin:0;
  }
}
</style>

