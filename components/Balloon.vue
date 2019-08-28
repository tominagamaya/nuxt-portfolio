<template>
  <img class="img-balloon shake" src="~/assets/images/balloon.svg" />
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.img-balloon {
  position: absolute;
  top: 150px;
  right: 100px;
  width: 200px;
}
.shake {
  animation: animationShake 4s infinite;
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
</style>
