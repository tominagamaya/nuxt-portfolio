<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">Works</h2>
      <article-body class="works">
        <div class="article-content">
          <p class="article-detail">
            日常的に更新しているブログや、作成したアプリです。<br />
            画像をクリックするとリンク先に移動します。
          </p>
          <div class="article-image">
            <p id="trigger1">技術ブログ</p>
            <a href="https://mmtomitomimm.blogspot.com/" target="_blank">
              <img src="~/assets/images/blog.png" />
            </a>
          </div>
          <div class="article-about">
            <p>
              2017年11月から始めて、週1の頻度で更新しています。
              主に試した技術や読んだ書籍、参加したイベントなど
              について書き残しています。
            </p>
          </div>
        </div>
        <div class="article-content">
          <div class="article-image">
            <p id="trigger2">ユーザー管理アプリ</p>
            <a
              id="image1"
              href="https://user-setting-app-20190502.herokuapp.com/"
              target="_blank"
            >
              <img src="~/assets/images/manage-app.png" />
            </a>
          </div>
          <div class="article-about">
            <div>
              <p>
                レイアウトから実装まで全て自分で考えて作成しました。
                Vue.jsを使った実装に注力したためDBは未実装なので、
                ユーザーの登録/ログイン/問い合わせの送信は
                実際にはできません。（画面を更新すると元に戻ります）
              </p>
            </div>
            <ul class="detail">
              <li>フロントエンド：Vue.js（Vue CLI 3）</li>
              <li>サーバーサイド：Python3（Flask）</li>
              <li>DB：未実装（サーバーサイドでスタブデータを返却）</li>
            </ul>
          </div>
        </div>
        <div class="article-content">
          <div class="article-image">
            <p id="trigger3">ブログアプリ</p>
            <a
              id="image2"
              href="https://calm-beach-62772.herokuapp.com/"
              target="_blank"
            >
              <img src="~/assets/images/blog-app.png" />
            </a>
          </div>
          <div class="article-about">
            <div>
              <p>
                動画を参考にしてWebアプリケーションを作成しました。
                アカウント登録後、ログインしたユーザーでブログを
                投稿、更新、削除をすることができます。
              </p>
            </div>
            <ul class="detail">
              <li>フロントエンド：Jinja2</li>
              <li>サーバーサイド：Python3（Django）</li>
              <li>DB：PostgreSQL（ローカルでは SQLite）</li>
            </ul>
          </div>
        </div>
        <div class="article-content">
          <div class="article-image">
            <p>GitHub</p>
            <iframe
              id="image3"
              title="tominagamaya - Overview"
              src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Ftominagamaya"
              frameborder="0"
              scrolling="no"
            >
            </iframe>
            <a
              class="image-link"
              href="https://github.com/tominagamaya"
              target="_blank"
            >
              github.com
            </a>
          </div>
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
        triggerElement: '#trigger1',
        triggerHook: 0.5,
        offset: 100,
        duration: 300,
        reverse: false
      })
      .setTween('#image1', {
        css: {
          opacity: '1'
        }
      })

    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#trigger2',
        triggerHook: 0.5,
        offset: 100,
        duration: 300,
        reverse: false
      })
      .setTween('#image2', {
        css: {
          opacity: '1'
        }
      })

    const scene3 = this.$scrollmagic
      .scene({
        triggerElement: '#trigger3',
        triggerHook: 0.5,
        offset: 100,
        duration: 300,
        reverse: false
      })
      .setTween('#image3', {
        css: {
          opacity: '1'
        }
      })

    this.$scrollmagic.addScene([scene1, scene2, scene3])
  }
}
</script>
<style scoped lang="scss">
.works {
  padding: 50px 30px 50px 80px;
}
.article-content {
  padding-bottom: 50px;
}
.article-image {
  height: 200px;
  width: 450px;
  margin-bottom: 10px;
  display: inline-block;

  p {
    padding-bottom: 15px;
  }

  img {
    height: 150px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
  }

  iframe {
    display: block;
    width: 83%;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }

  .image-link {
    font-size: 13px;
    padding-left: 3px;
  }

  #image1,
  #image2,
  #image3 {
    opacity: 0;
  }
}
.article-about {
  display: inline-block;
  padding-top: 35px;
  vertical-align: top;
  max-width: 55%;

  .detail {
    font-size: 14px;
    padding: 35px 0 0 25px;
    list-style-type: square;

    li {
      padding-top: 10px;
      line-height: 12px;
    }
  }
}
.article-detail {
  font-size: 14px;
  padding-bottom: 45px;
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
