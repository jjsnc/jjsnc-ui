<template>
  <transition name="jjsnc-toast-fade">
    <jjsnc-popup
      type="toast"
      :z-index="zIndex"
      :mask="mask"
      v-show="isVisible"
      @mask-click="maskClick"
    >
      <i v-if="!isLoading && iconClass.length" class="jjsnc-toast-icon" :class="iconClass"></i>
      <jjsnc-loading v-if="isLoading"></jjsnc-loading>
      <div v-show="txt" class="jjsnc-toast-tip" v-html="txt"></div>
    </jjsnc-popup>
  </transition>
</template>

<script>
import jjsncLoading from "../loading/loading.vue";
import jjsncPopup from "../popup/popup.vue";
import visibilityMixin from "../../common/mixins/visibility";
import popupMixin from "../../common/mixins/popupƒ";
import { setTimeout } from "timers";

const COMPONENT_NAME = "jjsnc_toast";

const EVENT_TIMEOUT = "timeout";
export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin, popupMixin],
  props: {
    type: {
      type: String,
      default: "loading"
    },
    icon: {
      type: String,
      default: ""
    },
    mask: {
      type: Boolean,
      default: false
    },
    txt: {
      type: String,
      default: ""
    },
    time: {
      type: Number,
      default: 3000
    },
    // By default, Toast has the bigest z-index among popoup-based components.
    zIndex: {
      type: Number,
      default: 900
    }
  },
  computed: {
    iconClass() {
      const iconClass = [];
      if (this.icon) {
        iconClass.push(this.icon);
      }
      const classMap = {
        correct: "jjsncic-right",
        error: "jjsncic-wrong",
        warn: "jjsncic-warn"
      };
      const icon = classMap[this.type];
      if (icon) {
        iconClass.push(icon);
      }
      return iconClass;
    },
    isLoading() {
      return this.type === "loading";
    }
  },
  methods: {
    maskClick() {
      this.maskClosable && this.hide();
    },
    show() {
      this.isVisible = true;
      this.clearTimer();
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide();
            this.$emit(EVENT_TIMEOUT);
          }, this.time);
        }
      });
    },
    hide() {
      this.isVisible = false;
      this.clearTimer();
    },
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  components: {
    jjsncPopup,
    jjsncLoading
  }
};
</script>
<style lang="scss">
@import "../../common/scss/variable.scss";
.jjsnc-toast {
  &.jjsnc-popup {
    z-index: 900;
  }
  .jjsnc-popup-content {
    display: flex;
    align-items: center;
    padding: 13px 16px;
    color: $toast-color;
    background-color: $toast-bgc;
    border-radius: 2px;
  }
}
.jjsnc-toast-icon {
  width: 24px;
  height: 24px;
  font-size: $fontsize-large-xxx;
}
.jjsnc-toast-tip {
  line-height: 20px;
  font-size: $fontsize-medium;
  max-width: 12em;
  max-height: 40px;
  overflow: hidden;
}
.jjsnc-toast-icon, .jjsnc-loading {
  ~ .jjsnc-toast-tip {
    margin-left: 8px;
  }
}

.jjsnc-toast-fade-enter-active {
  animation: toast-in 0.2s;
}
.jjsnc-toast-fade-leave-active {
  animation: toast-out 0.2s;
}

@-webkit-keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes toast-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes toast-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>

