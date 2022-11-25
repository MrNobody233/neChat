<template>
  <div class="container">

    <el-button @click="modal=true">对话框</el-button>
    <transition name="el-fade-in-linear">
      <div class="modal" v-show="modal">
        <transition name="el-zoom-in-center">
          <div class="modal-dialog">
            <div class="modal-header">
              <p>记住你的捏捏号 :D</p>
              <a href="#" class="btn-close">×</a>
            </div>
            <div class="modal-body">
              <p>你的捏捏号是：13 :D</p>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn" @click="modal=false">真的记住了！</a>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <el-button type="info" @click="addFriend">测试添加好友</el-button>
  </div>
</template>

<script>
//
import {addFriend} from '@/ulits/api/index'

export default {
  name: "test",
  data() {
    return {
      modal: false
    }
  },
  methods: {
    // 添加好友
    async addFriend() {
      await addFriend(11).then((res) => {
        // let result = JSON.parse(res)
        console.log(res)
      })

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
}

.modal:before {
  content: '';
  display: none;
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

  .modal-header {
    height: 60px;
    //background-color: #dea5af;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;

    p {
      margin-left: 15px;
      font-size: 18px;
      font-weight: 700;
    }

    .btn-close {
      color: #ccc;
      font-size: 30px;
      margin-right: 10px;
    }

    .btn-close:hover {
      transition: .5s all ease;
      color: #333;
    }
  }

  .modal-body {
    align-items: center;
    display: flex;
    border: 1px solid #CCCCCC;
    border-left: none;
    border-right: none;
    height: 120px;

    p {
      margin-left: 15px;
      color: #494949;
      font-weight: 550;
      font-size: 15px;
    }
  }

  .modal-footer {
    height: 60px;
    position: relative;

    .btn {
      display: block;
      width: 100px;
      height: 40px;
      background-color: #374b4f;
      color: #fff;
      border-radius: 7px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .btn:hover {
      transition: .4s all ease;
      background-color: #465f65;
    }
  }

}

</style>