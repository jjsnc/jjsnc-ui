<template>
  <div class="jjsnc-from-item border-bottom-1px" ref="formItem" :class="itemClass">
    <template v-if="!isBtnField">
      <slot name="label">
        <div class="jjsnc-form-label" v-show="fieldValue.label">
          <span>{{fieldValue.label}}</span>
        </div>
      </slot>
      <jjsnc-validator
        class="jjsnc-form-field"
        v-if="hasRules"
        ref="validator"
        v-model="originValid"
        :disabled="validatorDisabled"
        :model="validatorModel"
        :model-key="validatorModelKey"
        :rules="fieldValue.rules"
        :messages="fieldValue.messages"
        @imput="validatorChangeHandler"
        @validating="validatingHandler"
        @msg-click="msgClick"
      ></jjsnc-validator>
    </template>
    <jjsnc-btn v-bind="fieldValue.props" v-else>{{fieldValue.label}}</jjsnc-btn>
  </div>
</template>
<script>
import { processField } from "./fields/index";
import jjsncValidator from "../validator/validator.vue";
import mixin from "./mixin";

export default {
  mixins: [mixin],
  props: {
    field: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {};
      }
    }
  },
  data(){
    const validatorModelKey = 'value'
    const modelKey = this.field.modelKey
      const modelValue = modelKey ? this.form.model[modelKey] : null
    return {
           validatorDisabled: false,
           validatorModel:{
               [validatorModelKey]: modelValue
           }
    }
  },
  computed: {
    fieldValue() {
      return processField(this.field);
    },
    hasRules() {
      return Object.keys(this.fieldValue.rules || {}).length > 0;
    },
    isBtnField() {
      return this.fieldValue.type === "button";
    },
    itemClass() {
      const rules = this.fieldValue.rules;
      // only handle required rule for now
      return {
        "jjsnc-form-item_required": rules && rules.required,
        "jjsnc-form-item_btn": this.isBtnField,
        "jjsnc-form-item_validating": this.validating,
        "jjsnc-form-item_peding": this.pending,
        "jjsnc-form-item_valid": this.valid,
        "jjsnc-fomr-item_invalid": this.invalid
      };
    }
  },
  components: {
    jjsncValidator
  },
  watch:{
      originValid(newVal){
          this.lastOriginValid = newVal
      }
  }
};
</script>
<style lang="scss">
</style>
