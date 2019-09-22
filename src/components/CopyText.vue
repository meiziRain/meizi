<template>
  <!-- clipboard.js ==> http://www.clipboardjs.cn -->
  <!-- balloon.css ==> https://github.com/kazzkiq/balloon.css -->
  <!-- 该包给元素添加tooltips效果是用过 设置 CSS 伪元素 ::before ::after 完成的 -->
  <!-- :befor是CSS2的写法，::before是CSS3的写法 :before的兼容性要比::before好 ，不过在H5开发中建议使用::before比较好 -->
  <!-- animate.css ==> https://daneden.github.io/animate.css/ -->
  <span
    data-clipboard-action="copy"
    :data-clipboard-text="content"
    aria-label="Copy content"
    data-balloon-pos="down"
    @click="handleAnimate($event)"
    class="text"
  >{{content}}</span>
  <!--   直接传递事件获取当前点击元素   e.target与 e.currentTarget 的异同？-->
</template>

<script>
export default {
  name: "copytext",
  props: {
    content: "",
    animationName: ""
  },
  data() {
    return {};
  },
  mounted() {
    //第一个参数是选择器，注意直接使用标签选择器时产生的歧义。
    new this.clipboard(".text", {
      target: function(trigger) {
        return trigger.nextElementSibling;
      }
    });
  },
  methods: {
    handleAnimate(e) {
      console.log(e.target);
      console.log(e.currentTarget);
      //copy 文本事件绑定
      e.target.setAttribute("aria-label", "Copied");
      this.animateCSS(e.target, this.animationName, () => {
        // Do something after animation
        e.target.setAttribute("aria-label", "Copy content");
      });
    },
    //animate.css  必须是block 或者inline-block ，动画才能生效。
    animateCSS(node, animationName, callback) {
      node.classList.add("animated", animationName);
      function handleAnimationEnd() {
        node.classList.remove("animated", animationName);
        node.removeEventListener("animationend", handleAnimationEnd);

        if (typeof callback === "function") callback();
      }

      node.addEventListener("animationend", handleAnimationEnd);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  /* animate.css  必须是block 或者inline-block ，动画才能生效。 */
  display: inline-block;
  padding: 2px 4px;
  color: var(--color-main);;
  cursor: pointer;
}
.text:focus{
  outline: none;
}
</style>
