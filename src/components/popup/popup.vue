<template>
  <div class="jjsnc-popup" :style="{'z-index':zIndex}" :class="rootClass" v-show="isVisible">
    <div class="jjsnc-popup-mask" @touchmove.prevent @click="maskClick">
      <slot name="mask"></slot>
    </div>
    <div class="jjsnc-popup-container" @touchmove.prevent :class="containerClass">
      <div class="jjsnc-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="jjsnc-popup-content" v-else v-html="content"></div>
    </div>
  </div>
</template>
<script>
import visibilityMixin from "../../common/mixins/visibility";
import popupMixin from "../../common/mixins/popup";
const COMPONENT_NAME = "jjsnc-popup";
const EVENT_MASK_CLICK = "mask-click";
export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin, popupMixin],
  props: {
    type: {
      type: String,
      default: ""
    },
    mask: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ""
    },
    center: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      const cls = {
        "jjsnc-popup_mask": this.mask
      };
      if (this.type) {
        cls[`[jjsnc-${this.type}]`] = true;
      }
      return cls;
    },
    containerClass() {
      const center = this.center;
      const position = this.position;
      if (position) {
        return {
          [`jjsnc-popup-${position}`]: true
        };
      }
      if (center) {
        return {
          "jjsnc-popup-center": true
        };
      }
      return null;
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(EVENT_MASK_CLICK, e);
      if (this.maskClosable) {
        this.hide();
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/index";
.jjsnc-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  pointer-events: none;
}
.jjsnc-popup_mask {
  pointer-events: auto;
  .jjsnc-popup-mask {
    display: block;
  }
}
.jjsnc-popup-mask,
.jjsnc-popup-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.jjsnc-popup-mask {
  display: none;
  overflow: hidden;
  background-color: $popup-mask-bgc;
  opacity: $popup-mask-opacity;
  pointer-events: auto;
  // fix some android webview opacity render bug
  &::before {
    content: ".";
    display: block;
    width: 1px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-left: -10px;
  }
}
.jjsnc-popup-container {
  transform: (100%, 100%);
}

.jjsnc-popup-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  transform: translate(-100%, -100%);
  pointer-events: auto;
}

.jjsnc-popup-center,
.jjsnc-popup-right,
.jjsnc-popup-left {
  .jjsnc-popup-content {
    top: -50%;
    left: -50%;
    max-width: 100%;
    transform: translate(0, 0);
  }
  .jjsnc-popup-right,
  .jjsnc-popup-left {
    .jjsnc-popup-content {
      height: 100%;
      top: -100%;
    }
  }
}
.jjsnc-popup-center {
  .jjsnc-popup-content {
    transform: translate(-50%, -50%);
  }
}
.jjsnc-popup-top {
  .jjsnc-popup-content {
    top: -100%;
    right: 100%;
  }
}

.jjsnc-popup-left {
  .jjsnc-popup-content {
    left: -100%;
  }
}
</style>
