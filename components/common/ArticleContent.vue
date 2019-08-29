<template>
  <div class="article-content">
    <p>{{ name }}</p>
    <a :href="url" target="_blank">
      <img :src="getImage()" />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    url: String,
    file: String
  },
  methods: {
    getImage() {
      return require(`~/assets/images/${this.file}`)
    }
  }
}
</script>
<style scoped lang="scss">
.article-content {
  height: 200px;
  display: inline-block;
  padding-right: 50px;

  p {
    padding-bottom: 15px;
  }

  img {
    height: 150px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
  }
}
</style>
