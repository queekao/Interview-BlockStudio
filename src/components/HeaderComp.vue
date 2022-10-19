<template lang="pug">
header.header
  .header__logo
    img(src="../assets/brand-logo.svg" alt="logo")
  input#navi.header__check-box(type="checkbox")
  label.header__btn(for="navi")
    span.header__burger &nbsp;
  .header__bg &nbsp;
  nav.header__nav
    ul.header__list
      li.header__list-item About
      li.header__list-item How To
      li.header__list-item Product
      .header__list-itemWrapper
        img(src="../assets/icon/shop.svg")
        li.header__list-item Shop
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  @include respond(Phone) {
    /* position: fixed; */
  }
  &__logo {
    background-color: $color-primary-1;
    padding: 2rem;
    img {
      mix-blend-mode: difference;
      width: 100%;
    }
  }
  &__nav {
    @include respond(Phone) {
      opacity: 0;
      visibility: hidden;
      position: fixed;
      padding: 0;
      transition: all 0.5s;
      height: 100%;
      width: 0;
      top: 0;
      left: 0%;
    }
  }
  &__list {
    display: flex;
    align-items: center;
    padding: 1.2rem 4rem;
    background-color: $color-primary-4;
    border-radius: $border-rounded;
    box-shadow: $box-shadow-1;
    @include respond(Phone) {
      @include positionCenter;
      flex-direction: column;
      gap: 1rem;
      background: transparent;
    }
    &-item {
      @include font-body-2;
      color: $color-black-1;
      transition: all 0.3s;
      cursor: pointer;
      &::selection {
        background-color: transparent;
      }
      &:hover {
        color: $color-primary-2;
      }
      &:active {
        color: $color-primary-0;
      }
      @include respond(Phone) {
        font-size: 3.6rem;
        color: $color-white-1;

        &:hover {
          color: $color-white-1;
        }
        &:active {
          color: $color-white-1;
        }
      }
    }
    &-itemWrapper {
      display: flex;
      align-items: center;
      position: relative;
      &::before {
        @include line("primary");
        left: -50%;
        @include respond(Phone) {
          display: none;
        }
      }
      img {
        margin-right: 0.8rem;
        @include respond(Phone) {
          display: none;
        }
      }
    }
    &-item:not(:last-child) {
      margin-right: 4rem;
      @include respond(Phone) {
        margin-right: 0rem;
      }
    }
  }
  //burger
  &__check-box {
    display: none;
  }
  //burger btn
  &__btn {
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 4rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 20;
    background-color: $color-primary-4;
    display: none;
    box-shadow: $box-shadow-1;
    cursor: pointer;
    @include respond(Phone) {
      display: block;
    }
  }
  ///burger bg
  &__bg {
    height: 6rem;
    width: 6rem;
    position: fixed;
    top: 4.5rem;
    right: 7rem;
    border-radius: 50%;
    /* right: 5.4rem; */
    background-image: radial-gradient($color-primary-1, $color-primary-2);
    z-index: 10;
    /* opacity: 0; */
    /* visibility: hidden; */
    /* transform: scale(70); */
    transition: transform 0.3s cubic-bezier(1, 1.01, 1, 0.59);
    display: none;
    @include respond(Phone) {
      display: block;
    }
  }
  //
  &__check-box:checked ~ &__bg {
    transform: scale(110);
    /* opacity: 1; */
    /* visibility: visible; */
  }
  &__check-box:checked ~ &__nav {
    width: 110%;
    opacity: 1;
    z-index: 15;
    visibility: visible;
    /* transform: translateX(-50%); */
  }
  &__burger {
    //burder style
    position: relative;
    &,
    &::before,
    &::after {
      @include positionCenter;
      height: 2px;
      width: 3rem;
      display: inline-block;
      background-color: $color-primary-2;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      transition: all 0.2s;
    }
    &::before {
      top: 1rem;
      @include respond(TabPort) {
        top: 1.2rem;
      }
    }
    &::after {
      top: -1rem;
      @include respond(TabPort) {
        top: -1.2rem;
      }
    }
  }
  //
  &__btn:hover &__burger::before {
    top: 1.2rem;
  }
  &__btn:hover &__burger::after {
    top: -1.2rem;
  }
  &__check-box:checked + &__btn &__burger {
    background-color: transparent;
    position: absolute;
    left: 2.1rem;
  }
  &__check-box:checked + &__btn &__burger::before {
    @include positionCenter;
    transform: rotate(135deg);
    // transform-origin: from the position that you want to transform
  }
  &__check-box:checked + &__btn &__burger::after {
    @include positionCenter;
    transform: rotate(-135deg);
  }
}
</style>
