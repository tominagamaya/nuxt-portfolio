<template>
  <div class="about-image effect-fade-top">
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
  width: 290px;
}

@media screen and (max-width: 1030px) {
  .about-image {
    position: relative;
    left: 0;
    top: 0;
    margin-bottom: 50px;
  }
}
</style>
