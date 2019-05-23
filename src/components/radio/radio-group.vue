<template>
  <div class="jjsnc-radio-group" :class="_groupClass" :data-horz="horizontal">
    <slot>
      <jjsnc-radio
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :position="position"
        :hollow-style="hollowStyle"
        v-model="radioValue"
      ></jjsnc-radio>
    </slot>
  </div>
</template>

<script>
import jjsncRadio from "./radio.vue";
const COMPONENT_NAME = "jjsnc-radio-group";
const EVENT_INPUT = "input";
export default {
  name: COMPONENT_NAME,
  provide() {
    return {
      radioGroup: this
    };
  },
  props: {
    value: [String, Number],
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    position: {
      type: String,
      default: "left"
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    hollowStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radioValue: this.value
    };
  },
  wathc: {
    value(newV) {
      this.radioValue = newV;
    },
    radioValue(newV) {
      this.$emit(EVENT_INPUT, newV);
    }
  },
  computed: {
    _groupClass() {
      if (!this.horizontal) {
        return "border-top-1px border-bottom-1px";
      }
      return null;
    }
  },
  components: {
    jjsncRadio
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/index";
.jjsnc-radio-group {
  z-index: 1;
  overflow: hidden;
  background-color: $radio-group-bgc;
  .jjsnc-radio {
    &:last-child {
      .jjsnc-radio-wrap {
        @include border-none();
      }
    }
  }
}

.jjsnc-radio-group[data-hoz="true"] {
  display: flex;
  padding-left: 0;
  @include border-1px($radio-group-horizontal-bdc, 2px);
  border-radius: 2px;
  .jjsnc-radio {
    @include flex-fix();
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    &:after {
      border-color: $radio-group-horizontal-bdc;
    }
    &:last-child {
      @include border-none();
    }
    &[data-pos="right"] {
      .jjsnc-radio-ui {
        position: relative;
        margin-right: 0.42em;
        order: 1;
      }
      .jjsnc-radio-label {
        margin-right: 0;
      }
    }
    .jjsnc-radio-wrap {
      justify-content: center;
    }
  }
}
</style>
