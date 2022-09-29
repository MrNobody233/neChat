<template>
  <li class="left_word">

    <img style="width: 40px;height: 40px;border-radius: 50%"
         :src="avatar"/>
    <span>{{ msg }}</span>

  </li>
</template>

<script>
export default {
  name: "leftTalk",
  props: {
    username: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: 'https://avatars.githubusercontent.com/u/96650292?v=4'
    },
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
li {
  list-style: none;
}

.left_word {
  margin: 10px;

  img {
    float: left;
  }

  span {
    float: left;
    background-color: #fff;
    padding: 10px 15px;
    max-width: 290px;
    border-radius: 0 20px 20px 20px;
    font-size: 16px;
    color: #000;
    margin-left: 13px;
    position: relative;
    line-height: 24px;
  }
}
</style>