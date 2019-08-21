<template>
  <div class="article-body">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.article-body {
  min-height: 300px;
  background-color: #fff;
  box-shadow: 1px 27px 39px 0 rgba(0, 0, 0, 0.07);

  &.profile {
    padding: 50px 400px 50px 90px;
  }

  &.works {
    padding: 50px 30px 50px 80px;
  }

  h3 {
    font-size: 20px;
    margin: 30px 0 20px;
  }

  p {
    line-height: 1;

    + p {
      margin-top: 20px;
    }
  }

  ul {
    list-style: circle;
    margin-top: 20px;
    margin-left: 20px;

    li {
      &:nth-of-type(n + 2) {
        margin-top: 0.5em;
      }
    }
  }

  img {
    max-width: 100%;
  }
}
</style>