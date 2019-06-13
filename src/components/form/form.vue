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
          this.$$emit(EVENT_SUBMIT, e, this.model);
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
        fieldComponent.syncValidatorValues();
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
    updateValidating(modelKey, valid, result, dirty) {
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
    }
  }
};
</script>

<style lang="scss">
</style>
