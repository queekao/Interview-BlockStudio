<template lang="pug">
div(ref="canvas",id="renderCanvas")
</template>

<script>
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  // BoxGeometry,
  // MeshStandardMaterial,
  // FrontSide,
  // Mesh,
  // AxesHelper,
  // Color,
  AmbientLight,
  PointLight,
} from "three";
import {onMounted} from "vue";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
export default {
  setup() {
    let scene = new Scene();
    scene.background = "transparent";
    let camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    let renderer = new WebGLRenderer();
    let light = new AmbientLight(0x404040, 2.8);
    let loader = new GLTFLoader();
    let pLight = new PointLight(0xdbbb76, 1, 100);
    let pLight2 = new PointLight(0xf2eee6, 1, 100);
    pLight.position.set(10, 10, 10);
    pLight2.position.set(-10, -10, -10);
    const init = () => {
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      // console.log(renderer);
      if (window.innerWidth < 900)
        renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);

      loader.load(
        "ring.glb",
        function (glb) {
          let ring = glb.scene.children[1];
          ring.position.y = -0.5;
          ring.castShadow = true;
          ring.receivShadow = true;
          ring.scale.set(5, 5, 5);
          // console.log(ring);
          if (window.innerWidth < 900) ring.scale.set(4, 4, 4);
          scene.add(glb.scene);
          light.position.set(2, 2, 5);
          scene.add(light);
          scene.add(pLight);
          scene.add(pLight2);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
      const container = document.getElementById("renderCanvas");
      container.appendChild(renderer.domElement);
      camera.position.set(0, 1, 2);
    };

    const animate = () => {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 10;
      //
      // controls.enabled = false;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      renderer.setClearColor(0x000000, 0);
      controls.update();
    };
    onMounted(() => {
      init();
      animate();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";
#renderCanvas {
  @include positionCenter(horizontal);
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
