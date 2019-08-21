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
  color: #3a3a3a;
}
.header-inner {
  height: 60px;

  li {
    display: inline-block;
    justify-content: space-between;
    margin: 15px 0 0 40px;
  }
}
</style>
