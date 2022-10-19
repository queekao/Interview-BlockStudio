<template lang="pug">
section.collection
  h3.collection__title Collection
  swiper( :modules="modules"
  :space-between="50"
  :slides-per-view="windowWidth <= 900 ? 1 : 2"
  :navigation="true"
  :effect="'coverflow'"
  :coverflowEffect={
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
}
  @swiper="onSwiper"
  @slideChange="onSlideChange")
    swiper-slide(v-slot="{isActive}") 
      img(src="../../assets/handCream1.png")
      .swiper__btn Hand balm
    swiper-slide
      img(src="../../assets/handCream2.png")
      .swiper__btn Hand Cream
    swiper-slide 
      img(src="../../assets/faceCream1.png")
      .swiper__btn face Cream
    swiper-slide 
      img(src="../../assets/faceCream2.png")
      .swiper__btn face Cream
.collection__btn
  button
  p.collection__btn-text view All
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, EffectCoverflow} from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    gsap.registerPlugin(ScrollTrigger);
    const windowWidth = window.innerWidth;
    const onSwiper = (swiper) => {
      // console.log(swiper);
      //next
      swiper.navigation.$nextEl[0].style.color = "#d68f4c";
      swiper.navigation.$nextEl[0].style.background = "#f0ede8";
      swiper.navigation.$nextEl[0].style.width = "64px";
      swiper.navigation.$nextEl[0].style.height = "64px";
      if (windowWidth <= 900) {
        swiper.navigation.$nextEl[0].style.setProperty(
          "--swiper-navigation-size",
          "16px"
        );
        swiper.navigation.$nextEl[0].style.width = "32px";
        swiper.navigation.$nextEl[0].style.height = "32px";
      }
      swiper.navigation.$nextEl[0].style.borderRadius = "120px";
      swiper.navigation.$nextEl[0].style.boxShadow =
        "rgb(172 172 172 / 20%) 9px 15px 20px 9px;";

      //prev
      swiper.navigation.$prevEl[0].style.color = "#d68f4c";
      swiper.navigation.$prevEl[0].style.width = "64px";
      swiper.navigation.$prevEl[0].style.height = "64px";
      if (windowWidth <= 900) {
        swiper.navigation.$prevEl[0].style.setProperty(
          "--swiper-navigation-size",
          "16px"
        );
        swiper.navigation.$prevEl[0].style.width = "32px";
        swiper.navigation.$prevEl[0].style.height = "32px";
      }
      swiper.navigation.$prevEl[0].style.background = "#f0ede8";
      swiper.navigation.$prevEl[0].style.borderRadius = "120px";
      swiper.navigation.$nextEl[0].style.boxShadow =
        "rgb(172 172 172 / 20%) 9px 15px 20px 9px;";
      swiper.visibleSlidesIndexes = [0];
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    onMounted(() => {
      gsap.fromTo(
        ".collection__title",
        {x: -200, opacity: 0},
        {x: 0, opacity: 1, duration: 1, scrollTrigger: ".swiper__btn"}
      );
    });
    return {
      onSwiper,
      onSlideChange,
      windowWidth,
      modules: [Navigation, EffectCoverflow],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.collection {
  margin-top: 20rem;
  padding: 0 10rem;
  &__title {
    @include font-heading-3;
    color: $color-gray-1;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 5rem;
    margin-bottom: 4rem;
    @include respond(Phone) {
      margin-left: 2.4rem;
    }
    &::before {
      @include line("gray");
      top: 42%;
      left: -3.2rem;
    }
  }
  .swiper {
    width: 80%;
    height: 68rem;
    z-index: 0;
    @include respond(Phone) {
      height: 50rem;
    }
    &-slide {
      img {
        width: 100%;
      }
    }
    &__btn {
      @include buttonSolid;
      @include positionCenter("horizontal");
      @include font-body-2;
      bottom: 3.6rem;
      color: $color-black-1;
    }
  }
  &__btn {
    @include font-body-1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 3rem;
    margin-right: 12rem;
    button {
      @include buttonCTA("arrow-gray", "middle");
      margin-right: 2.4rem;
      &:hover + .collection__btn-text {
        color: $color-primary-2;
      }
      &:active + .collection__btn-text {
        color: $color-primary-0;
      }
    }
    &-text {
      @include font-button;
      color: $color-gray-1;
    }
  }
}
</style>
