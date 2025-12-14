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
          <p class="profile-text">
            独立系SIから大手SES企業を経て、事業会社のWebエンジニアになりました。事業会社ではサーバーサイドとフロントエンドどちらも開発を担当していましたが、よりフロントエンド技術と折衝スキルを高めたく外資系SIでフロントエンドエンジニアとして働いた後に前職の大手SES企業に出戻らせて頂きフロントエンド開発をしています。
          </p>
          <p class="profile-text">
            サーバーサイド、フロントエンドまで幅広く経験しています。ユーザー目線に立ったフロントエンド開発が得意で、要望を整理して実現する方法を考えるのも好きです。
          </p>
          <p class="profile-text">
            直近で得意な技術は React, Nuxt.js です。
            昔は技術ブログを書くことが好きで、週1の頻度で更新していました。
          </p>
        </article-body>
      </section>
      <section>
        <h2 class="section-title effect-delay-fade-side">Skills</h2>
        <article-body class="profile">
          <ul class="skills">
            <li>Java（Spring）</li>
            <li>Python（Flask）</li>
            <li>JavaScript（Vue.js）</li>
            <li>HTML, CSS</li>
            <li>MySQL, Oracle</li>
            <li>Git</li>
            <li>
              GCP（App Engine / Compute Engine / Cloud SQL / Stackdriver）
            </li>
            <li>Docker</li>
            <li>DDD（設計思想）</li>
          </ul>
        </article-body>
      </section>
      <section>
        <h2 id="work-trigger" class="section-title effect-delay-fade-side">
          Works
        </h2>
        <article-body class="works">
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide>
              <article-content
                id="work-image"
                :parent-refs="parentRefs"
                name="技術ブログ"
                url="https://mmtomitomimm.blogspot.com/"
                file="blog.png"
              >
              </article-content>
            </swiper-slide>
            <swiper-slide>
              <article-content
                id="work-image"
                :parent-refs="parentRefs"
                name="ユーザー管理アプリ"
                url="https://user-setting-app-20190502.herokuapp.com/"
                file="manage-app.png"
              >
              </article-content>
            </swiper-slide>
            <swiper-slide>
              <article-content
                id="work-image"
                :parent-refs="parentRefs"
                name="ブログアプリ"
                url="https://calm-beach-62772.herokuapp.com/"
                file="blog-app.png"
              >
              </article-content>
            </swiper-slide>
            <div slot="button-prev" class="swiper-button-prev"></div>
            <div slot="button-next" class="swiper-button-next"></div>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
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
  data() {
    return {
      parentRefs: null,
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 5000
        },
        pagenation: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1430: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          950: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  mounted() {
    this.parentRefs = this.$refs.mySwiper.swiper

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
  .profile-text {
    /* Paragraph spacing and readable line-height */
    line-height: 1.9;
    margin: 0 0 14px 0;
    font-size: 16px;
    max-width: 700px;
  }

  /* Skills list styling */
  .skills {
    list-style: none;
    padding: 0;
    margin: 0;
    /* Stack items vertically (one per line) */
    display: block;

    li {
      display: block;
      padding: 6px 0;
      /* Slightly narrower spacing per user request */
      line-height: 1.2;
      margin: 0 0 10px 0;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.03);
      font-size: 16px;
    }
  }
}

.works {
  padding: 50px 30px 50px 80px;
}

#work-image {
  opacity: 0;
}

.swiper-button-prev {
  background-size: 15px 15px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23C0C0C0'%2F%3E%3C%2Fsvg%3E");
}

.swiper-button-next {
  background-size: 15px 15px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23C0C0C0'%2F%3E%3C%2Fsvg%3E");
}

@media screen and (max-width: 1220px) {
  .article-body {
    text-align: center;
    /* Removed large top padding originally used to accommodate absolutely positioned image */
    padding: 30px 30px;

    p {
      font-size: 15px;
      /* Use a unitless line-height for better scalability */
      line-height: 1.4;
    }
    .skills {
      /* Center text on narrow screens while keeping vertical stacking */
      text-align: center;
      li {
        font-size: 14px;
        line-height: 1.6;
      }
    }
    /* Ensure profile-specific paragraphs keep the same line-height on narrow screens */
    .profile-text {
      line-height: 1.9;
      font-size: 15px;
      max-width: unset;
    }
  }
  .works {
    padding: 50px 30px 50px 30px;
  }
}
</style>
