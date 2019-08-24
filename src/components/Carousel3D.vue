<template>
  <div id="carousel3D">
    <h2>Four images</h2>
    <div class="carousel" data-gap="20" data-bfc>
      <figure>
        <img src="../assets/about/avatar.jpg" alt />
        <img src="../assets/about/avatar.jpg" alt />
        <img src="../assets/about/avatar.jpg" alt />
        <img src="../assets/about/avatar.jpg" alt />
      </figure>
      <nav>
        <button class="nav prev">Prev</button>
        <button class="nav next">Next</button>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: "carousel3D",
  methods: {},

  mounted() {


    window.addEventListener("load", function() {
      var carousels = document.querySelectorAll(".carousel");

      for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
      }
    });

    function carousel(root) {
      var figure = root.querySelector("figure"),
        nav = root.querySelector("nav"),
        images = figure.children,
        n = images.length,
        gap = root.dataset.gap || 0,
        bfc = "bfc" in root.dataset,
        theta = (2 * Math.PI) / n,
        currImage = 0;

      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
      window.addEventListener("resize", function() {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
      });

      setupNavigation();

      function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));

        figure.style.transformOrigin = "50% 50% " + -apothem + "px";

        for (var i = 0; i < n; i++) {
          images[i].style.padding = gap + "px";
        }
        for (i = 1; i < n; i++) {
          images[i].style.transformOrigin = "50% 50% " + -apothem + "px";
          images[i].style.transform = "rotateY(" + i * theta + "rad)";
        }
        if (bfc)
          for (i = 0; i < n; i++) {
            images[i].style.backfaceVisibility = "hidden";
          }
        rotateCarousel(currImage);
      }

      function setupNavigation() {
        nav.addEventListener("click", onClick, true);

        function onClick(e) {
          e.stopPropagation();

          var t = e.target;
          if (t.tagName.toUpperCase() != "BUTTON") return;

          if (t.classList.contains("next")) {
            currImage++;
          } else {
            currImage--;
          }

          rotateCarousel(currImage);
        }
      }

      function rotateCarousel(imageIndex) {
        figure.style.transform = "rotateY(" + imageIndex * -theta + "rad)";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  padding: 20px;
  -webkit-perspective: 500px;
          perspective: 500px;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.carousel > * {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
}
.carousel figure {
  margin: 0;
  width: 40%;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.carousel figure img {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0px;
}
.carousel figure img:not(:first-of-type) {
  position: absolute;
  left: 0;
  top: 0;
}
.carousel nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 20px 0 0;
}
.carousel nav button {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  margin: 0 5px;
  cursor: pointer;
  color: #333;
  background: none;
  border: 1px solid;
  letter-spacing: 1px;
  padding: 5px 10px;
}

</style>
