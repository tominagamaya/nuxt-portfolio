<template>
  <header class="header">
    <ul class="header-inner">
      <li>
        <nuxt-link class="header-link" to="/">top</nuxt-link>
      </li>
      <li>
        <nuxt-link class="header-link" to="about">profile</nuxt-link>
      </li>
      <li>
        <nuxt-link class="header-link" to="works">works</nuxt-link>
      </li>
    </ul>
  </header>
</template>
<style scoped lang="scss">
.header {
  z-index: 1;
  position: absolute;
  top: 30px;
  right: 100px;
  width: 350px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2.5px;

  @media (max-width: 480px) {
    font-size: 15px;
    right: auto;
  }
}
.header-link {
  color: $color-dark-gray;

  &:hover {
    color: $color-gray;
  }
}
.header-inner {
  height: 60px;

  li {
    display: inline-block;
    justify-content: space-between;
    margin: 15px 0 0 40px;
    transition: all 1s ease-out;
  }

  .header-effect {
    animation-name: cssFadeIn;
    animation-iteration-count: 1;
    animation-delay: 5s;
    animation-fill-mode: backwards;
  }

  li:nth-child(1) {
    @extend .header-effect;
    animation-duration: 2s;
  }

  li:nth-child(2) {
    @extend .header-effect;
    animation-duration: 2.5s;
  }

  li:nth-child(3) {
    @extend .header-effect;
    animation-duration: 3s;
  }
}
@keyframes cssFadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0);
  }
}
</style>
