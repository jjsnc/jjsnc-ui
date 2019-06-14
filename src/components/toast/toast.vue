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
</style>

