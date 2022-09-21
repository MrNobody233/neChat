<template>
  <div class="container">
    <div class="myAvatar">
      <div class="imgBox">
        <img :src="avatar" alt="">
      </div>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "myAvatar",
  props: {
    name: {
      type: String,
      default: '木子日天'
    },
    avatar: {
      type: String,
      default: 'https://avatars.githubusercontent.com/u/96650292?v=4'
    }
  },

}
</script>

<style scoped lang="less">
.myAvatar {
  width: 100%;
  height: 70px;
  background-color: #eeebdd;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .imgBox {
    img {
      width: 50px;
      height: 50px;
      border-radius: 30px;
      border: 1px solid #ccc;
    }
  }

  .name {
    font-size: 16px;
    margin-right: 15px;
  }
}
</style>