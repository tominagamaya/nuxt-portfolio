<template>
  <img
    class="img-balloon"
    src="~/assets/images/balloon.svg"
    :style="{
      transform: `translate(${x + dx}px, ${y + dy}px) 
      scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`,
      transition: `transform ${duration}ms ${easing}`
    }"
    @click="up(50)"
  />
</template>
<script>
export default {
  data() {
    return {
      dx: 0,
      dy: 0,
      duration: 1000,
      easing: 'ease'
    }
  },
  props: {
    x: { type: Number, default: -150 },
    y: { type: Number, default: 150 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 }
  },
  methods: {
    up(height) {
      this.dy -= height
      this.easing = 'ease-out'
      window.setTimeout(() => {
        this.dy = 0
        this.easing = 'ease-in'
      }, this.duration)
    }
  }
}
</script>
<style scoped lang="scss">
.img-balloon {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  will-change: transform;
}
.shake {
  animation: animationShake 1s steps(6) infinite;
}
@keyframes animationShake {
  from {
  }
  to {
    rotate: -45;
  }
}
</style>
