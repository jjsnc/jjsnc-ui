<template>
  <div class="jjsnc-form-group">
    <p class="jjsnc-form-group-legend">{{legend}}</p>
    <div class="jjsnc-form-group-content">
      <slot>
        <jjsnc-form-item v-for="(field, index) in fields" :key="index" :field="field"/>
      </slot>
    </div>
  </div>
</template>

<script>
import jjsncFormItem from "./form-item.vue";

const COMPONENT_NAME = "jjsnc-form-group";
export default {
  name: COMPONENT_NAME,
  props: {
    legend: {
      type: String,
      default: ""
    },
    fields: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return [];
      }
    }
  },
  beforeCreate() {
    this.form = this.$parent.form;
  },
  beforeDestroy() {
    this.form = null;
  },
  components: {
    jjsncFormItem
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";

.jjsnc-form-group {
  overflow: hidden;
}
.jjsnc-form-group-legend {
  font-size: $fontsize-medium;
  color: $form-group-legend-color;
  background-color: $form-group-legend-bgc;
}
</style>
