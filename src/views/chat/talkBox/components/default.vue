<template>
  <div class="container">
    <div class="defaultImg">
      <img src="@/assets/img/msgBg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;

  .defaultImg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>