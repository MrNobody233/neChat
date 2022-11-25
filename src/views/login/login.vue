<template>
  <div class="bg">
    <div class="Login">
      <div class="card">
        <div class="cardHead">
          <img src="../../assets/logo.png" alt="">

          <p>NeChat - Login</p>
        </div>

        <div class="cardBody">
          <form>
            <el-input v-model="username" prefix-icon="el-icon-user-solid" placeholder="Your nick name..."></el-input>
            <el-input v-model="password" prefix-icon="el-icon-lock" show-password
                      placeholder="Enter your password..."></el-input>
          </form>
          <el-button @click="login">Login</el-button>
          <el-link href="#/Register" type="info">Register</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {Message} from 'element-ui';
import {login} from "@/ulits/api";
import router from "@/router";
import {mapMutations, mapState} from 'vuex'
import store from "@/store";

export default {
  name: 'Login',
  data() {
    return {
      username: '1',
      password: '123456.asd',
      //  用户信息
      userInfo: ''
    }
  },
  components: {
    ...mapState('user', ['userInfo'])
  },
  methods: {
    // 导入vuex中修改用户信息的方法
    ...mapMutations('user', ['setUser']),
    // 登录
    login() {
      if (this.username === null || this.password === null) {
        Message({
          message: '用户名或密码不能为空',
          type: 'warning',
          duration: 1500
        });
        return;
      }
      login(this.username, this.password).then((res) => {
        console.log(res)
        if (res.code === 0) {
          Message({
            message: res.msg, type: 'success', duration: 1500
          });
          // 给用户属性赋值
          this.userInfo = res
          console.log(this.userInfo)
          // 将用户属性存储到vuex中
          this.setUser(this.userInfo)
          // 跳转到聊天页面
          router.push('/chat')
          // console.log(store.state.user.userInfo.token)
        } else {
          Message({
            message: '登录失败~请检查用户名或密码', type: 'error', duration: 1500
          });
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(../../assets/img/background.png) no-repeat fixed center center;
  background-size: cover;
}

.card {
  border-radius: 5px;
  width: 390px;
  height: 464px;
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
}

.cardBody {
  position: absolute;
  left: 42px;
  bottom: 0;
  width: 316px;
  height: 290px;
}

.el-input {
  margin-top: 30px;
}

.el-button, .el-button:focus {
  margin-top: 30px;
  width: 316px;
  background: #374b4f;
  border-color: #374b4f;
  color: #ffffff;
}

.el-button:hover {
  background: #465f65;
  border-color: #465f65;
  color: #ffffff;
}

.el-link {
  margin: 15px 0 0 134px;
}
</style>
