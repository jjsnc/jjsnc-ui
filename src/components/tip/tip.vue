<template>
  <transition name="jjsnc-tip-zoom">
    <div class="jjsnc-tip" :data-dir="direction" v-show="isVisible" @click="handleClick">
      <i class="jjsnc-tip-angle" ref="angle"></i>
      <button class="jjsnc-tip-close jjsncic-close" @click.stop="close"></button>
      <div class="jjsnc-tip-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
import visibilityMixin from "../../common/mixins/visibility";
const COMPONENT_NAME = "jjsnc-tip";
const EVENT_CLICK = "click";
const EVENT_CLOSE = "close";
export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin],
  props: {
    direction: {
      type: String,
      default: top
    },
    offsetLfet: {
      type: [String, Number],
      default: 0
    },
    offsetRightt: {
      type: [String, Number],
      default: 0
    },
    offsetBottom: {
      type: [String, Number],
      default: 0
    },
    offsetTop: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.hide();
      this.$emit(EVENT_CLICK);
    },
    close() {
      this.hide();
      this.$emit(EVENT_CLOSE);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
.jjsnc-tip {
  display: flex;
  z-index: 10;
  position: absolute;
  padding: 10px 38px 10px 16px;
  max-height: 60px;
  font-size: $fontsize-small;
  color: $tip-color;
  background: $tip-bgc;
  border-radius: 2px;
  transition: opacity 0.2s;
  &[data-dir="top"],
  &[data-dir="bottom"] {
    .jjsnc-tip-angle {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &[data-dir="top"] {
    .jjsnc-tip-angle {
      top: 0;
      &::before {
        margin-top: -6px;
        transform: rotate(0deg);
      }
    }
  }
  &[data-dir="bottom"] {
    .jjsnc-tip-angle {
      bottom: 0;
      &::before {
        margin-bottom: -6px;
        transform: rotate(180deg);
      }
    }
  }
  &[data-dir="left"],
  &[data-dir="right"] {
    .jjsnc-tip-angle {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &[data-dir="left"] {
    .jjsnc-tip-angle {
      left: 0;
      &::before {
        margin-left: -9px;
        transform: rotate(-90deg);
      }
    }
  }
  &[data-dir="right"] {
    .jjsnc-tip-angle {
      right: 0;
      &::before {
        margin-right: -9px;
        transform: rotate(90deg);
      }
    }
  }
  .jjsnc-tip-angle {
    position: absolute;
    &::before {
      content: "";
      display: block;
      border-width: 0 6px 6px;
      border-style: solid;
      border-color: transparent transparent $tip-bgc;
    }
  }
  .jjsnc-tip-close {
    position: absolute;
    right: 14px;
    top: 12px;
    width: 12px;
    height: 12px;
    padding: 0;
    color: inherit;
    outline: none;
    border: none;
    background: none;
    transform: scale(1.3);
  }
  .jjsnc-tip-content {
    min-height: 18px;
    line-height: 18px;
    @include flex-fix();
    overflow: hidden;
  }
}

.jjsnc-tip-zoom-enter-active {
  animation: tip-in 0.4s;
}
.jjsnc-tip-zoom-leave-active {
  animation: tip-out 0.2s;
}

@keyframes tip-in {
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
@keyframes tip-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
