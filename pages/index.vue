<template>
  <div class="page-index">
    <section>
      <h2 class="section-title">Maya Tominaga</h2>
      <div class="article-body profile">
        <p>独立系SIerから事業会社のWebエンジニアになりました。</p>
        <p>サーバーサイド、フロントエンドまで幅広く経験。</p>
        <p>ユーザー目線にたったデザインを含むフロントエンド開発が得意。</p>
        <p>技術ブログを書くことが好きで、週1の頻度で更新しています。</p>
        <p>テニスが好きでスクールに通っています。</p>
        <p>継続的な努力と想いやりを大切にしています。</p>
        <div class="about-image">
          <img src="~/assets/images/me.png" alt="Maya Tominaga" />
        </div>
      </div>
    </section>
    <section>
      <h2 class="section-title">Works</h2>
      <div class="article-body works">
        <div class="article-content">
          <p>技術ブログ</p>
          <a href="https://mmtomitomimm.blogspot.com/" target="_blank">
            <img src="~/assets/images/blog.png" />
          </a>
        </div>
        <div class="article-content">
          <p>ユーザー管理アプリ</p>
          <a
            href="https://user-setting-app-20190502.herokuapp.com/"
            target="_blank"
          >
            <img src="~/assets/images/manage-app.png" />
          </a>
        </div>
        <div class="article-content">
          <p>ブログアプリ</p>
          <a href="https://calm-beach-62772.herokuapp.com/" target="_blank">
            <img src="~/assets/images/blog-app.png" />
          </a>
        </div>
      </div>
    </section>
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
  max-width: 20%;
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
