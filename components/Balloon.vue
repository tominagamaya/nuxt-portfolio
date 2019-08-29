<template>
  <img
    id="img-balloon"
    class="img-balloon effect-shake"
    src="~/assets/images/balloon.svg"
  />
</template>
<script>
export default {
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#main',
        triggerHook: 0,
        offset: 0,
        duration: document.body.clientHeight
      })
      .setPin('#img-balloon')
      .setTween('#img-balloon', {
        css: {
          width: '80px'
        }
      })

    this.$scrollmagic.addScene(scene1)
  }
}
</script>
<style scoped lang="scss">
.img-balloon {
  position: absolute;
  top: 150px;
  right: 100px;
}

#img-balloon {
  width: 200px;
}
</style>
