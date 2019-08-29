<template>
  <div class="page-index">
    <section>
      <h2 class="section-title effect-fade-side">Maya Tominaga</h2>
      <article-body class="profile">
        <p>
          独立系SIerから事業会社のWebエンジニアになりました。
          サーバーサイド、フロントエンドまで幅広く経験。
          ユーザー目線にたったデザインを含むフロントエンド開発が得意。
          技術ブログを書くことが好きで、週1の頻度で更新しています。
          テニスが好きでスクールに通っています。
          継続的な努力と想いやりを大切にしています。
        </p>
        <div class="about-image effect-fade-top">
          <img src="~/assets/images/me.png" alt="Maya Tominaga" />
        </div>
      </article-body>
    </section>
    <section>
      <h2 id="work-trigger" class="section-title effect-fade-side">
        Works
      </h2>
      <article-body class="works">
        <div class="article-content">
          <p>技術ブログ</p>
          <a
            id="work-image"
            href="https://mmtomitomimm.blogspot.com/"
            target="_blank"
          >
            <img src="~/assets/images/blog.png" />
          </a>
        </div>
        <div class="article-content">
          <p>ユーザー管理アプリ</p>
          <a
            id="work-image"
            href="https://user-setting-app-20190502.herokuapp.com/"
            target="_blank"
          >
            <img src="~/assets/images/manage-app.png" />
          </a>
        </div>
        <div class="article-content">
          <p>ブログアプリ</p>
          <a
            id="work-image"
            href="https://calm-beach-62772.herokuapp.com/"
            target="_blank"
          >
            <img src="~/assets/images/blog-app.png" />
          </a>
        </div>
      </article-body>
    </section>
  </div>
</template>
<script>
import ArticleBody from '~/components/common/ArticleBody'
export default {
  components: {
    ArticleBody
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#work-trigger',
        triggerHook: 0.5,
        offset: 10,
        duration: 300,
        reverse: false
      })
      .setTween('#work-image', {
        css: {
          opacity: '1'
        }
      })
    // .addIndicators({ name: 'OK' })

    this.$scrollmagic.addScene(scene1)
  }
}
</script>

<style scoped lang="scss">
.profile {
  padding: 50px 400px 50px 90px;

  p {
    line-height: 45px;
  }
}

.works {
  padding: 50px 30px 50px 80px;
}

.about-image {
  background-color: $color-light-pink;
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

  #work-image {
    opacity: 0;
  }
}
</style>
