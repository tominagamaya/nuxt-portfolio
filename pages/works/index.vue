<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">Works</h2>
      <div class="article-body works">
        <div class="article-content">
          <p class="article-detail">
            日常的に更新しているブログや、作成したアプリです。<br />
            画像をクリックするとリンク先に移動します。
          </p>
          <div class="article-image">
            <p>技術ブログ</p>
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
            <p>ユーザー管理アプリ</p>
            <a
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
            <p>ブログアプリ</p>
            <a href="https://calm-beach-62772.herokuapp.com/" target="_blank">
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
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.article-body {
  min-height: 300px;
  background-color: #fff;
  box-shadow: 1px 27px 39px 0 rgba(0, 0, 0, 0.07);

  &.works {
    padding: 50px 30px 50px 80px;
  }

  h3 {
    font-size: 20px;
    margin: 30px 0 20px;
  }

  p {
    line-height: 2;

    + p {
      margin-top: 20px;
    }
  }
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
