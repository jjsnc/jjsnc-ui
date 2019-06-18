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
  name: "COMPONENT_NAME",
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
    confirmBtn :{
      type: [Object, String],
      default(){
        return {
          ...defConfirmBtn
        }
      }
    },
    cancelBtn :{
      type: [Object, String],
      default(){
        ...defCancelBtn
      }
    }
  },
  components: {
    jjsncPopup,
    jjsncInput
  }
};
</script>

<style lang="scss">
.jjsnc-dialog-fade-enter-active {
  animation: dialog-fadein 0.4s;
}
@keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


