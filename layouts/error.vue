<template>
  <div class="layout-error">
    <section>
      <h2 class="section-title">404</h2>
      <div class="article-body">
        <h3>ページをひらけません</h3>
        <p>アクセスされたページは存在しないか、すでに削除されています。</p>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.article-body {
  h3 {
    font-size: 20px;
    margin: 30px 0 20px;
  }

  p {
    line-height: 1.75;

    + p {
      margin-top: 20px;
    }

    a {
      color: $color-blue;
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
