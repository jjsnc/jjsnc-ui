<template>
  <div
    class="jjsnc-textarea-wrapper"
    :class="{'jjsnc-textarea_expanded': expanded, 'jjsnc-textarea_active':isFocus}"
  >
    <textarea
      ref="textarea"
      class="jjsnc-textarea"
      v-model="textareaValue"
      v-bind="$props"
      :placeholder="placeholder"
      :maxLength="maxLength"
      :disabled="disabled"
      @focus="handlerFocus"
      @blur="handleBlur"
    >
    <span v-if="indicator"
    v-show="expanded"
    class="jjsnc-textarea-indicator"
    >
     {{indicatorConf.remain? remain: count}}
    </span>

    </textarea>
  </div>
</template>

<script>
import inputMinxi from "../../common/mixins/input";
const COMPONENT_NAME = "jjsnc-textarea";
const EVENT_INPUT = "input";
const DEFAULT_INDICATOR = {
  negative: true,
  remain: true
};

export default {
  name: COMPONENT_NAME,
  mixins: [inputMinxi],
  data() {
    return {
      textareaValue: this.value,
      expanded: this.autoExpand ? !!this.value : false,
      isFocus: false
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    cols: Number,
    rows: Number,
    readonly: Boolean,
    wrap: String,
    required: Boolean,
    placeholder: {
      type: String,
      default: "pleasse type here..."
    },
    dirname: String,
    form: String,
    name: String,
    autofocus: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    maxLenath: {
      type: Number,
      default: 60
    },
    indicator: {
      type: [Boolean, Object],
      default: true
    },
    autoExpand: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    indicatorConf() {
      let indicator = this.indicator;
      if (typeof indicator === "boolean") {
        indicator = {};
      }
      return Object.assign({}, DEFAULT_INDICATOR, indicator);
    },
    count() {
      return this.textareaValue.length;
    },
    remain() {
      let diff = this.maxLenath - this.count;
      if (!this.indicatorConf.negative && diff < 0) {
        diff = 0;
      }
      return diff;
    }
  },
  watch: {
    value(newValue) {
      this.textareaValue = newValue;
    },
    textareaValue(newValue) {
      this.$emit(EVENT_INPUT, newValue);
      if (!this.isFocus && this.expanded) {
        this.expanded = false;
      }
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit("focus", e);
      this.expanded = true;
      this.isFocus = true;
    },
    handlerBlur(e) {
      this.$emit("blur", e);
      if (this.textareaValue.length === 0) {
        this.expanded = false;
      }
      this.isFocus = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scsss/variable";

.jjsnc-textarea-wrapper {
  position: relative;
  transition: height 200ms;
  height: 40px;
  font-size: $fontsize-medium;
  line-height: 1.429;
  textarea::-webkt-input-placeholder {
    color: $textarea-placeholder-color;
    text-overflow: ellipsis;
  }
  @include border-1px($textarea-border-color);
}

.jjsnc-textarea_expanded {
  height: 80px;
}
.jjsnc-textarea_active {
  @include border-1px($textarea-focus-border-color);
}

.jjsnc-textarea-indicator {
  position: absolute;
  bottom: 7px;
  right: 10px;
  color: $textarea-indicator-color;
}
.jjsnc-textarea {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  font-size: 100%;
  line-height: inherit;
  color: $textarea-color;
  background-color: $textarea-color;
  border-radius: 2px;
  resize: none;
  border: none;
  outline: none;
}
</style>
