<template>
  <div class="work-image">
    <p :id="triggerId">{{ name }}</p>
    <slot></slot>
    <a :id="imageId" :href="url" target="_blank">
      <img :src="getImage()" />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    triggerId: {
      required: false,
      default: '',
      type: String
    },
    imageId: {
      required: false,
      default: '',
      type: String
    },
    name: {
      required: false,
      default: '',
      type: String
    },
    url: {
      required: false,
      default: '',
      type: String
    },
    file: {
      required: false,
      default: '',
      type: String
    }
  },
  methods: {
    getImage() {
      return this.file ? require(`~/assets/images/${this.file}`) : ''
    }
  }
}
</script>
<style scoped lang="scss">
.work-image {
  width: 350px;
  margin-bottom: 10px;
  display: inline-block;

  p {
    padding-bottom: 15px;
  }

  img {
    width: 240px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 0;
  }

  iframe {
    display: block;
    width: 240px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }

  .image-link {
    font-size: 13px;
    padding-left: 3px;
  }

  #image1,
  #image2,
  #image3 {
    opacity: 0;
  }
}
</style>
