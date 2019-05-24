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
      @change="changeHandler"
    >
    <div class="jjsnc-input-append" v-if="$slots.append || _showClear || _showPwdEye">
      <div class="jjsnc-input-clear" v-if="_showClear" @touched="handleClear">
        <i class="jjsncic-wrong"></i>
      </div>
      <div class="jjsnc-input-eye" v-if="_showPwEye" @click="handlePwdEye">
        <i :class="eyeClass"></i>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import inputMixin from "../../common/mixins/input";
const COMPONENT_NAME = 'jjsnc-inpit';
const EVENT_INPUT = "input";
const EVENT_BLUE = "blur";
const EVENT_FOCUS = 'focus';
export default {
    name: COMPONENT_NAME,
    mixins:[inputMixin],
    props:{
        value:[String, Number],
        type:{
            type:String,
            default:'text'
        },
        disabled:{
           type:Boolean,
           default: false
        },
        autofocus:{
            type:Boolean,
            default:false
        }

    }

};
</script>

<style lang="scss" >
</style>
