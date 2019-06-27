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
                v-for="(group, index) in data" :key="index" :group="group" @select="selectItem"
                >
                </jjsnc-index-list-group>
                <template v-if="$slotss.pullup || $scopedSlots.pullup" slot="pullup">

                </template>
            </slot>
        </ul>
      </div>
    </jjsnc-scroll>
  </div>
</template>

<script>
import JjsncScroll from "../scroll/scroll.vue";
import JjsncIndexListGroup from  './index-list-group.vue'
export default {
  components: {
    JjsncScroll,
    JjsncIndexListGroup
  }
};
</script>

<style lang="scss">
</style>


