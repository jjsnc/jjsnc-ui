<template>
  <ul class="jjsnc-checker">
    <slot>
      <jjsnc-checker-item v-for="(option, index) in options" :option="option" :key="index"></jjsnc-checker-item>
    </slot>
  </ul>
</template>

<script>
import jjsncCheckerItem from "./checker-item.vue";

const COMPONENT_NAME = "jjsnc-checker";

const EVENT_INPUT = "input";

export default {
  name: COMPONENT_NAME,
  props: {
    value: [String, Number, Array],
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: String,
      default: "checkbox"
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default() {
        return this.options.length;
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    isRadio() {
      return this.type === "radio";
    }
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue;
    },
    currentValue(val) {
      this.$emit(EVENT_INPUT, val);
    }
  },
  methods: {
    check(option) {
      if (this.isRadio) {
        this.checkRadio(option);
      } else {
        this.checkCheckbox(option);
      }
    },
    checkRadio(option) {
      this.currentValue = option.value;
    },
    checkCheckbox(option) {
      const value = option.value;
      const currentValue = this.currentValue;
      const valueLen = currentValue.length;
      const min = this.min;
      const max = this.max;

      const index = currentValue.indexOf(value);
      if (index > -1) {
        valueLen > min && currentValue.splice(index, 1);
      } else {
        valueLen < max && currentValue.push(value);
      }
    }
  },
  components: {
    jjsncCheckerItem
  }
};
</script>

<style lang="scss">

@import "../../common/scss/index";

</style>



