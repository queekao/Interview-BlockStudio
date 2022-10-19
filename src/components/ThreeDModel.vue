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
  // data: function () {
  //   const canvas = document.getElementById("renderCanvas");
  //   let renderer = new WebGLRenderer({antialias: true});
  //   let scene = new Scene();
  //   let camera = new PerspectiveCamera(
  //     100,
  //     window.innerWidth / window.innerHeight,
  //     0.01,
  //     1
  //   );
  //   return {
  //     scene: scene,
  //     canvas: canvas,
  //     camera: camera,
  //     controls: [],
  //     renderer: renderer,
  //     // loader: loader,
  //     // light: light,
  //     // cube: cube,
  //     // axes: axes,
  //     speed: 0.01,
  //   };
  // },
  // computed: {
  //   rotate: function () {
  //     if (this.speed === "") {
  //       return 0;
  //     } else {
  //       return this.speed;
  //     }
  //   },
  // },
  // created: function () {
  //   //Controller
  //   // this.controls = new TrackballControls(
  //   //   this.camera,
  //   //   this.renderer.domElement
  //   // );
  //   // this.controls.rotateSpeed = 1.0;
  //   // this.controls.zoomSpeed = 5;
  //   // this.controls.panSpeed = 0.8;
  //   // this.controls.noZoom = false;
  //   // this.controls.noPan = false;
  //   // this.controls.staticMoving = true;
  //   // this.controls.dynamicDampingFactor = 0.3;
  //   //
  // },

  // mounted: function () {
  //   console.log(this.renderer.domElement);
  //   // window.addEventListener("resize", () => {
  //   // });
  //   this.createScene();
  //   // this.animate();
  // },

  // methods: {
  //   animate: function () {
  //     requestAnimationFrame(this.animate);
  //     this.renderer.render(this.scene, this.camera);
  //     this.controls.update();
  //   },
  //   createScene: function () {
  //     let scene = new Scene();
  //     scene.background = new Color(0xdddddd);
  //     let light = new AmbientLight(0x404040, 100);
  //     let renderer = this.renderer;
  //     let loader = new GLTFLoader();
  //     let camera = new PerspectiveCamera(
  //       100,
  //       window.innerWidth / window.innerHeight,
  //       0.01,
  //       1
  //     );
  //     // OrbitControls.dampingFactor = 0.25;
  //     // OrbitControls.enableZoom = false;

  //     // renderer.setSize(window.innerWidth, window.innerHeight);
  //     this.$refs.canvas.appendChild(renderer.domElement);
  //     // light.position.set(0, 0, 10);
  //     // camera.position.z = 100;
  //     // camera.position.y = 100;
  //     // camera.position.x = 800;
  //     // camera.rotation.y = (45 / 180) * Math.PI;

  //     loader.load(
  //       "ring.glb",
  //       function (gltf) {
  //         let ring = gltf.scene.children[1];
  //         ring.scale.set(3, 3, 3);
  //         ring.castShadow = true;
  //         ring.receivShadow = true;
  //         scene.add(gltf.scene);
  //         // light.position.set(2, 2, 5);
  //         scene.add(light);
  //         camera.position.set(0, 0, 1);

  //         console.log(ring);
  //         renderer.render(scene, camera);
  //       },
  //       undefined,
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //     let controls = new OrbitControls(camera, renderer.domElement);
  //     console.log(controls);
  //     controls.autoRotate = true;
  //     controls.autoRotateSpeed = 10;
  //     controls.enableDamping = true;
  //     controls.dampingFactor = 0.01;
  //   },
  // },
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
}
</style>
<!-- <template>
  
</template>

<script>
export default {

}
</script>

<style>

</style> -->
