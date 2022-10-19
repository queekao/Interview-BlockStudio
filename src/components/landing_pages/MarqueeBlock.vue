<template lang="pug">
section.marquee
  h3.marquee__title Marquee
  .marquee__block
    .marquee__block-box.right
      h1.marquee__block-text Pure
      h1.marquee__block-text Organic
      h1.marquee__block-text Fragrance free
    .marquee__block-box.right
      h1.marquee__block-text Pure
      h1.marquee__block-text Organic
      h1.marquee__block-text Fragrance free
    .marquee__block-box.right
      h1.marquee__block-text Pure
      h1.marquee__block-text Organic
      h1.marquee__block-text Fragrance free
  .marquee__block 
    .marquee__block-box.left
      h1.marquee__block-text.text2 Pure
      h1.marquee__block-text.text2 Organic
      h1.marquee__block-text.text2 Fragrance free
    .marquee__block-box.left
      h1.marquee__block-text.text2 Pure
      h1.marquee__block-text.text2 Organic
      h1.marquee__block-text.text2 Fragrance free

</template>

<script>
// import {Linear} from "gsap/all";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export default {
  data() {
    return {
      gsapTimeline: Object,
    };
  },
  created() {
    gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    gsap.fromTo(
      ".marquee__title",
      {x: -200, opacity: 0},
      {x: 0, opacity: 1, duration: 1, scrollTrigger: ".text2"}
    );
    gsap.fromTo(
      ".marquee__block",
      {borderWidth: 21},
      {
        borderWidth: 1,
        duration: 1,
        scrollTrigger: ".marquee__title",
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.marquee {
  margin-top: 7rem;
  &__title {
    @include font-heading-3;
    color: $color-gray-1;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 12rem;
    margin-bottom: 10rem;
    &::before {
      @include line("gray");
      top: 42%;
      left: -3.2rem;
    }
  }
  &__block {
    border: 1px solid $color-black-3;
    overflow-x: hidden;
    padding: 4rem 0rem;
    display: flex;
    .right {
      animation: scrollRight 20s linear infinite;
      &:nth-child(2) {
        animation: scrollRight2 20s linear infinite;
      }
      &:nth-child(3) {
        animation: scrollRight3 20s linear infinite;
      }
    }
    .left {
      animation: scroll 40s linear infinite;
      &:nth-child(2) {
        animation: scroll2 40s linear infinite;
        animation-delay: -20s;
      }
    }

    &-box {
      /* width: 161rem; */
      white-space: nowrap;
      width: fit-content;
      display: flex;
      /* animation-play-state: paused; */
      justify-content: center;
      align-items: center;
    }
    &-text {
      @include font-display-1;
      color: $color-primary-2;
      margin-right: 10rem;
    }
    &-text:not(:first-child) {
      &::before {
        @include line("primary2", "big");
        top: 50%;
        left: -9.6rem;
      }
    }
  }
}
</style>
