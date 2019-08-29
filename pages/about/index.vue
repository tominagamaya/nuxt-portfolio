<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">About Me</h2>
      <balloon></balloon>
      <article-body class="about">
        <p>
          1988年9月&nbsp;&nbsp;神奈川県鎌倉市で生まれる。<br />
          2003年3月-1997年3月&nbsp;&nbsp;祖父が美術関係の仕事をしていたこともあり、幼い頃から絵を描くのが好きになる。数学と理科も好きになる。<br />
          2003年4月-2006年3月&nbsp;&nbsp;中学で数学,美術が特に好きになる。吹奏楽部に入りチームワークの大切さを学ぶ。<br />
          2006年4月-2009年3月&nbsp;&nbsp;高校で理系のコースに進む。美術も専攻するが、センスのある人を目の当たりにして自信をなくす。<br />
          2009年4月-2011年3月&nbsp;&nbsp;食品経済学科を専攻。将来は食品関係の会社で商品開発をしたいと思うようになる。テニスサークルに入る。<br />
          2009年-2010年&nbsp;&nbsp;就職活動で第一志望だった食品業界の選考に全滅する。数学が好きだったためIT業界の選考を受け内定をもらう。<br />
          <br />
          2011年4月-2015年9月&nbsp;&nbsp;独立系SI企業で官公庁等のシステム開発や運用保守を担当。サブリーダーも経験する。ビールが好きになる。<br />
          2015年12月-2017年12月&nbsp;&nbsp;SESとして事業会社のサーバーサイド開発を担当。プログラミングの楽しさを実感する。<br />
          2018年3月-2019年6月&nbsp;&nbsp;事業会社のWebアプリケーションエンジニアとしてサーバーサイドからフロントエンドまで担当する。<br />
          <br />
          <br />
          <br />
          Webアプリケーションの開発を担当し、クラウドインフラからサーバーサイド、フロントエンドまで幅広く経験しました。<br />
          サーバーサイドの実務経験が長いですが、ユーザーの気持ちを変えることができるフロントエンド開発のほうが好きです。<br />
          得意な言語は Javascript, Python, Java です。<br />
        </p>
        <p>
          技術ブログを書くのが好きで週1の頻度で更新しています。<br />
          テニスが好きで週1でスクールに通っています。<br />
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
