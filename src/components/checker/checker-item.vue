<template>
  <li
    class="jjsnc-checker-item"
    :class="{'jjsnc-checker-item_active':isActive,'jjsnc-checker-item_disabled':isDisabled}"
    @click="clickHandler"
  >
    <slot>
      <span v-html="option.text"></span>
    </slot>
  </li>
</template>

<script>
const COMPONENT_NAME = "jjsnc-checker-item";
export default {
  name: COMPONENT_NAME,
  props: {
    option: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {};
      }
    }
  },
  computed: {
    isActive() {
      const isRadio = this.$parent.isRadio;
      const currentValue = this.$parent.currentValue;
      const value = this.option.value;
      return isRadio
        ? currentValue === value
        : currentValue.indexOf(value) >= 0;
    },
    isDisabled() {
      return this.option.disabled;
    }
  },
  methods: {
    clickHandler() {
      if (this.isDisabled) {
        return;
      }
      this.$parent.check(this.option);
    }
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";


.jjsnc-checker-item {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  padding: 8px 10px;
  margin-right: 10px;
  color: $checker-item-color;
  background: $checker-item-bgc;
  border-radius: 4px;
  @include border-1px($checker-item-bdc, 4px);
}

.jjsnc-checker-item_active {
  color: $checker-item-active-color;
  background: $checker-item-active-bgc;
  @include border-1px($checker-item-active-bdc, 4px);
  &.jjsnc-checker-item_disabled {
    background: $checker-item-disabled-bgc;
    @include border-1px($checker-item-disabled-bdc, 4px);
  }
}
.jjsnc-checker-item_disabled {
  color: $checker-item-disabled-color;
}
</style>
