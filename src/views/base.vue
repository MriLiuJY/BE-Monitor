<template>
  <!-- base -->
  <div class="base">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.base{
  overflow: hidden;
}
</style>
