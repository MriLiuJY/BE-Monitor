<template>
  <!-- 首页 -->
  <div class="home">
    <LineChart></LineChart>
  </div>
</template>

<script>
import LineChart from '../../components/lineChart.vue';

export default {
  data() {
    return {};
  },
  components: {
    LineChart,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.line{
  border: 1px solid red;
}
</style>
