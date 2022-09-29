<template>
  <div class="container">
    <!--背景图片-->
    <div class="bg" @click="hideSearchBox"></div>
    <!--主体部分-->
    <div class="main">
      <!-- 左边-->
      <div class="leftBox">
        <!--头像-->
        <my-avatar></my-avatar>
        <!--搜索框-->
        <div class="search">
          <el-input placeholder="搜索" v-model="searchInput" @focus="showSearchBox">
            <i slot="prefix" class="el-input__icon el-icon-search">
            </i>
            <i slot="suffix" class="el-input__icon el-icon-close" @click="hideSearchBox">
            </i>
          </el-input>
        </div>

        <!--中间盒子-->
        <div class="friendList">
          <!--el-fade-in el-zoom-in-center-->
          <transition :name="changeTransition">
            <!--好友列表-->
            <friend-list v-show="isShow" :list="list"></friend-list>

          </transition>
          <!--          <div class="friendItem" v-for="item in 20">
                      <div class="friendBorder">
                        <img src="https://avatars.githubusercontent.com/u/96650292?v=4" alt="">
                        <span>名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字</span>
                      </div>
                    </div>-->

          <!--搜索-->

          <div class="searchContainer" v-show="!isShow">
            <div class="searchContainerTop">
              <div>
                <i slot="suffix" class="el-input__icon el-icon-time"></i>
                <span> 最近搜索</span>
              </div>
              <i slot="suffix" class="el-input__icon el-icon-delete"></i>
            </div>
            <!--历史搜索tag-->
            <div class="historyContainer">
              <!--              <history-tag v-for="i in 10"></history-tag>-->
              <!--              <el-tag type="info">123</el-tag>-->
            </div>
          </div>

        </div>

        <!--设置-->
        <div class="setting">
          <i class="el-icon-setting"></i>
          设置
        </div>

      </div>
      <!--右侧聊天区域-->
      <div class="talkBox">
        <!--头部联系人姓名-->


        <!--中间聊天区域-->
        <div class="talkBoxMain">
          <RouterView></RouterView>
        </div>

        <!--底部文本域-->
        <div class="talkBoxBottom">
          <textarea placeholder="说点什么吧~"></textarea>
          <button>发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myAvatar from "@/views/chat/components/myAvatar";
import friendList from "@/views/chat/components/friendList";
import historyTag from "@/views/chat/components/historyTag";

export default {
  name: "index",
  components: {myAvatar, friendList, historyTag},
  data() {
    return {
      // 搜索表单数据
      searchInput: '',
      // 切换显示搜素区域和好友列表区域
      isShow: true,
      // 动画数组
      transition: ['el-fade-in', 'el-zoom-in-center', 'el-zoom-in-top', 'el-zoom-in-bottom'],
      // 切换动画的flag
      flag: 0,
      //  用户列表假数据
      list: [
        {id: 1, username: '木子日天木子日天', avatar: 'https://avatars.githubusercontent.com/u/96650292?v=4',},
        {id: 2, username: '洋洋洋洋洋洋洋洋', avatar: 'https://avatars.githubusercontent.com/u/28512134?v=4'},
        {id: 3, username: '充电器', avatar: 'https://avatars.githubusercontent.com/u/39784843?v=4'},
      ]
    }
  },
  methods: {
    // 展示搜索盒子 并 更改随机切换动画flag
    showSearchBox() {
      this.isShow = false
      this.flag = Math.floor(Math.random() * 3);

    },

    hideSearchBox() {
      this.isShow = true
      this.searchInput = ''
    }
  },
  computed: {
    // 计算属性返回随机动画数组
    changeTransition() {
      return this.transition[this.flag]
    }
  }
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
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 750px;
  width: 1100px;
  background-color: #f7f7f7;
  border-radius: 20px;
  overflow: hidden;
  display: flex;

  .leftBox {
    width: 200px;
    height: 100%;
    border-right: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .friendList {
      flex: 1;
      overflow: auto;

      /*   .friendItem {
           width: 100%;
           height: 55px;
           background-color: white;
           margin-bottom: 3px;
           cursor: pointer;

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


         }*/

      .searchContainer {
        width: 100%;
        height: 100%;

        .searchContainerTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5px;


          .el-icon-time {
            color: #ccc;
          }

          .el-icon-delete {
            color: #ccc;
          }

          .el-icon-delete:hover {
            transition: 0.5s ease;
            color: black;
            cursor: pointer;
          }

          span {
            font-size: 10px;
            color: #ccc;
          }
        }

        .historyContainer {

        }
      }

    }

    .search {
      .el-icon-close:hover {
        color: black;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .setting {
      width: 100%;
      height: 46px;
      background-color: #e2909f;
      text-align: center;
      line-height: 45px;
      color: white;
      cursor: pointer;
    }


  }

  .talkBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .talkBoxTop {
      text-align: center;
      width: 100%;
      height: 36px;
      background-color: white;
      line-height: 36px;
      font-size: 17px;
      color: #010a1b;
      border-bottom: 1px solid #CCCCCC;

    }

    .talkBoxMain {
      flex: 1;
      overflow: auto;
    }

    .talkBoxBottom {
      width: 900px;
      height: 120px;
      background-color: white;
      position: relative;

      textarea {
        border: none;
        border-top: 2px solid #ccc;
        outline: none;
        resize: none;
        width: 99%;
        height: 80%;
        font-size: 15px;
        padding: 10px;
        //font-family: "Arial Black";
        font-family: "Microsoft YaHei";
      }

      button {
        position: absolute;
        width: 60px;
        height: 30px;
        z-index: 100;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
        color: white;
        background-color: #dea5af;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        transition: ease 0.5s;
      }

      button:hover {
        transition: ease 0.5s;
        border: 0.4px solid #e2909e;
        background-color: #e2909f;
      }
    }
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

li {
  list-style: none;
}

a {
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
}
</style>