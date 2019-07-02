<template>
  <div class="jjsnc-sticky-ele">
    <div class="jjsnc-sticky-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = "jjsnc-sticky-ele";
export default {
  name: COMPONENT_NAME,
  inject: ["sticky"],
  props: {
    eleKey: {
      type: [Number, String]
    }
  },
  mounted() {
    this.sticky.addEle(this);
  },
  methods: {
    refressh() {
      const el = this.$el;
      if (el.firstElementChild) {
        el.style.height = "";
        el.style.height = `${el.offsetHeight}px`;
      }
    }
  },
  beforeDestroy() {
    this.sticky.removeEle(this);
  }
};
</script>
<style lang="scss">
.jjsnc-sticky-ele {
  position: relative;
}
</style>

