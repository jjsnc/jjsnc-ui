<template>
  <form
    ref="form"
    class="jjsnc-form"
    :class="formClass"
    :action="action"
    @submit="submitHandler"
    @reset="resetHandler"
  >
    <slot>
      <jjsnc-form-group
        v-for="(group, index) in groups"
        :fields="group.fields"
        :legend="group.legend"
        :key="index"
      />
    </slot>
  </form>
</template>

<script>
import { dispatchEvent } from "../../common/helpers/dom";
import { cb2PromiseWithResolve } from "../../common/helpers/util";
import jjsncFormGroup from "./form-group.vue";
import LAYOUTS from "./layouts";
import mixin from "./mixin";

const COMPONENT_NAME = "jjsnc-form";
const EVENT_SUBMIT = "submit";
const EVENT_RESET = "reset";
const EVENT_VALIDATE = "validate";
const EVENT_VALID = "valid";
const EVENT_INVALID = "invalid";

export default {
  name: COMPONENT_NAME,
  mixins: [mixin],
  props: {
    action: String,
    model: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {};
      }
    },
    schema: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {
          scrollToInvalidField: false,
          layout: LAYOUTS.STANDARD
        };
      }
    },
    immediateValidate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      validatedCount: 0,
      dirty: false,
      firstInvalidField: null,
      firstInvalidFieldIndex: -1
    };
  },
  computed: {
    groups() {
      const schema = this.schema;
      const groups = schema.groups || [];
      if (schema.fields) {
        groups.unshift({
          fields: schema.fields
        });
      }
      return groups;
    },
    layout() {
      const options = this.options;
      const layout = (options && options.layout) || LAYOUTS.STANDARD;
      return layout;
    },
    formClass() {
      const invalid = this.invalid;
      const valid = this.valid;
      const layout = this.layout;
      return {
        "jjsnc-form_standard": layout === LAYOUTS.STANDARD,
        "jjsnc-form_groups": this.groups.length > 1,
        "jjsnc-form_validating": this.validating,
        "jjsnc-form_pending": this.pending,
        "jjsnc-form_valid": valid,
        "jjsnc-form_invalid": invalid,
        "jjsnc-form_classic": layout === LAYOUTS.CLASSIC,
        "jjsnc-form_fresh": layout === LAYOUTS.FRESH
      };
    }
  },
  watch: {
    validatedCount() {
      this.$emit(EVENT_VALIDATE, {
        validity: this.validity,
        valid: this.valid,
        invalid: this.invalid,
        dirty: this.dirty,
        firstInvalidFieldIndex: this.firstInvalidFieldIndex
      });
    }
  },
  beforeCreate() {
    this.form = this;
    this.fields = [];
    this.validity = {};
  },
  mounted() {
    if (this.immediateValidate) {
      this.validate();
    }
  },
  methods: {
    submit(skipValidate = false) {
      this.skipValidate = skipValidate;
      dispatchEvent(this.$refs.form, "submit");
      this.skipValidate = false;
    },
    reset() {
      dispatchEvent(this.$refs.form, "reset");
    },
    submitHandler(e) {
      // sync all fields value because of trigger: blur or debounce
      this.syncValidatorValues();
      if (this.skipValidate) {
        this.$emit(EVENT_SUBMIT, e, this.model);
        return;
      }
      const submited = submitResult => {
        if (submitResult) {
          this.$emit(EVENT_VALID, this.validity);
          this.$emit(EVENT_SUBMIT, e, this.model);
        } else {
          e.preventDefault();
          this.$emit(EVENT_INVALID, this.validity);
        }
      };
      if (this.valid === undefined) {
        this._submit(submited);
        if (this.validating || this.pending) {
          // async validate
          e.preventDefault();
        }
      } else {
        submited(this.valid);
      }
    },
    resetHandler(e) {
      this._reset();
      this.$emit(EVENT_RESET, e);
    },
    _submit(cb) {
      this.validate(() => {
        if (this.invalid) {
          if (this.options.scrollToInvalidField && this.firstInvalidField) {
            this.firstInvalidField.$el.scrollIntoView();
          }
        }
        cb && cb(this.valid);
      });
    },
    _reset() {
      this.fields.forEach(fieldComponent => {
        fieldComponent.reset();
      });
      this.setValidity();
      this.setValidating();
      this.setPending();
    },
    syncValidatorValues() {
      this.fields.forEach(fieldComponent => {
        fieldComponent.syncValidatorValue();
      });
    },
    validate(cb) {
      const promise = cb2PromiseWithResolve(cb);
      if (promise) {
        cb = promise.resolve;
      }
      let doneCount = 0;
      const len = this.fields.length;
      this.originValid = undefined;
      this.fields.forEach(fieldComponent => {
        fieldComponent.validate(() => {
          doneCount++;
          if (doneCount === len) {
            // all done
            cb && cb(this.valid);
          }
        });
      });
      return promise;
    },
    updateValidating() {
      const validating = this.fields.some(
        fieldComponent => fieldComponent.validating
      );
      this.setValidating(validating);
    },
    updatePending() {
      const pending = this.fields.some(
        fieldComponent => fieldComponent.pending
      );
      this.setPending(pending);
    },
    setValidating(validating = false) {
      this.validating = validating;
    },
    setPending(pending = false) {
      this.pending = pending;
    },
    updateValidity(modelKey, valid, result, dirty) {
      const curResult = this.validity[modelKey];
      if (
        curResult &&
        curResult.valid === valid &&
        curResult.result === result &&
        curResult.dirty === dirty
      ) {
        return;
      }
      this.setValidity(modelKey, {
        valid,
        result,
        dirty
      });
    },
    setValidity(key, val) {
      let validity = {};
      if (key) {
        Object.assign(validity, this.validity);
        if (val === undefined) {
          delete validity[key];
        } else {
          validity[key] = val;
        }
      }

      let dirty = false;
      let invalid = false;
      let valid = true;
      let firstInvalidFieldKey = "";
      this.fields.forEach(fieldComponent => {
        const modelKey = fieldComponent.fieldValue.modelKey;
        if (modelKey) {
          const retVal = validity[modelKey];
          if (retVal) {
            if (retVal.dirty) {
              dirty = true;
            }
            if (retVal.valid === false) {
              valid = false;
            } else if (valid && !retVal.valid) {
              valid = retVal.valid;
            }

            if (!invalid && retVal.valid === false) {
              // invalid
              invalid = true;
              firstInvalidFieldKey = modelKey;
            }
          } else if (fieldComponent.hasRules) {
            if (valid) {
              valid = undefined;
            }
            validity[modelKey] = {
              valid: undefined,
              result: {},
              dirty: false
            };
          }
        }
      });
      this.validity = validity;
      this.dirty = dirty;
      this.originValid = valid;
      this.setFirstInvalid(firstInvalidFieldKey);
      this.validatedCount++;
    },
    setFirstInvalid(key) {
      if (!key) {
        this.firstInvalidField = null;
        this.firstInvalidFieldIndex = -1;
        return;
      }
      this.fields.some((fieldComponent, index) => {
        if (fieldComponent.fieldValue.modelKey === key) {
          this.firstInvalidField = fieldComponent;
          this.firstInvalidFieldIndex = index;
          return true;
        }
      });
    },
    addField(fieldComponent) {
      this.fields.push(fieldComponent);
    },
    destroyField(fieldComponent) {
      const i = this.fields.indexOf(fieldComponent);
      this.fields.splice(i, 1);
      this.setValidity(fieldComponent.fieldValue.modelKey);
    }
  },
  beforeDestroy() {
    this.form = null;
    this.firstInvalidField = null;
  },
  components: {
    jjsncFormGroup
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable.scss";
@import "../../common/scss/mixin.scss";

.jjsnc-form {
  position: relative;
  font-size: $fontsize-large;
  line-height: 1.429;
  color: $form-color;
  background-color: $form-bgc;
}
.jjsnc-form_groups {
  .jjsnc-form-group-legend {
    padding: 10px 15px;
    &:empty {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
}
.jjsnc-form_standard {
  .jjsnc-form-item {
    min-height: 46px;
  }
  .jjsnc-form-field {
    flex: 1;
    font-size: $fontsize-medium;
  }
  .jjsnc-validator {
    display: flex;
    align-items: center;
    position: relative;
  }
  .jjsnc-validator_invalid {
    color: $form-invalid-color;
  }
  .jjsnc-validator-content {
    flex: 1;
  }
  .jjsnc-validator-msg-def {
    font-size: 0;
  }
  .jjsnc-validator_invalid {
    .jjsnc-validator-msg {
      &::before {
        content: "\e614";
        padding-left: 5px;
        font-family: "jjsnc-icon" !important;
        font-size: $fontsize-large-xx;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
      }
    }
  }
  .jjsnc-form-label {
    width: 100px;
    padding-right: 10px;
  }
  .jjsnc-checkbox-group,
  .jjsnc-radio-group {
    &::before,
    &::after {
      display: none;
    }
  }
  .jjsnc-input {
    input {
      padding: 13px 0;
      background-color: transparent;
    }
    &::after {
      display: none;
    }
  }
  .jjsnc-textarea-wrapper {
    padding: 13px 0;
    height: 20px;
    &.jjsnc-textarea_expanded {
      height: 60px;
      padding-bottom: 20px;
      .jjsnc-textarea-indicator {
        bottom: 2px;
      }
    }
    .jjsnc-textarea {
      padding: 0;
      background-color: transparent;
    }
    &::after {
      display: none;
    }
  }
  .jjsnc-select {
    padding-left: 0;
    background-color: transparent;
    &::after {
      display: none;
    }
  }
  .jjsnc-upload-def {
    padding: 5px 0;
    .jjsnc-upload-btn,
    .jjsnc-upload-file {
      margin: 5px 10px 5px 0;
    }
  }
}
.jjsnc-form_classic {
  .jjsnc-form-item {
    display: block;
    padding: 15px;
    &:last-child {
      padding-bottom: 30px;
    }
    &::after {
      display: none;
    }
    .jjsnc-validator-msg {
      position: absolute;
      margin-top: 3px;
      &::before {
        display: none;
      }
    }
    .jjsnc-validator-msg-def {
      font-size: $fontsize-small;
    }
  }
  .jjsnc-form-item_btn {
    padding-top: 0;
    padding-bottom: 0;
    &:last-child {
      padding-bottom: 0;
    }
  }
  .jjsnc-form-label {
    padding-bottom: 15px;
  }
}
.jjsnc-form_fresh {
  .jjsnc-form-item {
    display: block;
    padding: 2em 15px 10px;
    &::after {
      display: none;
    }
    .jjsnc-validator-msg {
      position: absolute;
      top: 1em;
      right: 15px;
      bottom: auto;
      margin-top: -0.4em;
      font-size: $fontsize-small;
      &::before {
        display: none;
      }
    }
    .jjsnc-validator-msg-def {
      font-size: 100%;
    }
  }
  .jjsnc-form-item_btn {
    padding-top: 0;
    padding-bottom: 0;
    &:last-child {
      padding-bottom: 0;
    }
  }
  .jjsnc-form-label {
    position: absolute;
    top: 1em;
    margin-top: -0.4em;
    font-size: $fontsize-small;
  }
}
</style>
