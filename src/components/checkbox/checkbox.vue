<template>
  <div class="jjsnc-checkbox" :class="_containerClass" :data-pos="position">
    <label class="jjsnc-checkbox-wrap" :class="_wrapClass">
      <input
        class="jjsnc-checkbox-input"
        type="checkbox"
        :disabled="computedOption.disabled"
        v-model="checkValue"
      >
      <span class="jjsnc-checkbox-ui" :class="_borderIconClass">
        <i :class="_rightIconClass"></i>
      </span>
      <span class="jjsnc-checkbox-label">
        <slot>{{computedOption.label}}</slot>
      </span>
    </label>
  </div>
</template>
<script>
const COMPONENT_NAME = "jjsnc-checkbox";
const EVENT_INPUT = "input";
const EVENT_CHECKED = "checked";
const EVENT_CANCLE_CHECKED = "cancel-checked";
export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: [Boolean, String]
    },
    label: {
      type: [Boolean, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    option: {
      type: [Boolean, String, Object],
      default() {
        return {
          _def_option: true
        };
      }
    },
    position: {
      type: String,
      default: "left"
    },
    shape: {
      type: String,
      default: "circle"
    },
    hollowStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const parent = this.$parent;
    const isInGroup = parent.$data._checkboxGroup;
    const isInHorizontalGroup = isInGroup && parent.$props.horizontal;
    return {
      isInGroup,
      isInHorizontalGroup
    };
  },
  computed: {
    computedOption() {
      let option = this.option;
      const label = this.label;
      const disabled = this.disabled;
      if (option._def_option === true) {
        option = {
          label,
          value: label,
          disabled
        };
      } else if (typeof option === "string") {
        option = {
          label: option,
          value: option,
          disabled: false
        };
      }

      return option;
    },
    checkValue: {
      get() {
        if (this.isInGroup) {
          return this.$parent.value.indexOf(this.computedOption.value) > -1;
        } else {
          return Boolean(this.value);
        }
      },
      set(newValue) {
        const value = this.computedOption.value;
        const emitValue = value && newValue ? value : newValue;
        const parentEmitEvent = newValue ? EVENT_CHECKED : EVENT_CANCLE_CHECKED;
        this.$emit(EVENT_INPUT, emitValue);
        if (this.isInGroup) {
          this.$parent.$emit(parentEmitEvent, value || newValue);
        }
      }
    },
    _containerClass() {
      return {
        "jjsnc-checkbox-hollow": this.hollowStyle,
        "jjsnc-checkbox_checked": this.checkValue,
        "jjsnc-checkbox_disabled": this.computedOption.disabled,
        "border-right-1px": this.isInHorizontalGroup
      };
    },
    _wrapClass() {
      if (this.isInGroup && !this.isInHorizontalGroup) {
        return "border-bottom-1px";
      }
      return undefined;
    },
    isSquare() {
      return this.shape === "square" || this.hollowStyle;
    },
    _borderIconClass() {
      return this.isSquare ? "jjsncic-square-border" : "jjsncic-round-border";
    },
    _rightIconClass() {
      return this.isSquare ? "jjsncic-square-right" : "jjsncic-right";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/index";
$ui-width: 1.42em;
.jjsnc-checkbox {
  position: relative;
  padding: 0 16px;
  text-align: left;
  font-size: 100%;
  color: $checkbox-color;
  &[data-pos="right"] {
    .jjsnc-checkbox-ui {
      margin-right: 0;
      position: absolute;
      right: 0;
    }
    .jjsnc-checkbox-label {
      margin-right: $ui-width;
    }
  }
}
.jjsnc-checkbox-wrap {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 11px 0;
  line-height: 1.5;
  word-break: break-word;
  word-wrap: break-word;
}
.jjsnc-checkbox-input {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.jjsnc-checkbox-ui {
  position: relative;
  width: 1em;
  height: 1em;
  margin-right: $ui-width - 1em;
  line-height: 1;
  border-radius: 50%;
  &.jjsncic-square-border {
    border-radius: 2px;
  }
  &::before,
  i {
    transition: all 0.2s;
  }
  &::before {
    color: $checkbox-icon-color;
    display: inline-block;
    transform: scale(1.24);
  }
  i {
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    transform: scale(0.4);
  }
}
.jjsnc-checkbox_checked {
  .jjsnc-checkbox-ui {
    &::before {
      color: transparent;
    }
    i {
      color: $checkbox-checked-icon-color;
      transform: scale(1.23);
    }
  }
}
.jjsnc-checkbox_disabled {
  .jjsnc-checkbox-ui {
    background-color: $checkbox-disabled-icon-bgc;
    &::before,
    i {
      transition: none;
    }
    &::before {
      color: transparent;
    }
    i {
      color: $checkbox-disabled-icon-color;
    }
  }
}
.jjsnc-checkbox_checked.jjsnc-checkbox_disabled {
  .jjsnc-checkbox-ui {
    background-color: $checkbox-checked-icon-bgc;
  }
}
.jjsnc-checkbox-hollow {
  i {
    width: 100%;
    height: 100%;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%);
      background-color: currentColor;
      border-radius: 2px;
    }
  }
  &.jjsnc-checkbox_checked {
    .jjsnc-checkbox-ui {
      &::before {
        color: $checkbox-hollow-checked-icon-color;
      }
      i {
        transform: scale(1);
        color: $checkbox-hollow-checked-icon-color;
      }
    }
  }
  &.jjsnc-checkbox_disabled {
    .jjsnc-checkbox-ui {
      background-color: transparent;
      &::before {
        color: $checkbox-hollow-disabled-icon-color;
      }
      i {
        transform: scale(1);
        color: transparent;
      }
    }
    &.jjsnc-checkbox_checked {
      .jjsnc-checkbox-ui {
        i {
          color: $checkbox-hollow-disabled-icon-color;
        }
      }
    }
  }
}
</style>
