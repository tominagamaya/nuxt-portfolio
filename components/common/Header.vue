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
  position: absolute;
  top: 30px;
  right: 100px;
  width: 350px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2.5px;
}
.header-link {
  color: $color-dark-gray;
}
.header-inner {
  height: 60px;

  li {
    display: inline-block;
    justify-content: space-between;
    margin: 15px 0 0 40px;
    transition: all 1s ease-out;
  }

  li:nth-child(1) {
    animation-name: cssFadeIn;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }

  li:nth-child(2) {
    animation-name: cssFadeIn;
    animation-duration: 2.5s;
    animation-iteration-count: 1;
  }

  li:nth-child(3) {
    animation-name: cssFadeIn;
    animation-duration: 3s;
    animation-iteration-count: 1;
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
