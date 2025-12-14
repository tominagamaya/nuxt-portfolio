<template>
  <div class="page-about">
    <section>
      <h2 class="section-title effect-fade-side">About Me</h2>
      <balloon></balloon>
      <article-body class="about">
        <about-content>
          <p class="about-title">
            2011年4月-2015年9月&nbsp;&nbsp;独立系SI企業でシステムエンジニアとして働く
          </p>
          <p>
            官公庁等のシステム開発や運用保守を担当。最後の1年間ではサブリーダーも経験する。<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2015年12月-2017年12月&nbsp;&nbsp;通信系事業会社のサーバーサイドエンジニアとして働く
          </p>
          <p>
            前職だとマネージメントが求められるため、技術スキルを高めていきたい想いが強くなり転職。<br />
            SESとしてユーザー向け事業会社のバッチ処理(サーバーサイド)の開発を担当。<br />
            アジャイルで高速かつ効率的な開発をすることができ、プログラミングの楽しさを実感する。<br />
            使用技術は Java8（Springフレームワーク）, OracleDB<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            社外勉強会で出会ったスゴイ登壇者の影響で、技術ブログを書き始める
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2018年3月-2019年6月&nbsp;&nbsp;AI系事業会社のWebアプリケーションエンジニアとして働く
          </p>
          <p>
            SESだとサービスに深く関わることができなかったため、事業会社の社員として働きたい想いが強くなり転職。<br />
            自社開発と受託開発を担当し、クラウドインフラからサーバーサイド、フロントエンドまで幅広く経験。<br />
            ユーザー体験を変えることができるフロントエンドの開発に強く興味を持つようになる。<br />
            使用技術は Python（Flask）, JavaScript（Vue.js）, HTML, CSS, GCP<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2019年10月-2019年12月&nbsp;&nbsp;Web制作会社でフロントエンジニアとして働く
          </p>
          <p>
            UIといったフロントエンドの開発スキルを高めるべく転職。
            契約社員として3ヶ月のみWebサイトの改修等を経験。<br />
            使用技術は HTML, CSS(Scss), JavaScript（Vue.js）, AWS<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2020年1月-2020年12月&nbsp;&nbsp;人材系事業会社のUXエンジニアとして働く
          </p>
          <p>
            今まで経験したサーバーサイドからフロントエンドのスキルを活かし、
            求人サービスのサイトの使い心地といったユーザー体験の改善を担当。A/Bテスト等も実施。<br />
            使用技術は HTML, CSS, JavaScript（jQuery）, AWS<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2021年1月-2022年9月&nbsp;&nbsp;外資系SI企業でフロントエンドエンジニアとして働く
          </p>
          <p>
            より良いUI/UXの提案や折衝スキルを伸ばしたく、外資系SI企業へ転職。
            金融系Webサービスの刷新プロジェクトに参画し、新規画面開発を行いクライアントとの折衝も担当。<br />
            使用技術は Angular, Azure<br />
          </p>
        </about-content>
        <about-content>
          <p class="about-title">
            2022年10月-現在&nbsp;&nbsp;大手SES企業に出戻り、フロントエンドエンジニアとして働く
          </p>
          <p>
            前職で負荷が高く悩んでいたときに相談にのっていただき、出戻りさせて頂き再度大手SES企業に就職。
            フロントエンドエンジニアとして金融系Webサービスの刷新プロジェクトに参画し、設計から実装、テスト工程の不具合修正まで担当。
            使用技術は HTML, CSS, JavaScript（React）, AWS<br />
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
          <li>Javascript（Vue.js, React, Nuxt.js）</li>
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
  padding-top: 5px;
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
    padding-top: 0;
    margin-top: -2px;
  }
}
</style>
