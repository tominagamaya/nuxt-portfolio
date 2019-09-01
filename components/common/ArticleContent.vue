<template>
  <div class="article-content">
    <div>
      <p>{{ name }}</p>
      <a :href="url" target="_blank">
        <img :src="getImage()" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    },
    file: {
      required: true,
      type: String
    }
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
  padding-right: 11%;

  p {
    padding-bottom: 15px;
  }

  img {
    height: 150px;
    width: 240px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
  }
}
@media screen and (max-width: 1140px) {
  .article-content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
