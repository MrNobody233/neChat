<template>
  <div class="container">
    <div class="tag">
      <span class="title">hello</span>
      <i class="el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "historyTag"
}
</script>

<style scoped lang="less">
.container {
  width: 78px;
  height: 32px;
  margin: 6px;

  .tag {
    width: 78px;
    height: 32px;
    background-color: #f4f4f5;
    text-align: center;
    line-height: 32px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e9e9eb;

    .title {
      font-size: 12px;
      margin-left: 10px;
      color: #909399;
    }

    i {
      margin-right: 10px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>