<template>
  <div id="cloud"></div>
</template>

<script>
export default {
  name: "cloud",
  data() {
    return {};
  },
  created() {},
  mounted() {
    function doNothing() {
      window.event.returnValue = false;
      return false;
    }

    if (!Detector.webgl) Detector.addGetWebGLMessage();

    let container;
    let camera, scene, renderer;
    let mesh, geometry, material;

    let mouseX = 0,
      mouseY = 0;
    let start_time = Date.now();

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    init();

    function init() {
      container = document.getElementById("cloud");
      // Bg gradient

      let canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = window.innerHeight;

      let context = canvas.getContext("2d");

      let gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#1e4877");
      gradient.addColorStop(0.5, "#4584b4");

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      container.style.background = "url(" + canvas.toDataURL("image/png") + ")";
      container.style.backgroundSize = "32px 100%";

      //

      camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        1,
        3000
      );
      camera.position.z = 6000;

      scene = new THREE.Scene();

      geometry = new THREE.Geometry();

      let texture = THREE.ImageUtils.loadTexture("cloud10.png", null, animate);
      texture.magFilter = THREE.LinearMipMapLinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;

      let fog = new THREE.Fog(0x4584b4, -100, 5000);

      material = new THREE.ShaderMaterial({
        uniforms: {
          map: { type: "t", value: texture },
          fogColor: { type: "c", value: fog.color },
          fogNear: { type: "f", value: fog.near },
          fogFar: { type: "f", value: fog.far }
        },
        vertexShader: document.getElementById("vs").textContent,
        fragmentShader: document.getElementById("fs").textContent,
        depthWrite: false,
        depthTest: false,
        transparent: true
      });

      let plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 64));

      for (let i = 0; i < 8000; i++) {
        plane.position.x = Math.random() * 2000 - 500; //值越大，横向云朵越稀疏。
        plane.position.y = -Math.random() * Math.random() * 200 - 15; //值越大，纵向云朵越稀疏。
        plane.position.z = i;
        plane.rotation.z = Math.random() * Math.PI;
        plane.scale.x = plane.scale.y =
          Math.random() * Math.random() * 2.5 + 0.5; //值越大，云层越厚。

        THREE.GeometryUtils.merge(geometry, plane);
      }

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = -8000;
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      window.addEventListener("resize", onWindowResize, false);
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) * 0.1; //此处值越小，鼠标左右视角越窄。
      mouseY = (event.clientY - windowHalfY) * 0.15; //此处值越小，鼠标上下视角越窄。
    }

    function onWindowResize(event) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      let position = ((Date.now() - start_time) * 0.03) % 8000;

      camera.position.x += (mouseX - camera.position.x) * 0.01;
      camera.position.y += (-mouseY - camera.position.y) * 0.01;
      camera.position.z = -position + 8000;

      renderer.render(scene, camera);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cloud {
				background-color: #326696;
}
</style>
