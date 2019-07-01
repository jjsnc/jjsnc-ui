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
  name: COMp

};
</script>


