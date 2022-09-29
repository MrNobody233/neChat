<template>
  <div class="container">
    <router-link :to="`/chat/msg/${i.id}`" class="friendItem" v-for="i in list" :key="i.id">
      <div class="friendBorder">
        <img :src="i.avatar" alt="">
        <span>{{ i.username }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import 'vant/lib/button/style';

export default {
  name: "friendList",
  props: {
    list: {
      type: [Object, Array],
      default: () => ({})
    }
  }
  /*  props: {
      name: {
        type: String,
        default: '木子日天'
      },
      avatar: {
        type: String,
        default: 'https://avatars.githubusercontent.com/u/96650292?v=4'
      },
      id: {
        type: Number,
        default: 1
      }
    }*/

}
</script>

<style scoped lang="less">
.friendItem {
  width: 100%;
  height: 55px;
  background-color: white;
  margin-bottom: 3px;
  cursor: pointer;
  display: block;
  font-style: normal;
  color: black;

  .friendBorder {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    //background-color: rebeccapurple;
    border-bottom: #ccc 1px solid;
    display: flex;

    align-items: center;

    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-left: 30px;
    }

    img {
      border-radius: 30px;
      width: 40px;
      height: 40px;
    }
  }


}

.friendItem:hover {
  transition: ease .5s;
  background-color: #ecf5ff;

  img {
    transition: 1s ease;
    width: 43px;
    height: 43px;
  }

}


</style>