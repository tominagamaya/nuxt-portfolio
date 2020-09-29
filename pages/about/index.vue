<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">About Me</h2>
      <balloon></balloon>
      <article-body class="about">
        <about-content>
          <p class="about-title">
            2009年4月-2011年3月&nbsp;&nbsp;食品経済学科を専攻
          </p>
          <p>
            将来は食品関係の会社で商品開発をしたいと思うようになるが、就職活動で第一志望だった食品業界の選考に全滅する。<br />
            数学が好きだったためIT業界の選考を受け内定をもらう。<br />
            練習を週4で行う真面目なテニスサークルに入り、合宿などを通じてチームワークの大切さを学ぶ。<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2011年4月-2015年9月&nbsp;&nbsp;独立系SI企業でシステムエンジニアとして働く
          </p>
          <p>
            官公庁等のシステム開発や運用保守を担当。最後の1年間ではサブリーダーも経験する。<br />
            社会の大変さを知ったせいか、苦味のあるビールが好きになる。
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2015年12月-2017年12月&nbsp;&nbsp;事業会社のサーバーサイドエンジニアとして働く
          </p>
          <p>
            前職だとマネージメントが求められるため、プログラミングをしていきたい想いが強くなり転職。<br />
            SESとしてユーザー向け事業会社のサーバーサイド開発を担当。<br />
            アジャイルで無駄のない開発をすることができ、プログラミングの楽しさを実感する。<br />
            使用技術は Java8（Springフレームワーク）, MySQL<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            社外勉強会で出会ったスゴイ登壇者の影響で、技術ブログを書き始める
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2018年3月-2019年6月&nbsp;&nbsp;事業会社のWebアプリケーションエンジニアとして働く
          </p>
          <p>
            SESだとサービスに深く関われなかったり情報の共有が少なかったので、事業会社の社員として働きたい想いが強くなり転職。<br />
            自社開発と受託開発を担当し、クラウドインフラからサーバーサイド、フロントエンドまで幅広く経験。<br />
            ユーザーの気持ちや体験を変えることができるフロントエンドの開発に強く興味を持つようになる。<br />
            使用技術は Python（Flask）, JavaScript（Vue.js）, GCP<br />
          </p>
        </about-content>
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
import AboutContent from '~/components/common/AboutContent'
import Balloon from '~/components/Balloon'
export default {
  components: {
    ArticleBody,
    AboutContent,
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
.about-title {
  font-size: 18px;
  font-weight: bold;
}

@media screen and (max-width: 1140px) {
  .about,
  .skils {
    padding: 50px 30px;
  }
}
@media (max-width: 480px) {
  .about,
  .skils {
    padding: 20px;
  }
  .article-body.skils ul {
    font-size: 13px;
  }
  .about-title {
    line-height: 23px;
  }
}
</style>
