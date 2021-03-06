<template>
    <div id="Dusk">
      <canvas class="landscape" style="z-index:-1;"></canvas>
    </div>
</template>
<script>
export default {
  name: "Dusk",
  mounted() {
    createLandscape({
      // palleteImage: "../assets/pallete6.png"
    });

    function createLandscape(params) {
      var container = document.querySelector(".landscape");
      var width = window.innerWidth;
      var height = window.innerHeight;

      var scene, renderer, camera;
      var terrain;

      var mouse = { x: 0, y: 0, xDamped: 0, yDamped: 0 };
      var isMobile = typeof window.orientation !== "undefined";

      init();

      function init() {
        sceneSetup();
        sceneElements();
        sceneTextures();
        render();

        if (isMobile)
          window.addEventListener("touchmove", onInputMove, { passive: false });
        else window.addEventListener("mousemove", onInputMove);

        window.addEventListener("resize", resize);
        resize();
      }

      function sceneSetup() {
        scene = new THREE.Scene();
        var fogColor = new THREE.Color(0x333333);
        scene.background = fogColor;
        scene.fog = new THREE.Fog(fogColor, 0, 400);

        sky();

        camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000);
        camera.position.y = 8;
        camera.position.z = 4;

        let ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        renderer = new THREE.WebGLRenderer({
          canvas: container,
          antialias: true
        });
        renderer.setPixelRatio = devicePixelRatio;
        renderer.setSize(width, height);
      }

      function sceneElements() {
        var geometry = new THREE.PlaneBufferGeometry(100, 400, 400, 400);

        var uniforms = {
          time: { type: "f", value: 0.0 },
          scroll: { type: "f", value: 0.0 },
          distortCenter: { type: "f", value: 0.1 },
          roadWidth: { type: "f", value: 0.5 },
          pallete: { type: "t", value: null },
          speed: { type: "f", value: 3 },
          maxHeight: { type: "f", value: 10.0 },
          color: new THREE.Color(1, 1, 1)
        };

        var material = new THREE.ShaderMaterial({
          uniforms: THREE.UniformsUtils.merge([
            THREE.ShaderLib.basic.uniforms,
            uniforms
          ]),
          vertexShader: document.getElementById("custom-vertex").textContent,
          fragmentShader: document.getElementById("custom-fragment")
            .textContent,
          wireframe: false,
          fog: true
        });

        terrain = new THREE.Mesh(geometry, material);
        terrain.position.z = -180;
        terrain.rotation.x = -Math.PI / 2;

        scene.add(terrain);
      }

      function sceneTextures() {
        // pallete
        //FIXME: 图片不显示
        //已修复：图片放在public中才会显示，并且写相对路径是以app.vue为起点，估计原因与webpack有关。
        new THREE.TextureLoader().load(params.palleteImage, function(texture) {
          terrain.material.uniforms.pallete.value = texture;
          terrain.material.needsUpdate = true;
        });
      }

      function sky() {
        sky = new THREE.Sky();
        sky.scale.setScalar(450000);
        sky.material.uniforms.turbidity.value = 13;
        sky.material.uniforms.rayleigh.value = 1.2;
        sky.material.uniforms.luminance.value = 1;
        sky.material.uniforms.mieCoefficient.value = 0.1;
        sky.material.uniforms.mieDirectionalG.value = 0.58;

        scene.add(sky);

        let sunSphere = new THREE.Mesh(
          new THREE.SphereBufferGeometry(20000, 16, 8),
          new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        sunSphere.visible = false;
        scene.add(sunSphere);

        var theta = Math.PI * -0.002;
        var phi = 2 * Math.PI * -0.25;

        sunSphere.position.x = 400000 * Math.cos(phi);
        sunSphere.position.y = 400000 * Math.sin(phi) * Math.sin(theta);
        sunSphere.position.z = 400000 * Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms.sunPosition.value.copy(sunSphere.position);
      }

      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }

      function onInputMove(e) {
        e.preventDefault();

        var x, y;
        if (e.type == "mousemove") {
          x = e.clientX;
          y = e.clientY;
        } else {
          x = e.changedTouches[0].clientX;
          y = e.changedTouches[0].clientY;
        }

        mouse.x = x;
        mouse.y = y;
      }

      function render() {
        requestAnimationFrame(render);

        // damping mouse for smoother interaction
        mouse.xDamped = lerp(mouse.xDamped, mouse.x, 0.1);
        mouse.yDamped = lerp(mouse.yDamped, mouse.y, 0.1);

        var time = performance.now() * 0.001;
        terrain.material.uniforms.time.value = time;
        terrain.material.uniforms.scroll.value =
          time + map(mouse.yDamped, 0, height, 0, 4);
        terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.1;
        terrain.material.uniforms.roadWidth.value = map(
          mouse.xDamped,
          0,
          width,
          1,
          4.5
        );

        camera.position.y = map(mouse.yDamped, 0, height, 4, 11);

        renderer.render(scene, camera);
      }

      function map(value, start1, stop1, start2, stop2) {
        return (
          start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
        );
      }

      function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
      }
    }
  }
};
</script>
<style scoped>
#Dusk{
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>