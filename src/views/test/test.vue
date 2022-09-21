<template>
  <div class="container">
    <div class="bigBox">
      <transition name="el-zoom-in-top">
        <div class="leftBox" v-show="isShow">

        </div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="!isShow" class="anotherBox">

        </div>
      </transition>

    </div>

    <button @click="isShow =!isShow">点击切换</button>
    <span>{{ isShow }}</span>
    <span>{{ changeTransition }}</span>
  </div>
</template>

<script>

export default {
  name: "test",
  data() {
    return {
      isShow: true,
    }
  },
  methods: {},
  computed: {
    changeTransition() {
      let flag = 0;

      setTimeout(() => {
        flag = flag + 1
      }, 1000)
      if (flag > 2) {
        flag = 0
      }
      // return this.transition[flag]
      return flag
    }

  }
}
</script>

<style scoped lang="less">

.bigBox {
  width: 1000px;
  height: 700px;
  background-color: pink;
  margin: 0 auto;
  display: flex;

  .leftBox {
    width: 80px;
    height: 100%;
    background-color: hotpink;
  }

  .anotherBox {
    width: 80px;
    height: 100%;
    background-color: #465f65;
  }
}

</style>