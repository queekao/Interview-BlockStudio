<template lang="pug">
section.service
  h3.service__title service
  .service__list
    .service__item.earth
      EarthIcon.service__item-earth
      h4.service__item-title.earth-title Multinational service base
      p.service__item-content.earth-content Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.
    .service__item 
      h4.service__item-title Multinational service base
      p.service__item-content Do et reprehent reprehendet reprehendederit exercitation excepteur aliqua duis culpa.
      ClockIcon.service__item-clock
</template>

<script>
import EarthIcon from "../../assets/icon/EarthIcon.vue";
import ClockIcon from "../../assets/icon/ClockIcon.vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export default {
  components: {EarthIcon, ClockIcon},
  created() {
    gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    gsap.fromTo(
      ".service__title",
      {x: -200, opacity: 0},
      {x: 0, opacity: 1, duration: 1, scrollTrigger: ".service__item-clock"}
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.service {
  margin-top: 15rem;
  width: 100%;
  &__title {
    @include font-heading-3;
    color: $color-gray-1;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 12rem;
    margin-bottom: 6rem;

    &::before {
      @include line("gray");
      top: 42%;
      left: -3.2rem;
    }
  }
  &__list {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    overflow: auto;
  }
  &__item {
    display: grid;
    flex-direction: column;
    grid-template-rows: 5rem 10rem 30rem;
    border: 1px solid $color-black-3;
    padding: 4rem 10rem;
    @include respond(TabPort) {
      grid-template-rows: 7rem 10rem 30rem;
    }
    &-title {
      @include font-heading-4;
      color: $color-gray-1;
      margin-bottom: 1.6rem;
    }
    &-content {
      @include font-body-1;
      color: $color-gray-1;
    }
    &-earth {
      margin-bottom: 7.5rem;
      width: 100%;
      & path {
        stroke-dashoffset: 0;
        stroke-dasharray: 210;
      }
    }
    &-clock {
      margin-top: 11.8rem;
      width: 100%;
    }
  }
  .earth {
    grid-template-rows: 30rem 5rem 10rem !important;
    border: none;
    border-top: 1px solid $color-black-3;
    border-bottom: 1px solid $color-black-3;
    border-left: 1px solid $color-black-3;
    @include respond(TabPort) {
      grid-template-rows: 30rem 7rem 10rem !important;
    }
    &-title {
      grid-row: 2/3;
    }
    &-content {
      grid-row: 3/4;
    }
  }
}
</style>
