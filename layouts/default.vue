<template>
  <div id="main">
    <Header />
    <main class="contents">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/common/Header'
import Footer from '~/components/common/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped lang="scss">
.contents {
  max-width: 90%;
  padding: 10px 40px 80px 40px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px 0 80px;
  }
}
</style>
