<template>
  <div class="jjsnc-slide" ref="slide">
    <div class="jjsnc-slide-group" ref="slideGroup">
      <slot>
        <jjsnc-slide-item
          v-for="(item, index) in data"
          :key="index"
          @click.native="clickItem(item, index)"
          :item="item"
        ></jjsnc-slide-item>
      </slot>
    </div>
    <div class="jjsnc-slide-dots" v-if="showDots">
      <slot name="dots" :current="currentPageIndex" :dots="dots">
        <span :class="{active:currentPageIndex===index}" v-for="(item, index) in dots" :key="index"></span>
      </slot>
    </div>
  </div>
</template>

<script>
import jjsncSlideItem from "./slide-item.vue";
import BScroll from "better-scroll";
import scrollMixin from "../../common/mixins/scroll";
import deprecatedMixin from "../../common/mixins/deprecated";

const COMPONENT_NAME = "jjsnc-slide";
const EVENT_CHANGE = "change";
const EVENT_SELECT = "click";
const EVENT_SCROLL_END = "scroll-end";
const EVENT_SCROLL = "scroll";

const DIRECTION_H = "horizontal";
const DIRECTION_V = "vertical";

const DEFAULT_OPTIONS = {
  momentum: false,
  click: true,
  observeDOM: false,
  bounce: false
};

export default {
  name: COMPONENT_NAME,
  mixins:[scrollMixin, deprecatedMixin],
  props:[scrollMixin, deprecatedMixin],
  components: {
    jjsncSlideItem
  }
};
</script>
<style lang="scss">
</style>


