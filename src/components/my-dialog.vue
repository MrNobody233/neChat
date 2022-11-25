<template>
  <div class="container">
    <transition name="el-fade-in-linear">
      <div class="modal" v-show="modal">
        <transition name="el-zoom-in-center">
          <div class="modal-dialog">
            <div class="modal-body">
              <p>你的捏捏号是：{{ userInfo.uid }}</p>
              <a href="#" class="btn" @click="showSmallDialog">记住了！</a>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <transition name="el-fade-in-linear">
      <div class="modal" v-show="isShowSmallDialog">
        <transition name="el-zoom-in-center">
          <div class="modal-dialog">
            <div class="smallModal-body">
              <p>一定要记住你的捏捏号：{{ userInfo.uid }} </p>   <a href="#" class="btn" @click="gotoChat">真的记住了！</a>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>

import router from "@/router";
import store from "@/store";

export default {
  name: "my-dialog",
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      // 小的弹出框
      isShowSmallDialog: false
    }
  },
  methods: {
    showSmallDialog() {

      this.isShowSmallDialog = true
    },
    gotoChat() {
      this.isShowSmallDialog = false
      console.log(store.state.user.userInfo)
      console.log(store.state.user.userInfo.token)
      router.push('/chat')
    }
  },
  computed: {}
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

.modal:before {
  content: '';
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: block;
}

.modal-dialog {
  background-color: #ffffff;
  border-radius: 5px;
  border: 0.3px solid #ccc;
  position: fixed;
  z-index: 11;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  display: flex;
  flex-direction: column;
  height: 55px;

  .modal-header {
    height: 60px;
    //background-color: #dea5af;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-bottom: 1px solid #f1f1f1;

    p {
      margin-left: 15px;
      font-size: 16px;
      font-weight: 600;
    }

    .btn-close {
      color: #ccc;
      font-size: 30px;
      margin-right: 5px;
      margin-bottom: 29px;
    }

    .btn-close:hover {
      transition: .5s all ease;
      color: #333;
    }
  }

  .modal-body {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-around;

    p {
      margin-left: 15px;
      color: #494949;
      font-weight: 550;
      font-size: 15px;
    }

    .btn {
      display: block;
      width: 80px;
      height: 30px;
      background-color: #374b4f;
      color: #fff;
      border-radius: 7px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
    }
  }

  .modal-footer {
    height: 60px;
    position: relative;

    .btn:hover {
      transition: .4s all ease;
      background-color: #465f65;
    }
  }

}

.smallDialog {
  width: 300px;
  height: 300px;
  background-color: pink;
}

.smallModal-body {
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    margin-left: 15px;
    color: #494949;
    font-weight: 550;
    font-size: 15px;
  }

  .btn {
    display: block;
    padding: 0px 10px;
    height: 30px;
    background-color: #374b4f;
    color: #fff;
    border-radius: 7px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
  }

  .btn:hover {
    transition: .4s all ease;
    background-color: #465f65;
  }
}

</style>