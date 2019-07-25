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
    this.line = this.$echarts.init(this.$refs.line);
    window.addEventListener('resize', this.chart.resize);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
