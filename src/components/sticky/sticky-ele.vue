<template>
  <div class="jjsnc-sticky">
    <slot></slot>
    <transition :name="fixedShowAni">
      <div ref="fixedEle" v-show="fixedShow" class="jjsnc-sticky-fixed">
        <slot name="fixed" :current="currentKey" :index="currentIndex"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { getRect, prefixStyle } from "../../common/helpers";

const COMPONENT_NAME = "jjsnc-sticky";
const EVENT_CHANGE = "change";
const EVENT_DIFF_CHANGE = "diff-change";
const transformStyleKey = prefixStyle("transform");

export default {
  name: COMPONENT_NAME,
  provide() {
    return {
      sticky: this
    };
  },
  props: {
    pos: {
      type: Number,
      required: true
    },
    checkTop: {
      type: Boolean,
      default: true
    },
    fixedShowAni: {
      type: String,
      default() {
        return this.checkTop ? "" : "jjsnc-sticky-fixed-fade";
      }
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      diff: 0,
      currentDiff: 0,
      currentIndex: -1,
      currentKey: ""
    };
  },
  computed: {
    fixedShow() {
      const targetEle = this.eles[this.currentIndex];
      return !!targetEle;
    }
  },
  watch: {
    diff(newVal) {
      if (newVal >= 0) {
        newVal = 0;
      }
      newVal = Math.ceil(newVal);
      if (this._fixedTop === newVal) {
        return;
      }
      this._fixedTop = newVal;
      this.$refs.fixedEle.style[
        transformStyleKey
      ] = `translate3d(0, ${newVal}px, 0)`;
    },
    pos: "computeCurrentSticky",
    currentIndex(newIndex, oldIndex) {
      const oldEle = this.eles[oldIndex];
      const newEle = this.eles[newIndex];

      const currentKey =
        newEle && newEle.eleKey !== undeifned
          ? newEle.eleKey
          : newIndex === -1
          ? ""
          : newIndex;
      const fixedEle = this.$refs.fixedEle;
      const fixedSlot = this.$slots.fixed || this.$scopedSlots.fixed;

      this.$nextTick(() => {
        if (fixedSlot) {
          this.fixedEleHeight = fixedEle.offsetHeight;
        } else {
          const oldChild = fixedEle.firstElementChild;
          if (oldEle) {
            oldEle.$el.appendChild(oldChild);
            oldEle.refresh();
          }
          if (newEle) {
            fixedEle.appendChild(newEle.$el.firstElementChild);
            this.fixedEleHeight = fixedEle.offsetHeight;
          } else {
            this.fixedEleHeight = 0;
          }
        }
      });
      this.currentKey = currentKey;
      this.$emit(EVENT_CHANGE, currentKey, newIndex);
    },
    currentDiff(newVal) {
      const height = this.heights[this.currentIndex] || 0;
      this.$emit(EVENT_DIFF_CHANGE, newVal, height);
    }
  }
};
</script>

<style lang="scss">
</style>


