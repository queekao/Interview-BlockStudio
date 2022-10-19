<template lang="pug">
HeaderComp
FirstBlock
CollectionBlock
ServiceBlock
MarqueeBlock
ContactUsBlock
FooterComp
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import FirstBlock from "../components/landing_pages/FirstBlock.vue";
import CollectionBlock from "../components/landing_pages/CollectionBlock.vue";
import ServiceBlock from "../components/landing_pages/ServiceBlock.vue";
import MarqueeBlock from "../components/landing_pages/MarqueeBlock.vue";
import ContactUsBlock from "../components/landing_pages/ContactUsBlock.vue";
import FooterComp from "../components/FooterComp.vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export default {
  components: {
    HeaderComp,
    FirstBlock,
    CollectionBlock,
    ServiceBlock,
    MarqueeBlock,
    ContactUsBlock,
    FooterComp,
  },
  data() {},
  created() {
    gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    gsap.fromTo(
      ".collection",
      {y: -150},
      {
        y: 0,
        duration: 2,
        scrollTrigger: ".collection",
      }
    );
    gsap.fromTo(
      ".service",
      {y: 0},
      {
        y: 0,
        duration: 2,
        scrollTrigger: ".service",
      }
    );
    gsap.fromTo(
      ".marquee",
      {y: -100},
      {
        y: 0,
        duration: 2,
        scrollTrigger: ".marquee",
      }
    );
    gsap.fromTo(
      ".contact",
      {y: -100},
      {
        y: 0,
        duration: 2,
        scrollTrigger: ".contact",
      }
    );
    gsap.fromTo(
      ".footer",
      {y: -100},
      {
        y: 0,
        duration: 2,
        scrollTrigger: ".footer",
      }
    );
  },
};
</script>

<style lang="scss" scoped></style>
