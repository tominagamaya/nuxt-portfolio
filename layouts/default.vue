<template>
  <div>
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
