<template>
  <div class="bg">
    <div class="Register">
      <div class="card">
        <div class="cardHead">
          <img src="../../assets/logo.png" alt="">
          <p>NeChat - Register</p>
        </div>
        <div class="cardBody">
          <form>
            <el-input class="username_input" v-model="username" placeholder="Your nick name..."></el-input>
            <el-input class="password_input" v-model="password" show-password
                      placeholder="Enter your password..."></el-input>
            <el-input class="confirm_password_input" v-model="confirm_password" show-password
                      placeholder="Enter your password again..."></el-input>
          </form>
          <el-button @click="register" class="registerBtn">Register</el-button>
          <el-link href="#/Login" type="info">login</el-link>
        </div>
      </div>
    </div>

    <myDialog :modal="modal" v-if="modal" :userInfo="userInfo"></myDialog>

  </div>
</template>

<script>
import {Message} from 'element-ui';
import myDialog from "@/components/my-dialog";
import {register} from "@/ulits/api";
import router from "@/router";
import {mapMutations} from 'vuex'

export default {
  name: 'Register',
  components: {myDialog},
  data() {
    return {
      username: null,
      password: null,
      confirm_password: null,
      // 捏捏号
      nnNumber: '',
      // 是否弹出对话框
      modal: false,
      // 用户信息
      userInfo: {}
    }
  },
  methods: {
    ...mapMutations('user', ['setUser']),

    register() {
      if (this.username === null || this.password === null || this.confirm_password === null) {
        Message({
          message: '用户名或密码不能为空', type: 'warning', duration: 1500
        });
        return;
      }
      if (this.password !== this.confirm_password) {
        Message({
          message: '两次输入密码不一致', type: 'warning', duration: 1500
        });
        return;
      }
      const u_pattern = /^[a-zA-Z0-9_-]{4,16}$/;
      const p_pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?.]).*$/;
      if (!u_pattern.test(this.username)) {
        Message({
          message: '用户名必须符合4到16位（字母，数字，特殊字符）', type: 'warning', duration: 1500
        });
        return;
      }
      if (!p_pattern.test(this.password)) {
        Message({
          message: '密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符', type: 'warning', duration: 1500
        });
        return;
      }
      // 如果登录成功
      register(this.username, this.password).then((res) => {
        if (res.code === 0) {
          // this.outerVisible = true
          Message({
            message: '注册成功辣', type: 'success', duration: 1500
          });
          // 给用户信息赋值
          this.userInfo = res
          this.nnNumber = res.uid
          this.modal = true
          this.setUser(this.userInfo)
        } else {
          Message({
            message: res.msg, type: 'error', duration: 1500
          });
        }
      })
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.Register {
  z-index: 999;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(../../assets/img/background.png) no-repeat fixed center center;
  background-size: cover;
}

.card, el-dialog {
  border-radius: 5px;
  width: 390px;
  height: 500px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 15% auto auto;
  box-shadow: 0 0 10px 5px #eeeeee;
}

.cardHead {
  position: absolute;
  left: 42px;
  width: 316px;
  height: 131px;
}

.cardHead img {
  position: absolute;
  left: 0;
  right: 0;
  margin: 30px auto;
  width: 90px;
}

.cardHead p {
  position: absolute;
  margin: 140px 81px;
  font-size: 20px;
  width: 180px;
}

.cardBody {
  position: absolute;
  left: 42px;
  bottom: 0;
  width: 316px;
  height: 330px;
}

.el-input {
  margin-top: 25px;
}

.registerBtn, .registerBtn:focus {
  margin-top: 30px;
  width: 316px;
  background: #374b4f;
  border-color: #374b4f;
  color: #ffffff;
}


.registerBtn:hover {
  background: #465f65;
  border-color: #465f65;
  color: #ffffff;
}

.el-link {
  margin: 15px 0 0 140px;
}

// 弹窗样式
.btn {
  background: #428bca;
  border: #357ebd solid 1px;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  padding: 8px 15px;
  text-decoration: none;
  text-align: center;
  min-width: 60px;
  position: relative;
  transition: color 0.1s ease;
  z-index: 1000;
}

.btn:hover {
  background: #357ebd;
}

.btn.btn-big {
  font-size: 18px;
  padding: 15px 20px;
  min-width: 100px;
}

.btn-close {
  color: #aaa;
  font-size: 30px;
  text-decoration: none;
  position: absolute;
  right: 5px;
  top: 0;
}

.btn-close:hover {
  color: #919191;
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
}

.modal:target:before {
  display: block;
}

.modal:target .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  top: 20%;
}

.modal-dialog {
  background: #fefefe;
  border: #333 solid 1px;
  border-radius: 5px;
  margin-left: -200px;
  position: fixed;
  left: 50%;
  top: -100%;
  z-index: 11;
  width: 360px;
  -webkit-transform: translate(0, -500%);
  -ms-transform: translate(0, -500%);
  transform: translate(0, -500%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}

.modal-body {
  padding: 20px;
}

.modal-header,
.modal-footer {
  padding: 10px 20px;
}

.modal-header {
  border-bottom: #eee solid 1px;
}

.modal-header h2 {
  font-size: 20px;
}

.modal-footer {
  border-top: #eee solid 1px;
  text-align: right;
}
</style>
