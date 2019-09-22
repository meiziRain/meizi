<template>
  <div id="flashword">
    <div class="content">
      <h2 class="content__title">M e i z i</h2>
      <p class="content__subtitle">Say something...</p>
    </div>
    <div class="overlay"></div>
  </div>
</template>
<script>
export default {
  name: "flashword",
  mounted() {
    const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

    animateTitles();

    function getRandomColor() {
      return (
        "#" +
        ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(
          -6
        )
      );
    }

    function animateTitles() {
      const overlay = document.querySelector(".overlay");
      const title = document.querySelector(".content__title");
      charming(title);
      const titleLetters = Array.from(title.querySelectorAll("span"));

      TweenMax.to(overlay, 2, {
        ease: Quad.easeOut,
        opacity: 0
      });

      TweenMax.set(titleLetters, { opacity: 0 });
      TweenMax.staggerTo(
        titleLetters,
        1.5,
        {
          ease: Expo.easeOut,
          startAt: { rotationX: -100, z: -1000 },
          opacity: 1,
          rotationX: 0,
          z: 0
        },
        0.1
      );

      const subtitle = document.querySelector(".content__subtitle");
      TweenMax.set(subtitle, { opacity: 0 });
      TweenMax.to(subtitle, 1.5, {
        ease: Expo.easeOut,
        startAt: { y: 30 },
        opacity: 1,
        y: 0
      });

      const glitch = (el, cycles) => {
        if (cycles === 0 || cycles > 3) return;
        TweenMax.set(el, {
          x: getRandomNumber(-20, 20),
          y: getRandomNumber(-20, 20),
          color: [getRandomColor(), getRandomColor(), getRandomColor()][
            cycles - 1
          ]
        });
        let timeout = setTimeout(() => {
          TweenMax.set(el, { x: 0, y: 0, color: "#fff" });
          glitch(el, cycles - 1);
        }, getRandomNumber(20, 100));
      };

      const loop = startAt => {
        let timeout = setTimeout(() => {
          const titleLettersShuffled = titleLetters.sort(
            (a, b) => 0.5 - Math.random()
          );
          const lettersSet = titleLettersShuffled.slice(
            0,
            getRandomNumber(1, titleLetters.length + 1)
          );
          for (let i = 0, len = lettersSet.length; i < len - 1; ++i) {
            glitch(lettersSet[i], 3);
          }
          loop();
        }, startAt || getRandomNumber(500, 3000));
      };
      loop(1500);
    }
  }
};
</script>
<style  scoped>
.content {
  width: 100%;
  height: 20rem;
}
.content__title {
    font-family: 'Cabin Sketch', cursive;
  height: 15rem;
  line-height: 15rem;
}
.content__subtitle {
  font-family: 'Cabin Sketch', cursive;
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: wheat;
  font-size: 0.4em;
}
@media screen and (max-width: 600px) {
  .content__subtitle {
    font-size: 0.8em;
  }
}
</style>