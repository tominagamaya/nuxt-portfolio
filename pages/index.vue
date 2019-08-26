<template>
  <div class="page-index">
    <section>
      <h2 class="section-title effect-fade-side">Maya Tominaga</h2>
      <div class="article-body profile">
        <p>独立系SIerから事業会社のWebエンジニアになりました。</p>
        <p>サーバーサイド、フロントエンドまで幅広く経験。</p>
        <p>ユーザー目線にたったデザインを含むフロントエンド開発が得意。</p>
        <p>技術ブログを書くことが好きで、週1の頻度で更新しています。</p>
        <p>テニスが好きでスクールに通っています。</p>
        <p>継続的な努力と想いやりを大切にしています。</p>
        <div class="about-image effect-fade">
          <img src="~/assets/images/me.png" alt="Maya Tominaga" />
        </div>
      </div>
    </section>
    <section>
      <h2 id="work-trigger" class="section-title effect-fade-side">
        Works
      </h2>
      <div class="article-body works">
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
      </div>
    </section>
  </div>
</template>
<script>
export default {
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

  #work-image {
    opacity: 0;
  }
}
.effect-fade {
  animation-name: fade-in-top;
  animation-duration: 2s;
  animation-iteration-count: 1;
}

@keyframes fade-in-top {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.effect-fade-side {
  animation-name: fade-in-side;
  animation-duration: 2s;
  animation-iteration-count: 1;
}

@keyframes fade-in-side {
  from {
    opacity: 0;
    transform: translate3d(10%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
