<template>
  <div class="jjsnc-input" :class="{'jjsnc-input_active': isFocus}">
    <div class="jjsnc-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="jjsnc-input-field"
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="_type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander"
    >
    <div class="jjsnc-input-append" v-if="$slots.append || _showClear || _showPwdEye">
      <div class="jjsnc-input-clear" v-if="_showClear" @touchend="handleClear">
        <i class="jjsncic-wrong"></i>
      </div>
      <div class="jjsnc-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
        <i :class="eyeClass"></i>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import inputMixin from "../../common/mixins/input";
const COMPONENT_NAME = "jjsnc-input";
const EVENT_INPUT = "input";
const EVENT_CHANGE = "change";
const EVENT_BLUR = "blur";
const EVENT_FOCUS = "focus";

export default {
  name: COMPONENT_NAME,
  mixins: [inputMixin],
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    name: String,
    id: String,
    form: String,
    minLength: Number,
    maxLength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String,
    clearable: {
      type: [Boolean, Object],
      default: false
    },
    eye: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      formatedClearable: {
        visible: false,
        blurHidden: true
      },
      formatedEye: {
        open: false,
        reverse: false
      }
    };
  },
  computed: {
    _type() {
      const type = this.type;
      if (type === "password" && this.eye && this.pwdVisible) {
        return "text";
      }
      return type;
    },
    _showClear() {
      let visible =
        this.formatedClearable.visible &&
        this.inputValue &&
        !this.readonly &&
        !this.disabled;
      if (this.formatedClearable.blurHidden && !this.isFocus) {
        visible = false;
      }
      return visible;
    },
    _showPwdEye() {
      return this.type === "password" && this.eye && !this.disabled;
    },
    pwdVisible() {
      const eye = this.formatedEye;
      return eye.reverse ? !eye.open : eye.open;
    },
    eyeClass() {
      return this.formatedEye.open
        ? "jjsncic-eye-visible"
        : "jjsncic-eye-invisible";
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
    inputValue(newValue) {
      this.$emit(EVENT_INPUT, newValue);
    },
    clearable: {
      handler() {
        this.formatClearable();
      },
      deep: true,
      immediate: true
    },
    eye: {
      handler() {
        this.formateEye();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    changeHander(e) {
      this.$emit(EVENT_CHANGE, e);
    },
    formatClearable() {
      if (typeof this.clearable === "boolean") {
        this.formatedClearable.visible = this.clearable;
      } else {
        Object.assign(this.formatedClearable, this.clearable);
      }
    },
    formateEye() {
      if (typeof this.eye === "boolean") {
        this.formatedEye.open = this.eye;
      } else {
        Object.assign(this.formatedEye, this.eye);
      }
    },
    handleFocus(e) {
      this.$emit(EVENT_FOCUS, e);
      this.isFocus = true;
    },
    handleBlur(e) {
      this.$emit(EVENT_BLUR, e);
      this.isFocus = false;
    },
    handleClear(e) {
      this.inputValue = "";
      this.$refs.input.focus();
    },
    handlePwdEye() {
      this.formatedEye.open = !this.formatedEye.open;
    }
  }
};
</script>

<style lang="scss" rel>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/index";
.jjsnc-input {
  display: flex;
  align-items: center;
  font-size: $fontsize-medium;
  line-height: 1.429;
  background-color: $input-bgc;
  @include border-1px($input-border-color);
}
.jjsnc-input-field {
  display: block;
  flex: 1;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: $input-color;
  line-height: inherit;
  background-color: inherit;
  border-radius: 2px;
  outline: none;
  &::-webkit-input-placeholder {
    color: $input-placeholder-color;
    text-overflow: ellipsis;
  }
  + .jjsnc-input-append {
    .jjsnc-input-clear,
    .jjsnc-input-eye {
      &:first-child {
        margin-left: -5px;
      }
    }
  }
}
.jjsnc-input_active {
  &::after {
    border-color: $input-focus-border-color;
  }
}
.jjsnc-input-prepend,
.jjsnc-input-append {
  display: flex;
  align-items: center;
}
.jjsnc-input-clear,
.jjsnc-input-eye {
  width: 1em;
  height: 1em;
  line-height: 1;
  padding: 10px;
  box-sizing: content-box;
  color: $input-clear-icon-color;
  > i {
    display: inline-block;
    transform: scale(1.2);
  }
}
.jjsnc-input-eye {
  > {
    .jjsncic-eye-invisible,
    .jjsncic-eye-visible {
      transform: scale(1.4);
    }
  }
}
</style>
