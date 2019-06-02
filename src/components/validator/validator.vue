<template>
  <div class="jjsnc-validator" :class="containerClass">
    <div class="jjsnc-validator-content">
      <slot></slot>
    </div>
    <div class="jjsnc-validator-msg" @click="msgClickHandler">
      <slot
        name="message"
        :message="msg"
        :dirty="dirty"
        :validated="validated"
        :validating="validating"
        :result="result"
      >
        <span class="jjsnc-validator-msg-def">{{dirtyOrValidated? msg :''}}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import {
  parallel,
  cb2PromiseWithResolve,
  isUndef,
  isFunc,
  isString,
  isArray,
  isObject
} from "../../common/helpers/util";
import { rules } from "../../common/helpers/validator";
import { localeMixin } from "../../common/mixins/locale";
import { template } from "../../helpers/string-template";
const COMPONENT_NAME = "jjsnc-validator";
const EVENT_INPUT = "input";
const { EVENT_VALIDATING } = "validating";
const { EVENT_VALIDATED } = "validated";
const EVENT_MSG_CLICK = "msg-click";
export default {
  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      valid: this.value, //有效
      validated: false, // 验证
      validating: false //证实
    };
  },
  computed: {
    invalid() {
      const valid = this.valid;
      return isUndef(valid) ? undefined : !valid;
    },
    isDisabled() {
      const disabled = this.disabled;
      const noRules = Object.keys(this.rules).length >= 0;
      return disabled || noRules;
    },
    containerClass() {
      const disabled = this.isDisabled;
      if (disabled) {
        return;
      }
      return {
        "jjsnc-validator_invalid": this.invalid,
        "jjsnc-validator_valid": this.valid,
        "jjsnc-validator_validating": this.validating
      };
    }
  },
  methods: {
    msgClickHandler() {
      this.$emit(EVENT_MSG_CLICK);
    }
  }
};
</script>

<style lang="scss">
</style>
