<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">About Me</h2>
      <balloon></balloon>
      <article-body class="about">
        <p>
          独立系SIer（4年）からユーザー向け事業会社でSESとして勤務（2年）を経て、
          事業会社のWebエンジニア になりました。<br />
          Webアプリケーションの開発をしていて、インフラからサーバーサイド、フロントエンドまで幅広く担当しました。<br />
          サーバーサイドの実務経験が長いですがフロントエンド開発のほうが好きです。<br />
          得意な言語は Javascript, Python, Java です。<br />
        </p>
        <p>
          技術ブログを書くのが好きで週1の頻度で更新しています。<br />
          テニスが好きでスクールに通っています。<br />
        </p>
        <p>
          学生時代はプログラミングと無縁でしたが、
          数学が好きだったのでIT企業に就職しました。<br />
          アジャイル開発による自己組織化されたチームを経験したことで
          エンジニアの楽しさを実感し、生涯コードを書き続ける
          エンジニアとして生きていく覚悟をしました。
        </p>
        <p>
          好奇心旺盛で思い立ったらすぐに行動します。<br />
          自分の知らなかったことについて話を聞いたり、
          新しいことを学ぶのが好きです。
        </p>
      </article-body>
    </section>
    <section>
      <h2 class="section-title effect-fade-side">Skils</h2>
      <article-body class="skils">
        <p class="article-detail">実務経験がある技術です。</p>
        <ul>
          <li>Java8（Spring）</li>
          <li>Python2, Python3（Flask）</li>
          <li>Javascript（Vue.js）</li>
          <li>HTML, CSS</li>
          <li>MySQL, Oracle</li>
          <li>Git</li>
          <li>GCP（App Engine / Compute Engine / Cloud SQL / Stackdriver）</li>
          <li>Docker</li>
          <li>DDD（設計思想）</li>
        </ul>
      </article-body>
    </section>
  </div>
</template>
<script>
import ArticleBody from '~/components/common/ArticleBody'
import Balloon from '~/components/Balloon'
export default {
  components: {
    ArticleBody,
    Balloon
  }
}
</script>
<style scoped lang="scss">
.about,
.skils {
  padding: 50px 90px;
}
.article-detail {
  padding-bottom: 15px;
}
</style>
