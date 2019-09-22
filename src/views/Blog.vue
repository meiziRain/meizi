<template>
  <div id="blog">
    <router-view id="articles"></router-view>

    <!-- COIDEA:demo START -->
    <div class="carousel">
      <!-- COIDEA:demo:slider:for START -->
      <div class="slider slider-for">
        <div class="item" :style="youthImg"></div>
        <div class="item" :style="sexImg"></div>
        <div class="item" style="background-image: url(../assets/blog/img-3.jpg)"></div>
        <div class="item" style="background-image: url(../assets/blog/img-4.jpg)"></div>
        <div class="item" style="background-image: url(../assets/blog/img-5.jpg)"></div>
      </div>
      <!-- COIDEA:demo:slider:for END -->

      <!-- COIDEA:demo:slider:nav START -->

      <div class="slider slider-nav">
        <div class="nav-item">
          <div class="slide-content" :style="youthImg">
            <div class="number">00</div>
            <div class="body">
              <div class="location">
                Photo by: 若存 -
                <a
                  href="https://www.duitang.com/people/?user_id=1726891746"
                  target="blank"
                >
                  <img
                    id="duitang"
                    src="https://c-ssl.duitang.com/uploads/people/201312/26/20131226165635_LNYCt.png"
                    alt
                  />
                </a>
              </div>
              <div class="headline">
                故乡遥
                <br />
              </div>
              <router-link :to="{ path: '/blog/youth'}">
                <div class="link">Read the Story</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="slide-content" :style="sexImg">
            <div class="number">01</div>
            <div class="body">
              <div class="location">Mong Kok, Hong Kong</div>
              <div class="headline">
                Photo by
                <br />Ryan Tang
              </div>
              <router-link :to="{ path: '/blog/sex'}">
                <div class="link">Read the Story</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="slide-content" style="background-image: url(../assets/blog/img-2.jpg)">
            <div class="number">02</div>
            <div class="body">
              <div class="location">Shibuya, Japan</div>
              <div class="headline">
                Photo by
                <br />Benjamin Hung
              </div>
              <div class="link">Read the Story</div>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="slide-content" style="background-image: url(../assets/blog/img-3.jpg)">
            <div class="number">03</div>
            <div class="body">
              <div class="location">New York, United States</div>
              <div class="headline">
                Photo by
                <br />Matteo Modica
              </div>
              <div class="link">Read the Story</div>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="slide-content" style="background-image: url(../assets/blog/img-4.jpg)">
            <div class="number">04</div>
            <div class="body">
              <div class="location">Tokyo, Japan</div>
              <div class="headline">
                Photo by
                <br />Steven Roe
              </div>
              <div class="link">Read the Story</div>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="slide-content" style="background-image: url(../assets/blog/img-5.jpg)">
            <div class="number">05</div>
            <div class="body">
              <div class="location">Yau Ma Tei, Hong Kong</div>
              <div class="headline">
                Photo by
                <br />Sean Foley
              </div>
              <div class="link">Read the Story</div>
            </div>
          </div>
        </div>
      </div>
      <!-- COIDEA:demo:slider:nav END -->

      <!-- COIDEA:demo:navigation START -->
      <!-- <div class="navigation">
        <button class="forward">></button>
        <button class="back"><</button>
      </div>-->
      <!-- COIDEA:demo:navigation END -->
    </div>
    <!-- COIDEA:demo END -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Iris from "../components/Iris.vue";
import Star from "@/components/Star.vue";
import { slick } from "@/assets/blog/slick.js"; //注意路径
export default {
  name: "blog",
  components: { Star },
  data() {
    return {
      youth: require("../assets/blog/youth/dusk-1.jpeg"),
      youthImg: "",

      sex: require("../assets/blog/sex/idea.jpg"),
      sexImg: ""
    };
  },
  created() {
    this.youthImg = "background-image: url(" + this.youth + ")";
    this.sexImg = "background-image: url(" + this.sex + ")";
  },
  mounted() {
    slick();
    this.slickApply();
  },
  beforeDestroy() {},
  methods: {
    goYouth() {
      this.$router.push({
        name: "youth"
      });
    },
    slickApply() {
      $(function() {
        $(".slider-for").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".slider-nav"
        });
        $(".slider-nav").slick({
          slidesToScroll: 1,
          asNavFor: ".slider-for",
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          centerPadding: "60px",
          slidesToShow: 3,
          infinite: false,
          prevArrow: $(".back"),
          nextArrow: $(".forward"),
          responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1
              }
            }
          ]
        });
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/blog/base.css";
@import "../assets/blog/demo.css";
#duitang {
  display: inline-block;
  width: 70px;
  height: auto;
  /* 文字相对图片基准 */
  vertical-align: middle;
}

#blog {
  -webkit-animation: fade 2s ease;

  -moz-animation: fade 2s ease;

  animation: fade 2s ease forwards;
}
@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


