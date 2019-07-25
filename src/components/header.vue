<template>
  <!-- header -->
  <div class="header">
    <a class="logo">
      <img @click="changeRouter" alt="fe-monitor" />
    </a>

    <el-menu class="navigation" mode="horizontal">
      <el-menu-item index="1">
        <a href="https://github.com/MriLiuJY/monitorFE" target="_blank">Github</a>
      </el-menu-item>
      <el-menu-item index="2">
        <a href="http://monitor.ljy.design/" target="_blank">官方网站</a>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">{{username}}</template>
        <el-menu-item @click="exit">退出登陆</el-menu-item>
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
  methods: {
    exit() {},
    changeRouter() {
      this.$router.push('/');
    },
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
    cursor: pointer;
  }

  .navigation{
    position: absolute;
    right: 30px;
    top: 0;

    a{
      color: #333;
    }
  }
}
</style>
