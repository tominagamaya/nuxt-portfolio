<template>
  <div class="work-image">
    <p :id="triggerId">{{ name }}</p>
    <slot></slot>
    <div class="work-image-content">
      <a :id="imageId" :href="url" target="_blank">
        <img v-if="getImage()" :src="getImage()" />
      </a>
    </div>
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

    @media (max-width: 480px) {
      font-size: 15px;
      font-weight: bold;
    }
  }

  .work-image-content {
    width: 240px;
    height: 150px;
    overflow: hidden;
    border-radius: 4px;
  }

  img {
    width: 240px;
    height: 150px;
    box-shadow: 12px 20px 25px 0 rgba(0, 0, 0, 0.15);
    border: 0;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.05, 1.05);
      opacity: 0.7;
    }
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
