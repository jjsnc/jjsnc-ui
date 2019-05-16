<template>
  <div class="jjsnc-checkbox-group" ref="group" :class="groupClass" :data-horz="horizontal">
    <slot>
      <jjsnc-checkbox
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :shape="shape"
        :position="position"
        :hollow-style="hollowStyle"
      />
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
import jjsncCheckbox from "../checkbox/checkbox.vue";
const COMPONENT_NAME = "jjsnc-checkbox-group";

const EVENT_INPUT = "input";
const EVENT_CHECKED = "checked";
const EVENT_CANCLE_CHECKED = "cancel-checked";

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Array
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "circle"
    },
    position: {
      type: String,
      default: "left"
    },
    hollowStyle: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      _value: [],
      _checkboxGroup: true
    };
  },
  computed: {
    groupClass() {
      if (!this.horizontal) {
        return "border-top-1px border-bottom-1px";
      }
      return null;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this._value = this.value.concat();
      }
    }
  },
  mounted() {
    this.$on(EVENT_CHECKED, value => {
      if (this._value.length < this.max) {
        this._value.push(value);
      }
      this.$emit(EVENT_INPUT, this._value);
    });
    this.$on(EVENT_CANCLE_CHECKED, value => {
      if (this._value.length > this.min) {
        const index = this._value.indexOf(value);
        this._value.splice(index, 1);
      }
      this.$emit(EVENT_INPUT, this._value);
    });
  },
  components: {
    jjsncCheckbox
  }
};
</script>
<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";

.jjsnc-checkbox-group {
  z-index: 1;
  overflow: hidden;
  background-color: $checkbox-group-bgc;
  .jjsnc-checkbox {
    &:last-child {
      .jjsnc-checkbox-wrap {
        @include border-none();
      }
    }
  }
}
.jjsnc-checkbox-group[data-horz=true] {
  display: flex;
  padding-left: 0;
  @include border-1px($checkbox-group-horizontal-bdc, 2px);
  border-radius: 2px;
  .jjsnc-checkbox {
    @include flex-fix();
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    &:after {
      border-color: $checkbox-group-horizontal-bdc;
    }
    &:last-child {
      @include border-none();
    }
    &[data-pos="right"] {
      .jjsnc-checkbox-ui {
        position: relative;
        margin-left: 0.42em;
        order: 1;
      }
      .jjsnc-checkbox-label {
        margin-right: 0;
      }
    }
  }
  .jjsnc-checkbox-wrap {
    justify-content: center;
  }
}

</style>

