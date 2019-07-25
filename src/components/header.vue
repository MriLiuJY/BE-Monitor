<template>
  <!-- header -->
  <div class="header">
    <a class="logo">
      <img src="#" alt="fe-monitor" />
    </a>

    <el-menu :default-active="activeIndex" class="navigation" mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">{{username}}</a>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{username}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">退出登陆</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'test',
    };
  },
};
</script>

<style scoped lang="scss">
.header{
  display: flex;
  position: relative;
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 6px 0 #ccd0d9;

  .logo{
    margin-left: 30px;
    border: 1px solid red;
  }

  .navigation{
    position: absolute;
    right: 30px;
    top: 0;
  }
}
</style>
