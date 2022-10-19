<template lang="pug">
footer.footer 
  .footer__logo
    img(src="../assets/brand-logo.svg" alt="logo")
  .footer__link 
    p Privacy Policy
    p Brand Site
  p.footer__Copyright &copy; original COSME JAPAN CO.,LTD

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 4rem;
  margin-top: 20rem;
  padding: 4rem 0;
  /* @include respond(TabPort) {
    justify-content: space-between;

    margin-top: 0;
  } */
  @include respond(TabPort) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 6rem;
    margin-left: 2.4rem;
    margin-right: 0;
    width: 80%;
    align-items: flex-start;
  }
  &__link {
    display: flex;
    gap: 5rem;
    margin-right: 30rem;
    @include respond(Phone) {
      margin-right: 0rem;
      margin-bottom: 7rem;
    }
    p {
      @include font-body-2;
      color: $color-gray-1;
    }
    &::before {
      @include line("gray");
      top: 50%;
      left: 50%;
    }
  }
  &__logo {
    margin-right: 18rem;
    background: white;
    img {
      mix-blend-mode: difference;
      &::selection {
        background: transparent;
      }
    }
    @include respond(Phone) {
      margin-right: 0rem;
    }
  }
  &__Copyright {
    color: $color-gray-1;
    @include font-body-2;
    @include respond(Phone) {
      margin-bottom: 5rem;
    }
  }
}
</style>
