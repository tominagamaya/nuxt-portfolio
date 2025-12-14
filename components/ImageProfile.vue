<template>
  <div class="about-image effect-delay-fade-top">
    <img src="~/assets/images/me.jpg" alt="Maya Tominaga" />
  </div>
</template>
<style scoped lang="scss">
.about-image {
  background-color: $color-light-pink;
  opacity: 1;
  position: absolute;
  display: block;
  right: 160px;
  top: 225px;
  border-radius: 4px;
  border: 0;
  box-shadow: 1px 27px 39px 0 rgba(0, 0, 0, 0.07);
  width: 150px;
}

@media screen and (max-width: 1220px) {
  /* On smaller screens, make the profile image part of the flow so it doesn't overlap text */
  .about-image {
    position: static; /* remove absolute positioning */
    margin: 0 auto;
    width: 90%;
    max-width: 350px;
    height: auto;
    display: block;
    /* Ensure there's spacing between the image and following text */
    margin-bottom: 20px;
  }

  .about-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    .about-image {
      max-width: 320px;
      margin: 16px 15px 0 15px;
    }
  }
}
</style>
