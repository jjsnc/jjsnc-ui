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
.jjsnc-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  pointer-events: none;
}
</style>
