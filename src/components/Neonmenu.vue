<template>
  <div id="neonmenu">
    <div class="button-container">
      <div class="button-wrapper">
        <div class="button">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="button-child-wrapper">
          <div class="button-child" @click="toHome">
            <i class="fas fa-home fa-2x"></i>
          </div>
          <div class="button-child" @click="toBlog">
            <i class="fas fa-blog fa-2x"></i>
          </div>
          <div class="button-child" @click="toStudio">
            <i class="fas fa-tachometer-alt fa-2x"></i>
          </div>
          <div class="button-child" @click="toDaily">
            <i class="far fa-calendar-check fa-2x"></i>
          </div>
          <div class="button-child" @click="toAbout">
            <i class="far fa-address-card fa-2x"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: "neonmenu",
  props: {
    //  Object/Array类型不能直接定义空对象或空数组，必须使用 工厂函数 return 回一个默认值。
    //  参考：https://www.jianshu.com/p/904551dc6c15     https://www.jianshu.com/p/9f4127ad3312
    // navArray: {
    //   type: Array,
    //   // default: function () { return [] }
    //   default: () => ["toHome", "toBlog", "toStudio", "toDaily", "toAbout"]
    // },
  },
  created() {},
  mounted() {
    let buttonContainer = document.querySelector(".button-container");
    let overlay = document.querySelector(".overlay");

    buttonContainer.addEventListener(
      "click",
      function() {
        buttonContainer.classList.toggle("open");
      },
      false
    );
  },
  methods: {
    toHome() {
      let me = this;
      me.currentindex = 0;
      me.$router.push({
        name: "home"
      });
    },
    toBlog() {
      let me = this;
      me.currentindex = 1;
      //sessionStorage.setItem("currentindex", 0); 是按字符型存储的，如果在HTML中使用 === 运算符与整形运算，那么就是false。
      me.$router.push({
        name: "blog"
      });
    },
    toStudio() {
      let me = this;
      me.currentindex = 2;
      me.$router.push({
        name: "studio"
      });
    },
    toDaily() {
      let me = this;
      me.currentindex = 3;
      me.$router.push({
        name: "daily"
      });
    },
    toAbout() {
      let me = this;
      me.currentindex = 4;
      me.$router.push({
        name: "about"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100");
@-webkit-keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    box-shadow: 0 0 9px 2px #228dff, 0 0 9px 2px #228dff inset;
  }
  20%,
  24%,
  55% {
    box-shadow: none;
    opacity: 0.8;
  }
}
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    box-shadow: 0 0 9px 2px #228dff, 0 0 9px 2px #228dff inset;
  }
  20%,
  24%,
  55% {
    box-shadow: none;
    opacity: 0.8;
  }
}
@-webkit-keyframes flicker-icon {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    fill: #ffffff;
  }
  20%,
  24%,
  55% {
    fill: #411a58;
    opacity: 0.8;
  }
}
@keyframes flicker-icon {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    fill: #ffffff;
  }
  20%,
  24%,
  55% {
    fill: #411a58;
    opacity: 0.8;
  }
}
* {
  box-sizing: border-box;
}

.overlay {
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  transition: all 300ms ease-in-out;
  background: #240e31;
}
.button-container {
  width: 4rem;
  height: 4rem;
}
.button-container .button-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.button-container.open .button {
  border-color: #d94f5c;
  box-shadow: 0 0 9px 2px #d94f5c, 0 0 9px 2px #d94f5c inset;
}
.button-container.open .button span {
  width: 3px;
  background-color: #d94f5c;
  box-shadow: 0 0 9px 2px #d94f5c, 0 0 9px 2px #d94f5c inset;
  transition: margin 300ms, border-radius 300ms 600ms, height 300ms 600ms,
    -webkit-transform 300ms;
  transition: margin 300ms, transform 300ms, border-radius 300ms 600ms,
    height 300ms 600ms;
  transition: margin 300ms, transform 300ms, border-radius 300ms 600ms,
    height 300ms 600ms, -webkit-transform 300ms;
}
.button-container.open .button span:first-child,
.button-container.open .button span:last-child {
  margin: 0;
  height: 30px;
  border-radius: 5px;
}
.button-container.open .button span:first-child {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
.button-container.open .button span:nth-of-type(2) {
  opacity: 0;
}
.button-container.open .button span:last-child {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}
.button-container.open .button-child-wrapper {
  -webkit-transform: translateX(-150px);
  transform: translateX(-150px);
  transition-delay: 0s;
}
.button-container.open .button-child {
  box-shadow: 0 0 9px 2px #228dff, 0 0 9px 2px #228dff inset;
  transition-delay: 500ms;
  color: #d94f5c;
}
.button-container.open .button-child i {
  opacity: 1;
  visibility: visible;
  transition-delay: 500ms;
}
.button-container.open .button-child i {
  -webkit-animation: flicker-icon 1.5s infinite alternate;
  animation: flicker-icon 1.5s infinite alternate;
}
.button-container.open .button-child:nth-child(2) {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.button-container.open .button-child:nth-child(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.button-container.open .button-child:nth-child(4) {
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.button-container.open .button-child:nth-child(5) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.button,
.button-child-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* 单个圆时的属性 */
.button {
  border-radius: 50%;
  border: 3px solid #ffffff;
  z-index: 40;
  box-shadow: 0 0 9px 2px #228dff, 0 0 9px 2px #228dff inset;
  /* 分别是外内shadow color  */
  transition: all 300ms ease-in-out 500ms;
}
.button span {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 5px;
  height: 5px;
  /* 不知道有什么用 */
  background-color: #ffffff;
  border-radius: 50%;
  /* 三点的颜色 */
  box-shadow: 0 0 9px 2px #ffffff, 0 0 9px 2px #ffffff inset;
  transition: height 300ms, margin 300ms 600ms, background-color 600ms,
    border-radius 600ms, -webkit-transform 600ms;
  transition: height 300ms, transform 600ms, margin 300ms 600ms,
    background-color 600ms, border-radius 600ms;
  transition: height 300ms, transform 600ms, margin 300ms 600ms,
    background-color 600ms, border-radius 600ms, -webkit-transform 600ms;
}
.button span:first-child {
  margin-top: -10px;
}
.button span:last-child {
  margin-top: 10px;
}

.button-child-wrapper {
  transition: -webkit-transform 0.3s cubic-bezier(0.5, -0.5, 0.5, 1.5) 500ms;
  transition: transform 0.3s cubic-bezier(0.5, -0.5, 0.5, 1.5) 500ms;
  transition: transform 0.3s cubic-bezier(0.5, -0.5, 0.5, 1.5) 500ms,
    -webkit-transform 0.3s cubic-bezier(0.5, -0.5, 0.5, 1.5) 500ms;
  z-index: 30;
}

.button-child {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: 3px solid #ffffff;
  /* 阔开的圆形item环颜色 */
  -webkit-transform-origin: 182.5px;
  transform-origin: 182.5px;
  transition: all 300ms cubic-bezier(0.64, 0.04, 0.35, 1);
}
.button-child:nth-child(2) i {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.button-child:nth-child(3) i {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.button-child:nth-child(4) i {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-135deg);
}
.button-child:nth-child(5) i {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-180deg);
}
.button-child i {
  opacity: 0;
  visibility: hidden;
  transition: all 600ms cubic-bezier(0.64, 0.04, 0.35, 1) calc(250);
}
</style>
