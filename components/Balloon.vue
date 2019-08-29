<template>
  <img
    id="img-balloon"
    class="img-balloon shake"
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
.shake {
  animation: animationShake 4s infinite, fade-in-top 2s 1;
}
@keyframes animationShake {
  0% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
@keyframes fade-in-top {
  from {
    opacity: 0;
    transform: translateY(-20px), rotate(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(-15deg);
  }
}
#img-balloon {
  width: 200px;
}
</style>
