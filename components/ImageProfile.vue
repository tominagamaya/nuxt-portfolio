<template>
  <div class="about-image effect-delay-fade-top">
    <img src="~/assets/images/me.png" alt="Maya Tominaga" />
  </div>
</template>
<style scoped lang="scss">
.about-image {
  background-color: $color-light-pink;
  opacity: 1;
  position: absolute;
  display: block;
  right: 160px;
  top: 140px;
  border-radius: 4px;
  border: 0;
  box-shadow: 1px 27px 39px 0 rgba(0, 0, 0, 0.07);
  width: 350px;
}

@media screen and (max-width: 1220px) {
  .about-image {
    position: absolute;
    top: 170px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    width: 350px;
    height: 270px;
  }

  @media (max-width: 480px) {
    .about-image {
      width: 290px;
      height: 240px;
      margin: 16px 15px 0 15px;
    }
  }
}
</style>
