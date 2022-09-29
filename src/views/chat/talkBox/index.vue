<template>
  <div class="container">
    <div class="talkTop">
      <span>木子日天</span>
    </div>
    <ul class="talkMain">
      <template v-for="i in list">
        <left-talk v-if="i.type===1" :msg="i.msg"></left-talk>
        <right-talk v-else :msg="i.msg"></right-talk>
      </template>
    </ul>
  </div>
</template>

<script>
import leftTalk from "@/views/chat/talkBox/components/leftTalk";
import rightTalk from "@/views/chat/talkBox/components/rightTalk";

export default {
  name: "index",
  components: {
    leftTalk,
    rightTalk
  },
  data() {
    return {
      list: [
        {
          type: 2,
          msg: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
        },
        {type: 2, msg: '啊啊'},
        {type: 1, msg: '啊aaa啊'},

        {type: 2, msg: '啊啊'},
      ]
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .talkTop {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background-color: white;
    text-align: center;
    border-bottom: 1px solid #CCCCCC;
  }

  .talkMain {
    overflow-y: auto;
    flex: 1;
    background-color: #f1f3f4;
    display: flex;
    flex-direction: column;
  }
}

/* 滚动条 */
::-webkit-scrollbar-thumb:horizontal { /*水平滚动条的样式*/
  width: 5px;
  background-color: #CCCCCC;
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-track-piece {
  background-color: transparent; /*滚动条的背景颜色*/
  -webkit-border-radius: 0; /*滚动条的圆角宽度*/
}

::-webkit-scrollbar {
  width: 8px; /*滚动条的宽度*/
  height: 8px; /*滚动条的高度*/
}

::-webkit-scrollbar-thumb:vertical { /*垂直滚动条的样式*/
  height: 50px;
  background-color: #999;
  -webkit-border-radius: 4px;
  outline: 2px solid #fff;
  outline-offset: -2px;
  border: 1px solid #fff;
}

::-webkit-scrollbar-thumb:hover { /*滚动条的hover样式*/
  height: 50px;
  background-color: #9f9f9f;
  -webkit-border-radius: 4px;
}

</style>