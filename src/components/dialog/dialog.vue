<template>
  <transition name="jjsnc-dialog-fade">
    <jjsnc-popup
      type="dialog"
      :z-index="zIndex"
      :mask="true"
      :center="true"
      v-show="isVisible"
      @mask-click="maskClick"
    >
      <div class="jjsnc-dialog-main">
        <span class="jjsnc-dialog-close" v-show="showClose" @click="close">
          <i class="jjsncie-close"></i>
        </span>
        <div :class="containerClass">
          <p class="jjsnc-dialog-icon" v-if="icon">
            <i :class="icon"></i>
          </p>
          <h2 v-if="title|| $slots.title" class="jjsnc-dialog-title">
            <slot name="title">
              <p class="jjsnc-dialog-title-def">{{title}}</p>
            </slot>
          </h2>
          <div class="jjsnc-dialog-content">
            <slot name="center">
              <div class="jjsnc-dialog-content-def">
                <p v-html="content" v-if="content">
                  <jjsnc-input v-bind="prompt" v-model="promptValue" v-if="isPrompt"></jjsnc-input>
                </p>
              </div>
            </slot>
          </div>
          <div class="jjsnc-dialog-btns" :class="{'border-right-1px': isConfirm || isPrompt}">
            <slot name="btns">
              <a
                :href="_cancelBtn.href"
                class="jjsnc-dialog-btn border-top-1px"
                :class="{'jjsnc-dialog-btn_highlight': _cancelBtn.active, 'jjsnc-dialog-btn_disabled': _cancelBtn.disabled}"
                v-if="isConfirm || isPrompt"
                @click="cancel"
              >{{_cancelBtn.text}}</a>
              <a
                :href="_confirmBtn.href"
                class="jjsnc-dialog-btn border-top-1px"
                :class="{'jjsnc-dialog-btn_highlight': _confirmBtn.active, 'jjsnc-dialog-btn_disabled': _confirmBtn.disabled}"
                @click="confirm"
              >{{_confirmBtn.text}}</a>
            </slot>
          </div>x
        </div>
      </div>
    </jjsnc-popup>
  </transition>
</template>

<script>
import jjsncPopup from "../popup/popup.vue";
import jjsncInput from "../input/input.vue";
import visibilityMixin from "../../common/mixins/visibility";
import popupMixin from "../../common/mixins/popup";
import localeMixin from "../../common/mixins/locale";

const COMPONENT_NAME = "jjsnc-dialog";
const EVENT_CONFIRM = "confirm";
const EVENT_CANCEL = "cancel";
const EVENT_CLOSE = "close";

const defHref = "javascropt:;";

const defConfirmBtn = {
  textType: "ok",
  active: "true",
  disabled: "false",
  href: defHref
};

const defCancelBtn = {
  textType: "cancel",
  active: false,
  disabled: false,
  href: defHref
};

const parseBtn = function(btn, defBtn) {
  if (typeof btn === "string") {
    btn = {
      text: btn
    };
  }
  const text = defBtn && this.$t(defBtn.textType);
  return Object.assign({}, defBtn, { text }, btn);
};

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin, popupMixin, localeMixin],
  props: {
    type: {
      type: String,
      default: "alert"
    },
    prompt: {
      type: Object,
      default() {
        return {
          value: "",
          placeholder: ""
        };
      }
    },
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    showClose: {
      type: Boolean,
      default: false
    },
    confirmBtn: {
      type: [Object, String],
      default() {
        return {
          ...defConfirmBtn
        };
      }
    },
    cancelBtn: {
      type: [Object, String],
      default() {
        return {
          ...defCancelBtn
        };
      }
    }
  },
  data() {
    return {
      defHref,
      promptValue: this.prompt.value
    };
  },
  computed: {
    _confirmBtn() {
      return parseBtn.call(this, this.confirmBtn, defConfirmBtn);
    },
    _cancelBtn() {
      return parseBtn.call(this, this.cancelBtn, defCancelBtn);
    },
    isConfirm() {
      return this.type === "confirm";
    },
    isPrompt() {
      return this.type === "prompt";
    },
    containerClass() {
      return `jjsnc-dialog-${this.type}`;
    }
  },
  watch: {
    "prompt.value": {
      handler: function(newVal) {
        this.promptValue = newVal;
      }
    }
  },
  methods: {
    maskClick(e) {
      this.maskClosable && this.cancel(e);
    },
    confirm(e) {
      if (this._confirmBtn.disabled) {
        return;
      }
      this.hide();
      this.$emit(EVENT_CONFIRM, e, this.promptValue);
    },
    cancel(e) {
      if (this._cancelBtn.disabled) {
        return;
      }
      this.hide();
      this.$emit(EVENT_CANCEL, e);
    },
    close(e) {
      this.hide();
      this.$emit(EVENT_CLOSE, e);
    }
  },
  components: {
    jjsncPopup,
    jjsncInput
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable.scss";
@import "../../common/scss/mixin.scss";

.jjsnc-dialog-main {
  width: 270px;
  padding: 0;
  text-align: center;
  overflow: hidden;
  border-radius: 2px;
  background-color: $dialog-bgc;
}
.jjsnc-dialog-confirm, .jjsnc-dialog-alert {
  position: relative;
  overflow: hidden;
}
.jjsnc-dialog-icon {
  margin-top: 20px;
  margin-bottom: 16px;
  line-height: 1;
  color: $dialog-icon-color;
  font-size: $fontsize-large-xxxx;
  i {
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 10px;
    box-sizing: content-box;
    border-radius: 50%;
    background-color: $dialog-icon-bgc;
  }
  + {
    .jjsnc-dialog-title {
      .jjsnc-dialog-title-def {
        margin-top: 0;
      }
    }
  }
  + {
    .jjsnc-dialog-content {
      margin-top: -4px;
    }
  }
}
.jjsnc-dialog-title {
  color: $dialog-title-color;
  font-size: $fontsize-large;
  line-height: 1;
  + {
    .jjsnc-dialog-content {
      margin-top: 12px;
    }
  }
}
.jjsnc-dialog-title-def {
  margin: 30px 16px 0;
  overflow: hidden;
  white-space: nowrap;
}
.jjsnc-dialog-content {
  margin: 16px 0;
  text-align: left;
  color: $dialog-color;
  font-size: $fontsize-medium;
  line-height: 22px;
}
.jjsnc-dialog-content-def {
  padding: 0 16px;
  > p {
    display: table;
    margin: auto;
    + .jjsnc-input {
      margin-top: 12px;
    }
  }
}
.jjsnc-dialog-confirm, .jjsnc-dialog-prompt {
  .jjsnc-dialog-btns {
    .jjsnc-dialog-btn {
      width: 50%;
      float: left;
    }
    &.border-right-1px {
      &::after {
        right: 50%;
        border-color: $dialog-btns-split-color;
      }
    }
  }
}
.jjsnc-dialog-close {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  color: $dialog-close-color;
  font-size: $fontsize-large-x;
}
.jjsnc-dialog-btns {
  overflow: hidden;
  width: 100%;
  font-size: 0;
}
.jjsnc-dialog-btn {
  display: inline-block;
  width: 100%;
  padding: 17px 10px;
  margin: 0;
  font-size: $fontsize-large;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  color: $dialog-btn-color;
  background-color: $dialog-btn-bgc;
  background-clip: padding-box;
  box-sizing: border-box;
  &:active {
    background-color: $dialog-btn-active-bgc;
  }
}
.jjsnc-dialog-btn_highlight {
  color: $dialog-btn-highlight-color;
  &:active {
    background-color: $dialog-btn-highlight-active-bgc;
  }
}
.jjsnc-dialog-btn_disabled {
  color: $dialog-btn-disabled-color;
  &:active {
    background-color: $dialog-btn-disabled-active-bgc;
  }
}

.jjsnc-dialog-fade-enter-active {
  animation: dialog-fadein 0.4s;
  .jjsnc-dialog-main {
    animation: dialog-zoom 0.4s;
  }
}

@-webkit-keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@-ms-keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dialog-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>


