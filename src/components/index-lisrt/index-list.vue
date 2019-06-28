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
</style>


