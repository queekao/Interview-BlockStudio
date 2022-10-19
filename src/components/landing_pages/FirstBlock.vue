<template lang="pug">
section
  .left
    img(src="../../assets/asure.png" alt="woman")
    h1.left__title pure, organic, natural.
  ThreeDModel
  .right
    img(src="../../assets/whiteCotton.png" alt="surface")
    .right__middle
      h3.right__middle-subTitle Concept
      h1.right__middle-title natural skin products
    .right__bottom
      p.right__bottom-text Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa. 
      button
      p.right__bottom-btnText view All
</template>

<script>
import gsap from "gsap";
import ThreeDModel from "../ThreeDModel.vue";
export default {
  components: {ThreeDModel},
  mounted() {
    gsap.fromTo(".left", {x: -100}, {x: 0, duration: 1});
    gsap.fromTo(".right__bottom", {x: 100}, {x: 0, duration: 1});
    gsap.fromTo(".right__middle-title", {y: -150}, {y: 0, duration: 1});
    gsap.fromTo(".right__middle-subTitle", {x: -200}, {x: 0, duration: 1});
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
section {
  background-color: $color-primary-1;
  height: 100rem;
  .left {
    img {
      margin-top: 18rem;
      width: 50%;
      max-width: 65rem;
      min-width: 32rem;
    }
    &__title {
      @include font-display-1;
      color: $color-primary-1;
      position: absolute;
      bottom: 3.5rem;
      left: 7.2rem;
      mix-blend-mode: overlay;
      max-width: 45rem;
      @include respond(TabPort) {
        display: none;
      }
    }
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: $color-white-1;
    img {
      width: 45%;
      @include respond(TabPort) {
        width: 38%;
      }
    }
    &__middle {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 11rem;
      gap: 7rem;
      @include respond(TabPort) {
        align-self: center;
      }
      &-title {
        @include font-heading-1;
        color: $color-white-1;
        max-width: 45rem;
      }
      &-subTitle {
        @include font-heading-3;
        text-transform: uppercase;
        transform: rotate(90deg);
        &::before {
          content: "";
          @include line("light");
          top: 42%;
          left: -3.2rem;
        }
      }
    }
    &__bottom {
      max-width: 25rem;
      margin-top: 8rem;
      margin-right: 12rem;
      display: grid;
      align-items: center;
      grid-template-columns: 30% 70%;
      column-gap: 1rem;
      @include respond(TabPort) {
        align-self: center;
      }
      &-text {
        @include font-body-1;
        grid-column: 1 / -1;
        margin-bottom: 5rem;
      }
      button {
        @include buttonCTA("arrow-light", "middle");
        margin-right: 2.4rem;
        /* &:hover + .right__bottom-btnText {
          color: aqua;
        } */
      }
      &-btnText {
        @include font-button;
      }
    }
  }
}
</style>
