<template>
  <div class="page-index">
    <div class="title-opening">
      <logo id="title"></logo>
    </div>
    <div class="effect-delay-display">
      <section>
        <h2 class="section-title effect-delay-fade-side">Maya Tominaga</h2>
        <article-body class="profile">
          <image-profile></image-profile>
          <p>
            独立系SIerから事業会社のWebエンジニアになりました。<br />
            サーバーサイド、フロントエンドまで幅広く経験。<br />
            ユーザー目線にたったデザインを含むフロントエンド開発が得意。<br />
            技術ブログを書くことが好きで、週1の頻度で更新しています。<br />
            テニスが好きでスクールに通っています。<br />
            継続的な努力と想いやりを大切にしています。<br />
          </p>
        </article-body>
      </section>
      <section>
        <h2 id="work-trigger" class="section-title effect-delay-fade-side">
          Works
        </h2>
        <article-body class="works">
          <article-content
            id="work-image"
            name="技術ブログ"
            url="https://mmtomitomimm.blogspot.com/"
            file="blog.png"
          >
          </article-content>
          <article-content
            id="work-image"
            name="ユーザー管理アプリ"
            url="https://user-setting-app-20190502.herokuapp.com/"
            file="manage-app.png"
          >
          </article-content>
          <article-content
            id="work-image"
            name="ブログアプリ"
            url="https://calm-beach-62772.herokuapp.com/"
            file="blog-app.png"
          >
          </article-content>
        </article-body>
      </section>
    </div>
  </div>
</template>
<script>
import { TweenMax, TimelineMax } from 'gsap'
import ArticleBody from '~/components/common/ArticleBody'
import ArticleContent from '~/components/common/ArticleContent'
import ImageProfile from '~/components/ImageProfile'
import Logo from '~/components/Logo'
export default {
  components: {
    ArticleBody,
    ArticleContent,
    ImageProfile,
    Logo
  },
  mounted() {
    const timeline = new TimelineMax()
    timeline
      .add([
        TweenMax.to('#title', 0.1, {
          css: {
            opacity: '0'
          }
        })
      ])
      .to('#title', 1, {
        css: {
          opacity: '1'
        }
      })
      .to('#title', 2, {
        css: {
          opacity: '1'
        }
      })
      .to('#title', 2.5, {
        css: {
          opacity: '0',
          scale: '1.5'
        }
      })

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
@keyframes drawIn {
  0% {
    stroke: transparent;
    stroke-dashoffset: 10000;
  }
  75% {
    stroke: white;
  }
}

svg {
  position: absolute;
  top: 0;
  right: 50vw;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 75%;
}

.profile {
  p {
    line-height: 45px;
  }
}

.works {
  padding: 50px 30px 50px 80px;
}

#work-image {
  opacity: 0;
}

@media screen and (max-width: 1140px) {
  .article-body {
    text-align: center;
    padding: 320px 30px 30px 30px;

    p {
      font-size: 15px;
      line-height: 30px;
    }
  }
  .works {
    padding: 50px 30px 50px 30px;
  }
}
</style>
