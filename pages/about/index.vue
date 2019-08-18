<template>
  <div class="page-about">
    <section class="about">
      <h2>はじめまして</h2>
      <div class="article-body">
        <p>Maya Tominaga</p>
        <p>SIerからWeb系のエンジニア</p>
        <p>週1で技術ブログを執筆</p>
        <p>Java / Python / Vue.js / GCP</p>
      </div>
    </section>
    <section class="history">
      <h2>経歴</h2>
      <div class="article-body">
        <p>新卒から約4年間はSIerとして官公庁等のシステム開発を担当</p>
        <p>常駐派遣としてWeb系の企業に2年間ほど勤務</p>
        <p>アナリティクス事業会社でAIを組み込んだWebアプリの開発を担当</p>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.about,
.history {
  h2 {
    display: flex;
    align-items: center;
    margin: 50px 0 30px;
    font-size: 30px;

    &::after {
      content: '';
      display: block;
      flex: 1;
      height: 1px;
      margin-left: 10px;
      background-color: $color-black;
    }
  }
}
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
