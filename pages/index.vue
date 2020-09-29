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
