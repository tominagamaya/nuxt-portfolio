<template>
  <div class="page-index">
    <section class="about">
      <h2>Maya Tominaga</h2>
      <div class="article-body profile">
        <p>独立系SIerから事業会社のWebエンジニアになりました。</p>
        <p>インフラ、サーバーサイド、フロントエンドまで幅広く経験。</p>
        <p>ユーザー目線にたったフロントエンド開発が得意。</p>
        <p>テニスが好きでスクールに通っています。</p>
        <p>技術ブログを書くのが好きで週1の頻度で更新しています。</p>
        <div class="about-image">
          <img src="~/assets/images/monchhichi.png" alt="Maya Tominaga" />
        </div>
      </div>
    </section>
    <section class="works">
      <h2>Works</h2>
      <div class="article-body works">
        <div class="article-content">
          <p>技術ブログ</p>
          <img src="~/assets/images/blog.png" />
        </div>
        <div class="article-content">
          <p>ユーザー管理アプリ</p>
          <img src="~/assets/images/manage-app.png" />
        </div>
        <div class="article-content">
          <p>ブログアプリ</p>
          <img src="~/assets/images/blog-app.png" />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import '~assets/scss/variables';

.about,
.works {
  h2 {
    display: flex;
    align-items: center;
    margin: 100px 0 30px;
    font-size: 33px;
    letter-spacing: 2px;
    font-weight: 400;
    color: #3a3a3a;
  }
}

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

.about-image {
  background-color: #fbe6db;
  opacity: 1;
  position: absolute;
  display: block;
  right: 160px;
  top: 140px;
  border-radius: 4px;
  border: 0;
  box-shadow: 1px 27px 39px 0 rgba(0, 0, 0, 0.07);
  max-width: 100%;
}
.article-content {
  height: 200px;
  display: inline-block;
  padding-right: 50px;

  p {
    padding-bottom: 15px;
  }

  img {
    height: 150px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
  }
}
</style>
