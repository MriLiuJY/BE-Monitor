<template>
  <!-- line -->
  <div class="line">
    <div class="line-box" ref="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    errorList: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.line);
    window.addEventListener('resize', this.chart.resize);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.line{
  min-height: 400px;
  border: 1px solid red;
}
</style>
