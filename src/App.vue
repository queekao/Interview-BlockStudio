<template lang="pug">
LandingPage
</template>

<script>
import LandingPage from "./pages/LandingPage.vue";
export default {
  name: "App",
  components: {LandingPage},
  mounted() {
    //Reset
    // let appAllPage = document.getElementById("app");
    // appAllPage.style.height = window.innerHeight + "px";
  },
};
</script>

<style lang="scss">
@import "./style/main.scss";
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Optima";
  position: relative;
  font-size: 62.5%;
  @include respond(TabLand) {
    font-size: 56.25%; // 1rem = 9px , 9/16 = 56.25%
  }
  @include respond(TabPort) {
    font-size: 50%; // 1rem = 8px , 8/16 = 50%
  }
  @include respond(Phone) {
    font-size: 35%; // 1rem = 5.6px , 8/16 = 30%
  }
  @include respond(BigDesktop) {
    font-size: 75%; //1rem = 12 , 12/16 = 75%
  }
}
#app {
  box-sizing: border-box;
  position: relative;
}
li {
  list-style: none;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
</style>
