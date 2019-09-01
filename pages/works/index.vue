<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">Works</h2>
      <article-body class="works">
        <div class="work-content">
          <p class="work-detail">
            日常的に更新しているブログや、作成したアプリです。<br />
            画像をクリックするとリンク先に移動します。
          </p>
          <image-work
            trigger-id="trigger1"
            name="技術ブログ"
            url="https://mmtomitomimm.blogspot.com/"
            file="blog.png"
          >
          </image-work>
          <div class="work-about">
            <p>
              2017年11月から始めて、週1の頻度で更新しています。
              主に試した技術や読んだ書籍、参加したイベントなど
              について書き残しています。
            </p>
          </div>
        </div>
        <div class="work-content">
          <image-work
            trigger-id="trigger2"
            image-id="image1"
            name="ユーザー管理アプリ"
            url="https://user-setting-app-20190502.herokuapp.com/"
            file="manage-app.png"
          >
          </image-work>
          <div class="work-about">
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
        <div class="work-content">
          <image-work
            trigger-id="trigger3"
            image-id="image2"
            name="ブログアプリ"
            url="https://calm-beach-62772.herokuapp.com/"
            file="blog-app.png"
          >
          </image-work>
          <div class="work-about">
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
        <div class="work-content">
          <image-work url="https://github.com/tominagamaya">
            <iframe
              id="image3"
              title="tominagamaya - Overview"
              src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Ftominagamaya"
              frameborder="0"
              scrolling="no"
            >
            </iframe>
          </image-work>
        </div>
      </article-body>
    </section>
  </div>
</template>
<script>
import ArticleBody from '~/components/common/ArticleBody'
import ImageWork from '~/components/ImageWork'
export default {
  components: {
    ArticleBody,
    ImageWork
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

.work-content {
  padding-bottom: 50px;
}

.work-about {
  display: inline-block;
  padding-top: 35px;
  vertical-align: top;
  max-width: 700px;

  .detail {
    font-size: 14px;
    padding: 35px 0 0 25px;
    list-style-type: square;

    li {
      padding-top: 10px;
      line-height: 14px;
    }
  }
}

.work-detail {
  font-size: 14px;
  padding-bottom: 45px;
}

@media screen and (max-width: 700px) {
  .work-about p {
    line-height: 30px;
  }
}
</style>
