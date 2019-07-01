<template>
  <div
    ref="swipeItem"
    @transitionend="onTransitionEnd"
    @touchstart="onTouchStart"
    @touchmove="onTouchEnd"
    class="jjsnc-swipe-item"
  >
    <slot>
      <div @click="clickItem" class="jjsnc-swipe-item-inner border-bottom-1px">
        <span>{{item.text}}</span>
      </div>
    </slot>
    <ul class="jjsnc-swipe-btns">
      <li
        ref="btns"
        v-for="(btn, index) in btns"
        :key="index"
        class="jjsnc-swipe-btn"
        :style="genBtnStyl(btn)"
        @click.prevent="clickBtn(btn)"
      >
        <span class="text">{{btn.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { getRect, prefixStyle } from "../../common/helpers/dom";

import { easeOutQuart, easeOutCubic } from "../../common/lang/ease";

import { getNow } from "../../common/lang/date";

const COMPONENT_NAME = "jjsnc-swipe-item";
const EVENT_ITEM_CLICK = "item-click";
const EVENT_BTN_CLICK = "btn-click";
const EVENT_SCROLL = "scroll";
const EVENT_ACTIVE = "active";
const DIRECTION_LEFT = 1;
const DIRECTION_RIGHT = -1;
const STATE_SHRINK = 0;
const STATE_GROW = 1;
const easingTime = 600;
const momentumLimitTime = 300;
const momentumLimitDistance = 15;
const directionLockThreshold = 5;

const transform = prefixStyle("transform");
const transitionProperty = prefixStyle("transitionProperty");
const transitionDuration = prefixStyle("transitionDuration");
const transitionTimingFunction = prefixStyle("transitionTimingFunction");

export default {
  name: COMPONENT_NAME,
  inject: ["swipe"],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    btns: {
      type: Array,
      default() {
        return [];
      }
    },
    index: {
      type: Number,
      index: -1
    },
    autoShrink: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    btns() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  created() {
    this.x = 0;
    this.state = STATE_SHRINK;
    this.swipe.addItem(this);
  },
  mounted() {
    this.scrollerStyle = this.$refs.swipeItem.scrollerStyle;
    this.$nextTick(() => {
      this.refresh();
    });
    this.$on(EVENT_SCROLL, this._handleBtns);
  },
  methods: {
    _initCachedBtns() {
      this.cachedBtns = [];
      const len = this.$refs.btns.length;
      for (let i = 0; i < len; i++) {
        this.cachedBtns.push({
          width: getRect(this.$refs.btns[i]).width
        });
      }
    },
    _handleBtns(x) {
      /* istanbul ignore if */
      if (this.btns.length === 0) {
        return;
      }

      const len = this.$refs.btns.length;
      let delta = 0;
      let totalWidth = -this.maxScrollX;
      for (let i = 0; i < len; i++) {
        const btn = this.$refs.btns[i];
        let rate = (totalWidth - delta) / totalWidth;
        let width;
        let translate = rate * x - x;
        if (x < this.maxScrollX) {
          width = this.cachedBtns[i].width + rate * (this.maxScrollX - x);
        } else {
          width = this.cachedBtns[i].width;
        }
        delta += this.cachedBtns[i].width;
        btn.style.width = `${width}px`;
        btn.style[transform] = `translate(${translate}px)`;
        btn.style[transitionDuration] = "0ms";
      }
    }
  }
};
</script>


