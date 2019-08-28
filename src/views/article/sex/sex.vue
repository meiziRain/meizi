

<template>
  <!-- https://github.com/codrops/ImageTrailEffects/ -->
  <div id="sex">
    <div class="sex-content" ref="content">
      <img class="content__img" src="./imgs/pornhub-1.png" alt="Some image" />
      <img class="content__img" src="./imgs/idea.jpg" alt="Some image" />
      <img class="content__img" src="./imgs/PetiteAlexis-1.jpg" alt="Some image" />
      <img class="content__img" src="./imgs/PetiteAlexis-2.jpg" alt="Some image" />
      <img class="content__img" src="./imgs/PetiteAlexis-3.png" alt="Some image" />
      <img class="content__img" src="./imgs/PetiteAlexis-8.jpg" alt="Some image" />
      <h3 class="content__title">Some beautiful bodies</h3>
    </div>
    <!--/content-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "sex",
  components: {},
  mounted() {
    this.initImg();
  },
  methods: {
    initImg() {
      // body element
      const body = document.body;

      // helper functions
      const MathUtils = {
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // distance between two points
        distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
      };

      // get the mouse position
      const getMousePos = ev => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
          posx = ev.pageX;
          posy = ev.pageY;
        } else if (ev.clientX || ev.clientY) {
          posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
          posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return { x: posx, y: posy };
      };

      // mousePos: current mouse position
      // cacheMousePos: previous mouse position
      // lastMousePos: last last recorded mouse position (at the time the last image was shown)
      let lastMousePos, cacheMousePos;
      let mousePos = (lastMousePos = cacheMousePos = { x: 0, y: 0 });

      // update the mouse position
      window.addEventListener("mousemove", ev => (mousePos = getMousePos(ev)));

      // gets the distance from the current mouse position to the last recorded mouse position
      const getMouseDistance = () =>
        MathUtils.distance(
          mousePos.x,
          mousePos.y,
          lastMousePos.x,
          lastMousePos.y
        );

      class Image {
        constructor(el) {
          this.DOM = { el: el };
          // image deafult styles
          this.defaultStyle = {
            x: 0,
            y: 0,
            opacity: 0
          };
          // get sizes/position
          this.getRect();
          // init/bind events
          this.initEvents();
        }
        initEvents() {
          // on resize get updated sizes/position
          window.addEventListener("resize", () => this.resize());
        }
        resize() {
          // reset styles
          TweenMax.set(this.DOM.el, this.defaultStyle);
          // get sizes/position
          this.getRect();
        }
        getRect() {
          this.rect = this.DOM.el.getBoundingClientRect();
        }
        isActive() {
          // check if image is animating or if it's visible
          return (
            TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0
          );
        }
      }

      class ImageTrail {
        constructor() {
          // images container
          this.DOM = { content: document.querySelector(".sex-content") };
          // array of Image objs, one per image element
          this.images = [];
          [...this.DOM.content.querySelectorAll("img")].forEach(img =>
            this.images.push(new Image(img))
          );
          // total number of images
          this.imagesTotal = this.images.length;
          // upcoming image index
          this.imgPosition = 0;
          // zIndex value to apply to the upcoming image
          this.zIndexVal = 1;
          // mouse distance required to show the next image
          this.threshold = 100;
          // render the images
          requestAnimationFrame(() => this.render());
        }
        render() {
          // get distance between the current mouse position and the position of the previous image
          let distance = getMouseDistance();
          // cache previous mouse position
          cacheMousePos.x = MathUtils.lerp(
            cacheMousePos.x || mousePos.x,
            mousePos.x,
            0.1
          );
          cacheMousePos.y = MathUtils.lerp(
            cacheMousePos.y || mousePos.y,
            mousePos.y,
            0.1
          );

          // if the mouse moved more than [this.threshold] then show the next image
          if (distance > this.threshold) {
            this.showNextImage();

            ++this.zIndexVal;
            this.imgPosition =
              this.imgPosition < this.imagesTotal - 1
                ? this.imgPosition + 1
                : 0;

            lastMousePos = mousePos;
          }

          // check when mousemove stops and all images are inactive (not visible and not animating)
          let isIdle = true;
          for (let img of this.images) {
            if (img.isActive()) {
              isIdle = false;
              break;
            }
          }
          // reset z-index initial value
          if (isIdle && this.zIndexVal !== 1) {
            this.zIndexVal = 1;
          }

          // loop..
          requestAnimationFrame(() => this.render());
        }
        showNextImage() {
          // show image at position [this.imgPosition]
          const img = this.images[this.imgPosition];
          // kill any tween on the image
          TweenMax.killTweensOf(img.DOM.el);

          new TimelineMax()
            // show the image
            .set(
              img.DOM.el,
              {
                startAt: { opacity: 0 },
                opacity: 1,
                scale: 1,
                zIndex: this.zIndexVal,
                x: cacheMousePos.x - img.rect.width / 2,
                y: cacheMousePos.y - img.rect.height / 2
              },
              0
            )
            // animate position
            .to(
              img.DOM.el,
              1.8,
              {
                ease: Expo.easeOut,
                x: mousePos.x - img.rect.width / 2,
                y: mousePos.y - img.rect.height / 2
              },
              0
            )
            // then make it disappear
            .to(
              img.DOM.el,
              0.8,
              {
                ease: Power1.easeOut,
                opacity: 0
              },
              0.8
            )
            // scale down the image
            .to(
              img.DOM.el,
              0.8,
              {
                ease: Quint.easeInOut,
                scale: 2
              },
              0.8
            );
        }
      }
      new ImageTrail();
    }
  }
};
</script>

<style scoped>
#sex {
  position: absolute;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  --color-title: #232323;
  --img-maxwidth: 400px;
  --blendmode-title: difference;
  --filter-img: none;
}
.sex-content {
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
}
.content__title {
  font-family: forma-djr-display, sans-serif;
  font-weight: 700;
  position: relative;
  z-index: 10000;
  font-size: 5vw;
  mix-blend-mode: var(--blendmode-title);
  -webkit-text-stroke: 2px var(--color-title);
  text-stroke: 2px var(--color-title);
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  color: transparent;
  pointer-events: none;
}

.content__img {
  max-width: var(--img-maxwidth);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: transform;
  filter: var(--filter-img);
}

.content__img--full {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>


