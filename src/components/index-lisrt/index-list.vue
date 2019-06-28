<template>
  <div class="jjsnc-index-list">
    <jjsnc-scroll
      ref="scroll"
      :scroll-events="scrollEvents"
      :options="scrollOptions"
      :data="data"
      @scroll="scroll"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
    >
      <div class="jjsnc-index-list-content" ref="content">
        <h1 class="jjsnc-index-list-title" v-if="title" ref="title" @click="titleClick">{{title}}</h1>
        <ul>
          <slot>
            <jjsnc-index-list-group
              v-for="(group, index) in data"
              :key="index"
              :group="group"
              @select="selectItem"
            ></jjsnc-index-list-group>
          </slot>
        </ul>
      </div>
      <template v-if="$slotss.pullup || $scopedSlots.pullup" slot="pullup">
        <slot name="pullup" :pullUpLoad="props.pullUpLoad" :isPullUpLoad="props.isPullUpLoad"></slot>
      </template>
      <template v-if="$slots.pulldown  || $scopedSlots.pulldown" slot="pulldown" slot-scope="props">
        <slot
          name="pulldown"
          :pullDownRefresh="props.pullDownRefresh"
          :pullDownStyle="props.pullDownStyle"
          :beforePullDown="props.beforePullDown"
          :isPullingDown="props.isPullingDown"
          :bubbleY="props.bubbleY"
        ></slot>
      </template>
    </jjsnc-scroll>
    <div
      v-if="navbar"
      class="jjsnc-index-list-nav"
      @touchstart="onShortcutTouchStart"
      @touchmove.stop.prevent="onShortcutTouchMove"
    >
      <ul class="jjsnc-index-list-nav-list">
        <li
          v-for="(item, index) in shortcutList"
          :key="index"
          :data-index="index"
          class="jjsnc-index-list-nav-item"
          :class="{active:currentIndex===index}"
        >
          <slot name="nav-item" :item="item">{{item}}</slot>
        </li>
      </ul>
    </div>
    <div
      ref="fixed"
      v-show="fixedTitle"
      v-html="fixedTitle"
      class="jjsnc-index-list-fixed jjsnc-index-list-anchor"
    ></div>
  </div>
</template>

<script>
import JjsncScroll from "../scroll/scroll.vue";
import JjsncIndexListGroup from "./index-list-group.vue";
export default {
  components: {
    JjsncScroll,
    JjsncIndexListGroup
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";

.jjsnc-index-list {
  position: relative;
  height: 100%;
  overflow: hidden;
  .jjsnc-scroll-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}

.jjsnc-index-list-content {
  background: $index-list-bgc;
  border-radius: 2px;
}

.jjsnc-index-list-title {
  padding: 14px 16px;
  font-size: $fontsize-medium;
  line-height: 1.6;
  color: $index-list-title-color;
}

jjsnc-index-list-anchor {
  padding: 16px 16px 10px 16px;
  line-height: 1;
  font-size: $fontsize-medium;
  color: $index-list-anchor-color;
  background: $index-list-anchor-bgc;
}

.jjsnc-index-lisst-fixed {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.jjsnc-index-list-nav {
  position: absolute;
  z-index: 30;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-family: Helvetica;
  > ul {
    padding: 0;
    margin: 0;
    > li {
      padding: 6px 16px 0 16px;
      line-height: 1;
      text-align: center;
      box-sizing: (border-box);
      font-size: $fontsize-small;
      color: $index-list-nav-color;
      &.active {
        color: $index-list-nav-active-color;
      }
      @media (max-height: 480px) {
        & { 
          padding-top: 3px;
        }
      }
    }
  }
}
</style>


