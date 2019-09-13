<template>
  <div class="article-body">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.article-body {
  min-height: 300px;
  background-color: $color-white;
  box-shadow: 1px 27px 39px 0 rgba(0, 0, 0, 0.07);
  padding: 50px 90px;

  h3 {
    font-size: 20px;
    margin: 30px 0 20px;
  }

  p {
    line-height: 2;

    + p {
      margin-top: 20px;
    }
  }

  img {
    max-width: 100%;
  }

  ul {
    padding-left: 10px;
  }

  li {
    list-style-type: square;
    line-height: 35px;
  }
}
@media screen and (max-width: 1220px) {
  .article-body {
    padding: 50px 30px;

    p {
      font-size: 15px;
      line-height: 30px;
    }
  }
}
</style>
