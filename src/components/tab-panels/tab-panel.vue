<template>
  <div class="jjsnc-tab-panel">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = "jjsnc-tab-panel";

export default {
  name: COMPONENT_NAME,
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      default() {
        return this.label;
      }
    }
  },
  mounted() {
    this.$parent.addPanel(this);
  },
  destroyed() {
    this.$parent.removePanel(this);
  }
};
</script>

<style lang="scss">
.jjsnc-tab-panel {
  width: 100%;
  flex: 1 0 auto;
}
</style>


