<!--
<template>
  <div class="rightContainer">
    <div class="right_word">
      <div class="item">
        <span>{{ msg }}</span>
      </div>
      <img style="width: 40px;height: 40px;border-radius: 50%"
           src="https://avatars.githubusercontent.com/u/96650292?v=4"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightTalk",
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
.rightContainer {
  width: 100%;
  margin-top: 10px;
  float: right;

}

.right_word {

  display: flex;

  img {
    margin-top: -20px;
  }

  .item {
    display: flex;
    flex-direction: column;


    span {
      background-color: #5c91fb;
      padding: 10px 15px;
      max-width: 290px;
      border-radius: 20px 0 20px 20px;
      font-size: 15px;
      color: white;
      margin-right: 10px;
      line-height: 24px;
    }
  }
}
</style>-->
<template>
  <li class="right_word">
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
.right_word {
  margin: 10px;

  img {
    float: right;
  }

  span {
    float: right;
    background-color: #5c91fb;
    padding: 10px 15px;
    max-width: 290px;
    border-radius: 20px 0 20px 20px;
    font-size: 16px;
    color: white;
    margin-right: 13px;
    position: relative;
    line-height: 24px;
  }
}
</style>