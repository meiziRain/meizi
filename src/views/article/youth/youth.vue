<template>
  <div>
    <!-- <YouthMobile v-if="true"></YouthMobile> -->
    <div id="youth">
      <svg class="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
          <title>arrow</title>
          <polygon
            points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "
          />
        </symbol>
        <symbol id="icon-drop" viewBox="0 0 24 24">
          <title>drop</title>
          <path
            d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"
          />
          <path
            d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"
          />
        </symbol>
        <svg id="icon-nav" viewBox="0 0 152 63">
          <title>navarrow</title>
          <path
            d="M115.737 29L92.77 6.283c-.932-.92-1.21-2.84-.617-4.281.594-1.443 1.837-1.862 2.765-.953l28.429 28.116c.574.57.925 1.557.925 2.619 0 1.06-.351 2.046-.925 2.616l-28.43 28.114c-.336.327-.707.486-1.074.486-.659 0-1.307-.509-1.69-1.437-.593-1.442-.315-3.362.617-4.284L115.299 35H3.442C2.032 35 .89 33.656.89 32c0-1.658 1.143-3 2.552-3H115.737z"
          />
        </svg>
      </svg>

      <div>
        <p class="message">Please view on desktop to see the full layout</p>
        <div class="slideshow">
          <div class="slide slide--layout-1 slide--current">
            <div class="content">
              <div class="bg-img bg-layout-1"></div>
              <div class="left">
                <div class="baseFont">
                  <div class="layout-1-left h-center">
                    我平平望去、
                    <br />不远处的洼地里灌进的水组成的形状，
                    <br />像极了一面面造型各异的镜子，
                    <br />阳光在上方，端详着自己的脸庞。
                    <br />
                    <br />
                    <br />
                    <br />青青嫩草覆盖在凸出的土堆上，
                    <br />几匹马儿在其上一本正经地吃着草，
                    <br />其中一只却在其同伴哼哧哼哧狂吃不停时直愣愣的盯着我，
                    <br />我也端坐着一眼不眨地看它。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont">
                  <div class="layout-1-right-right h-center">
                    于是，一人一马就这样痴傻地对视着
                    <br />水载着船儿缓缓离去
                    <br />彼此渐渐淡出视线
                    <br />我不知道人和马的眼部结构是否相同
                    <br />但我是因为长时间不眨眼而泪流满面了
                  </div>
                  <div class="h-center layout-1-right-bottom">
                    <br />
                    <br />良久，我将酸涩的眸子转向前方
                    <br />于天际层层叠叠的火烧云围绕在那轮红日周围
                    <br />最远处蓝色的天空与红云相间
                    <br />那一圈圈绮丽的云排得整整齐齐
                    <br />宛若小石入水荡起的阵阵涟漪
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">1</span>
            <span class="slide__number slide__number--right">2</span>
          </div>
          <div class="slide slide--layout-2">
            <div class="content">
              <div class="left">
                <div class="bg-img bg-layout-2-left">
                  <!-- <img class="img" src="./img/3.jpeg" alt /> -->
                </div>
                <div class="baseFont">
                  <div class="layout-2-left h-center">
                    天上真实与水中倒影相映成趣
                    <br />一对太阳两片云
                    <br />
                    <br />
                    <br />
                    <br />山后佛寺的钟声，随风飘来
                    <br />“溶”入牧人唤牛时的吆喝
                    <br />浸荡过身体
                    <br />沁人心脾
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="layout-2-right-img">
                  <img class="img" src="./img/4.jpeg" alt />
                </div>
                <div class="baseFont">
                  <div class="layout-2-right h-center">
                    小舟穿过层层红云，
                    <br />缓缓
                    <br />丛丛芦苇
                    <br />弯弯
                    <br />
                    <br />
                    <br />渔人的撑杆扬起又落下
                    <br />刺破重重屏障
                    <br />击碎了她的心房
                    <br />溅起了数滴光
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">3</span>
            <span class="slide__number slide__number--right">4</span>
          </div>
          <div class="slide slide--layout-3">
            <div class="content">
              <div class="left">
                <div class="layout-3-left-img">
                  <img class="img" src="./img/5.jpeg" alt />
                </div>

                <div class="baseFont">
                  <div class="layout-3-left h-center">
                    我闭上双眼，“目”水渺渺，细细感受，与光并行......
                    <br />
                    <br />她愈发的醉人了
                    <br />有些许朦胧媚意
                    <br />仿佛要在最后的时刻展尽光芒。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="layout-3-right-img">
                  <img class="img" src="./img/6.jpeg" alt />
                </div>

                <div class="baseFont">
                  <div class="layout-3-left h-center">
                    我慢慢地划向岸，
                    <br />将小船拖上大半截在陆地上
                    <br />找出一片较为干净多草的地
                    <br />扎好帐篷
                    <br />后便抄起一点零食向旁边繁茂却又略显寂静的山林踱步而去
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">5</span>
            <span class="slide__number slide__number--right">6</span>
          </div>
          <div class="slide slide--layout-4">
            <div class="content">
              <div class="left">
                <div class="bg-img bg-layout-4-left">
                  <!-- <img class="img" src="./img/7.jpeg" alt /> -->
                </div>

                <div class="baseFont">
                  <div class="layout-4-left h-center">
                    风拂过，
                    <br />竹林簌簌如泣，叶雨纷纷而下，
                    <br />光影浮动，一块块微暖的光斑从我身上流淌而过，
                    <br />我久久地沉溺于她留下的温婉——她走了，无声无息，
                    <br />
                    <br />我环顾四周，竹林昏惑了下来，
                    <br />不见了她的踪影，满山空闻鹧鸪低鸣。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="layout-4-right-img">
                  <img class="img" src="./img/8.jpeg" alt />
                </div>
                <div class="baseFont">
                  <div class="layout-4-right h-center">
                    我登上山顶
                    <br />一股浅浅的倦意由内向外袭涌上来，
                    <br />便倚着一杆青竹坐下
                    <br />拆开夹带的零食水果品尝起来。
                    <br />我居高临下
                    <br />“看得见这广阔的天地，但这广阔的天地却看不见我。”
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">7</span>
            <span class="slide__number slide__number--right">8</span>
          </div>
          <div class="slide slide--layout-5">
            <div class="content">
              <div class="left">
                <div class="layout-5-right-img">
                  <img class="img" src="./img/9.jpeg" alt />
                </div>
                <div class="baseFont">
                  <div class="layout-5-left h-center">
                    <br />紫意从她消逝的地方浮现，蚕食了仅存的一片红晕，
                    <br />这片红晕渐渐斑驳，像是燃尽的篝火。
                    <br />整个世界都成了紫色，几只水鸭相互戏逐，
                    <br />把紫色的天空带起层层细浪。
                    <br />
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont">
                  <div class="layout-5-right h-center">
                    <br />一切都是那样的鲜明，
                    <br />好像拼尽了全力。
                    <br />她到底想要告诉我什么？
                    <br />
                    <br />却又碎碎念念，如此那般。
                    <br />
                    <br />然而此时我昏昏沉沉，
                    <br />徘徊在真实与虚幻之间不能清醒，
                    <br />只能直直地望着远水淡墨，遥山黛痕。
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">9</span>
            <span class="slide__number slide__number--right">10</span>
          </div>
          <div class="slide slide--layout-6">
            <div class="content">
              <div class="bg-img bg-layout-6"></div>
              <div class="left">
                <div class="baseFont">
                  <div class="layout-5-right h-center">
                    <br />这暝色的时空随着远方逐渐亮起的灯火无限延伸出去
                    <br />
                    <br />足以让灵魂恣意放纵
                    <br />
                    <br />为何又让我无所适从？
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont">
                  <div class="layout-5-right h-center">
                    <br />当我再次回到自己身体时
                    <br />周围已经完全暗下来了
                    <br />感受着自己的每一处
                    <br />与之前并无不同
                    <br />
                    <br />她真的走的无声无息
                    <br />什么都没有留下
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">11</span>
            <span class="slide__number slide__number--right">12</span>
          </div>
          <div class="slide slide--layout-7">
            <div class="content">
              <div class="bg-img bg-layout-7"></div>
              <div class="left">
                <div class="baseFont">
                  <div class="layout-5-right h-center">
                    <br />月亮渐渐升高
                    <br />城市娇娆的霓虹开始融入月色中去
                    <br />那边乐声嘈杂，多少往事在那儿喧嚣？
                    <br />我回头望了一眼月光下的竹林......
                    <br />
                    <br />夜风茫然地在山里游荡
                    <br />远处江心渔船上的一盏孤灯幽幽地发散着冷冽的光
                    <br />——固执，昏暗，单调，漠然。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont">
                  <div class="layout-5-right h-center">
                    <br />这无边的夜幕
                    <br />不知是裹挟着我
                    <br />还是裹挟着那世间之物
                    <br />
                    <br />
                    <br />此处万籁俱静。
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">13</span>
            <span class="slide__number slide__number--right">14</span>
          </div>
          <div class="slide slide--layout-8">
            <div class="content">
              <div class="bg-img bg-layout-8"></div>
              <div class="left">
                <div class="baseFont">
                  <div class="layout-5-right h-center" style="color:white">
                    <br />故乡河的水载着现在离去
                    <br />才过不久，过了不久，又过不久。
                    <br />月光开始变得温和起来，
                    <br />凉如雨的夜色，温柔地抚摸着我。
                    <br />渐渐地，我感觉自己身上的枷锁被这双灵巧工丽的手解开了，
                    <br />我独卧江上，与清风徐眠。
                    <br />
                    <br />
                    <br />皎月高悬，
                    <br />黑色苍穹底下的万物都如发散着淡淡荧光，
                    <br />遮盖了那盏孤独的灯。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont" style="transform:translateY(50%);">
                  <div class="h-center" style="color:white">
                    <br />在月华漫天之时，我沉沉睡去。
                    <br />
                    <br />鼓气与叹息，往复不止。
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">15</span>
            <span class="slide__number slide__number--right">16</span>
          </div>
          <div class="slide slide--layout-9">
            <div class="content">
              <div class="bg-img bg-layout-9"></div>
              <div class="left">
                <div class="baseFont">
                  <div class="h-center" style="color:white;margin-top:20%;">
                    醒转朝东望，
                    <br />熹微出晨光。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont">
                  <div class="h-center" style="color:white"></div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">17</span>
            <span class="slide__number slide__number--right">18</span>
          </div>
          <div class="slide slide--layout-10">
            <div class="content">
              <div class="bg-img bg-layout-10"></div>
              <div class="left">
                <div class="baseFont">
                  <div class="layout-5-right h-center" style="color:white">
                    <br />我决定不再停留，于是离开了这片林子，
                    <br />歪歪扭扭的绕下山去，收好白搭的帐篷，
                    <br />慢慢摇桨离开了这里。
                    <br />
                    <br />沿江几里后，水莫名的变得浑浊起来，
                    <br />像是装了太多的心事。
                    <br />
                    <br />我伏在船舷上，失神地看着身遭的光润流动，
                    <br />我仿佛听到了河水的心跳，
                    <br />若那时断时续的敲桨声。
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="baseFont" >
                  <div class="h-center" style="color:white">
                    <br />我突然明白在我昏沉的那段时间里，
                    <br />她做了什么
                    <br />——“她将自己的暗影投入我心，
                    <br />又将我影投入身后这深深的竹林。”
                    <br />想通后，我并没有回头。
                    <br />因为此时，远山的那边，
                    <br />升起了一颗新的太阳。
                    <br />
                    <br />船儿摇晃，此去前方。
                  </div>
                </div>
              </div>
            </div>
            <span class="slide__number slide__number--left">19</span>
            <span class="slide__number slide__number--right">20</span>
          </div>
          <!-- revealer -->
          <div class="revealer">
            <div class="revealer__item revealer__item--left"></div>
            <div class="revealer__item revealer__item--right"></div>
          </div>
          <nav class="arrow-nav">
            <!-- 翻页箭头 -->
            <button class="arrow-nav__item arrow-nav__item--prev">
              <svg class="icon icon--nav">
                <use xlink:href="#icon-nav" />
              </svg>
            </button>
            <button class="arrow-nav__item arrow-nav__item--next">
              <svg class="icon icon--nav">
                <use xlink:href="#icon-nav" />
              </svg>
            </button>
          </nav>
          <!-- navigation -->
          <nav class="nav">
            <button class="nav__button">
              <span class="nav__button-text">目录</span>
            </button>
            <h2 class="nav__chapter"></h2>
            <div class="toc">
              <a class="toc__item" href="#entry-1">
                <span class="toc__item-page">01.</span>
                <span class="toc__item-title">初</span>
              </a>
              <a class="toc__item" href="#entry-2">
                <span class="toc__item-page">03.</span>
                <span class="toc__item-title">探</span>
              </a>
              <a class="toc__item" href="#entry-3">
                <span class="toc__item-page">05.</span>
                <span class="toc__item-title">欢</span>
              </a>
              <a class="toc__item" href="#entry-4">
                <span class="toc__item-page">07.</span>
                <span class="toc__item-title">痒</span>
              </a>
              <a class="toc__item" href="#entry-5">
                <span class="toc__item-page">09.</span>
                <span class="toc__item-title">倦</span>
              </a>
              <a class="toc__item" href="#entry-6">
                <span class="toc__item-page">11.</span>
                <span class="toc__item-title">念</span>
              </a>
              <a class="toc__item" href="#entry-6">
                <span class="toc__item-page">13.</span>
                <span class="toc__item-title">暗</span>
              </a>
              <a class="toc__item" href="#entry-6">
                <span class="toc__item-page">15.</span>
                <span class="toc__item-title">散</span>
              </a>
              <a class="toc__item" href="#entry-6">
                <span class="toc__item-page">17.</span>
                <span class="toc__item-title">转</span>
              </a>
              <a class="toc__item" href="#entry-6">
                <span class="toc__item-page">19.</span>
                <span class="toc__item-title">船</span>
              </a>
            </div>
          </nav>
          <!-- little sides -->
          <!-- 蓝色的指示器，表示厚度 -->
          <div class="slideshow__indicator"></div>
          <div class="slideshow__indicator"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { init } from "./base";
import YouthMobile from "./YouthMobile";
export default {
  name: "youth",
  components: {
    YouthMobile
  },
  mounted() {
    init();
    this.hideNav();
  },
  methods: {
    hideNav() {
      document.querySelector("#iris").style.visibility = "hidden";
      document.querySelector("#hamburger").style.visibility = "visible";
      document.querySelector(".hamburger").classList.add("is-opened-navi");
    }
  }
};
</script>

<style scoped>
@import "base.css";
#youth {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#hamburger {
  position: fixed;
  z-index: 99;
}
.slide {
  font-family: 楷体;
}
.slideshow {
  z-index: 9999 !important;
}
.img {
  width: 100%;
  height: 100%;
}
.bg-img {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover !important;
  filter: grayscale(50%) opacity(25%);
}
.bg-layout-1 {
  background-image: url(./img/1.jpeg);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
}
.bg-layout-2-left {
  background-image: url(./img/3.jpeg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
}
.bg-layout-4-left {
  background-image: url(./img/7.jpeg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
  filter: grayscale(10%) opacity(60%);
}
.bg-layout-6 {
  background-image: url(./img/dark.jpg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
  filter: grayscale(10%) opacity(60%);
}
.bg-layout-7 {
  background-image: url(./img/moon.jpg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
  filter: opacity(80%);
}
.bg-layout-8 {
  background-color: rgb(0, 0, 0);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
  filter: opacity(100%);
}
.bg-layout-9 {
  background-image: url(./img/14.jpeg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
  filter: opacity(100%);
}
.bg-layout-10 {
  background-image: url(./img/17.jpeg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  right: 0;
  filter: opacity(100%);
}
.layout-1-left {
  width: 100%;
  height: 100%;
  margin-top: 12%;
}
.layout-1-right-img {
  margin-top: 10%;
  width: 56%;
  height: 40%;
  margin-left: 2%;
}
.layout-2-right-img {
  width: 49%;
  height: 70%;
  float: right;
  margin-top: 10%;
  margin-right: 5%;
}
.layout-3-left-img {
  width: 47%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10%;
  transform: rotate(90deg);
}
.layout-3-right-img {
  width: 47%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10%;
  transform: rotate(90deg);
}
.layout-4-left-img {
  width: 70%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}
.layout-4-right-img {
  width: 44%;
  height: 72%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5%;
  transform: rotate(90deg);
}
.layout-5-right-img {
  width: 70%;
  height: 50%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
}
#article_title {
  font-size: 1.5em;
}
.h-center {
  text-align: center;
}
.baseFont {
  padding: 2rem;
  word-break: break-word;
  line-height: 1.6;
  font-size: 1.1em;
}
.layout-1-right-bottom {
  margin-top: 5%;
}
.layout-1-right-right {
  width: 60%;
  height: 10%;
  margin-top: 12%;
  margin-right: auto;
  margin-left: auto;
}
.layout-2-left {
  width: 100%;
  height: 100%;
  margin-top: 12%;
}
.layout-2-right {
  width: 40%;
  height: 40%;
  margin-top: 10%;
}
.layout-3-left {
  width: 100%;
  height: 30%;
  margin-top: -18%;
  margin-left: auto;
  margin-right: auto;
}
.layout-4-left {
  width: 100%;
  height: 40%;
  margin-right: auto;
  margin-left: auto;
}
.layout-4-right {
  width: 100%;
  height: 60%;
  margin-top: -15%;
  margin-right: auto;
  margin-left: auto;
}
.layout-5-left {
  width: 100%;
  height: 40%;
  margin-right: auto;
  margin-left: auto;
}
.layout-5-right {
  width: 100%;
  height: 80%;
  margin-top: 25%;
  margin-right: auto;
  margin-left: auto;
}
.layout-2-left-bottom {
  margin-top: 20%;
}
.h-divCenter {
  margin-right: auto;
  margin-left: auto;
}
.content {
  /* 可能需要固定高宽 */
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
.left {
  /* border: 1px solid red; */
  height: 100%;
  width: 49%;
  float: left;
}
.right {
  /* border: 1px solid red; */
  height: 100%;
  width: 49%;
  float: right;
}
</style>


