<template>
  <div id="circlehover">
    <ul class="ch-grid">
      <li>
        <div class="ch-item">
          <div class="ch-info">
            <div class="ch-info-front ch-img-1"></div>
            <div class="ch-info-back">
              <h3>Say</h3>
              <!-- <p>
                by Alexander Shumihin
                <a href="http://www.htmleaf.com/">View on htmleaf</a>
              </p> -->
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "circlehover",
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* common */
.ch-grid {
  padding: 0;
  list-style: none;
  text-align: center;
  width: 100%;
}

.ch-grid:after,
.ch-item:before {
  content: "";
  display: table;
}

.ch-grid:after {
  clear: both;
}

.ch-grid li {
  width: 8rem;
  height: 8rem;
  display: inline-block;
  margin: 20px;
}

/* item */
.ch-item {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  cursor: default;
  -webkit-perspective: 900px;
  -moz-perspective: 900px;
  -o-perspective: 900px;
  -ms-perspective: 900px;
  perspective: 900px;
}
.ch-info {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.ch-info > div {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-position: center center;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  transition: all 0.4s linear;
  -webkit-transform-origin: 50% 0%;
  -moz-transform-origin: 50% 0%;
  -o-transform-origin: 50% 0%;
  -ms-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}

.ch-info .ch-info-front {
  box-shadow: inset 0 0 0 0.8em rgba(0, 0, 0, 0.3);
}

.ch-info .ch-info-back {
  -webkit-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
  -moz-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
  -o-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
  -ms-transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
  transform: translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  opacity: 0;
}

.ch-img-1 {
  background-image: url(../assets/about/avatar.jpg);
  background-size: 100%;
}

.ch-info h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 24px;
  margin: 0 15px;
  padding: 60px 0 0 0;
  height: 50px;
  font-family: "Open Sans", Arial, sans-serif;
  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
}

.ch-info p {
  color: #fff;
  padding: 10px 5px;
  font-style: italic;
  margin: 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.ch-info p a {
  display: block;
  color: #fff;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  padding-top: 4px;
  font-family: "Open Sans", Arial, sans-serif;
}

.ch-info p a:hover {
  color: #fff222;
  color: rgba(255, 242, 34, 0.8);
}

.ch-item:hover .ch-info-front {
  -webkit-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
  -moz-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
  -o-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
  -ms-transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
  transform: translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);
  opacity: 0;
}

.ch-item:hover .ch-info-back {
  -webkit-transform: rotate3d(1, 0, 0, 0deg);
  -moz-transform: rotate3d(1, 0, 0, 0deg);
  -o-transform: rotate3d(1, 0, 0, 0deg);
  -ms-transform: rotate3d(1, 0, 0, 0deg);
  transform: rotate3d(1, 0, 0, 0deg);
  opacity: 1;
}


@media screen and (max-width: 400px) {
  .ch-grid li {
    width: 6rem;
    height: 6rem;
  }
  .ch-info .ch-info-front {
    box-shadow: inset 0 0 0 0.3em rgba(0, 0, 0, 0.3);
  }
}

</style>
