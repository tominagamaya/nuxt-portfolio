<template>
  <div>
    <div class="circle"></div>
    <div class="about-content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about-content {
  display: inline-block;
  padding-bottom: 60px;
  width: 88%;

  p + p {
    margin-top: 20px;
    line-height: 2;
  }
}
.circle {
  display: inline-block;
  vertical-align: top;
  width: 30px;
  height: 30px;
  background: $color-dark-pink;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  -o-border-radius: 30px;
  -ms-border-radius: 30px;
  border-radius: 30px;
}

@media screen and (max-width: 1220px) {
  .article-body p + p {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .about-content {
    width: 90%;

    p + p {
      line-height: 1.8;
    }
  }
  .circle {
    width: 18px;
    height: 18px;
  }
}
</style>
