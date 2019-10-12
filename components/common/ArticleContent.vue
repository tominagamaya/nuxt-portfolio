<template>
  <div class="article-content">
    <div>
      <p>{{ name }}</p>
      <div class="image-content">
        <a :href="url" target="_blank">
          <img
            :src="getImage()"
            @mouseover="stopImage()"
            @mouseleave="startImage()"
          />
        </a>
      </div>
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
    },
    parentRefs: {
      type: Object,
      required: false,
      default: null
    }
  },
  methods: {
    getImage() {
      return require(`~/assets/images/${this.file}`)
    },
    stopImage() {
      this.parentRefs.autoplay.stop()
    },
    startImage() {
      this.parentRefs.autoplay.start()
    }
  }
}
</script>
<style scoped lang="scss">
.article-content {
  height: 200px;
  display: inline-block;
  padding-left: 55px;
  padding-bottom: 30px;

  p {
    padding-bottom: 15px;
  }

  .image-content {
    height: 150px;
    width: 240px;
    overflow: hidden;
    border-radius: 4px;
  }

  img {
    height: 150px;
    width: 240px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border: 0;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.05, 1.05);
      opacity: 0.7;
    }
  }
}
@media screen and (max-width: 1220px) {
  .article-content {
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
