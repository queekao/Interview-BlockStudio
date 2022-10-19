<template lang="pug">
section.contact 
  h3.contact__title contact us
  .contact__content
    img(src="../../assets/cream.png" alt="cream")
    .contact__content-icon#animation
      lottie-animation(
        ref="anim"
        path="email.json"
        :loop="false"
        :autoPlay="false"
        @AnimControl="setAnimController"
       )
    img.contact__content-img(src="../../assets/contact.svg" alt="contact")
    

</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export default {
  components: {
    LottieAnimation,
    anim: "",
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    gsap.fromTo(
      ".contact__title",
      {x: -200, opacity: 0},
      {x: 0, opacity: 1, duration: 1, scrollTrigger: ".contact"}
    );
  },
  methods: {
    setAnimController(e) {
      //   console.log(e);
      this.anim = document.getElementById("animation");
      this.anim.addEventListener("mouseenter", () => {
        e.play();
        // console.log("enter");
      });

      this.anim.addEventListener("mouseout", () => {
        e.stop();
        // console.log("out");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.contact {
  background-color: $color-primary-3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;
  position: relative;
  &::after {
    content: "";
    width: 30rem;
    border: 0.5px solid $color-primary-0;
    margin-right: 12rem;
  }
  @include respond(TabPort) {
    align-items: flex-start;
    flex-direction: column;
    &::after {
      display: none;
    }
  }
  &__title {
    @include font-heading-3;
    color: $color-primary-0;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 12rem;
    width: 20rem;
    @include respond(TabPort) {
      margin-top: 5rem;
    }
    &::before {
      @include line("primary");
      top: 42%;
      left: -3.2rem;
    }
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50%;
      min-width: 40rem;
      &::selection {
        background: transparent;
      }
    }
    &-icon {
      @include buttonCTA("", "big");
      @include positionCenter;
      background-color: $color-primary-1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      z-index: 1;
      &:hover {
        background-color: $color-primary-2;
      }
      &:active {
        background-color: $color-primary-0;
      }
      div {
        pointer-events: none;
      }
    }
    &-img {
      @include positionCenter;
    }
  }
}
</style>
