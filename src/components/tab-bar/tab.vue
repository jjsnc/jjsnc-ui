<template>
  <div class="jjsnc-tab" :class="{'jjsnc-tab_active':isActive}" @click="handleClick">
    <slot name="icon">
      <i :class="icon"></i>
    </slot>
    <slot>
      <div v-html="label"></div>
    </slot>
  </div>
</template>

<script>
const COMPONENT_NAME = "jjsnc-tab";
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
    },
    icon: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$parent.addTab(this);
  },
  destroyed() {
    this.$parent.removeTab(this);
  },
  computed: {
    isAction() {
      return this.$$parent.vlaue === this.value;
    }
  },
  methods: {
    handleClick(item) {
      this.$parent.trigger(this.value);
    }
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";

.jjsnc-tab {
  flex: 1;
  padding: 7px 0;
  color: $tab-color;
  text-align: center;
}
.jjsnc-tab_active {
  color: $tab-active-color;
}
</style>

