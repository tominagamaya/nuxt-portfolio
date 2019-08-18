<template>
  <header class="header">
    <ul class="header-inner">
      <li>top</li>
      <li>profile</li>
      <li>works</li>
    </ul>
  </header>
</template>
<style scoped lang="scss">
@import '~assets/scss/variables';

.header {
  position: absolute;
  top: 30px;
  right: 100px;
  width: 350px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2.5px;
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
