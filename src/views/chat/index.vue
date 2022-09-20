<template>
  <div class="container">
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(../../../src/assets/img/background_chat.jpg) no-repeat fixed center center;
  background-size: cover;
  z-index: -1;
}
</style>