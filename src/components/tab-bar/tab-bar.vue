<template>
  <div class="jjsnc-tab-bar" :class="{'jjsnc-tab-bar_inline':inline}">
    <slot>
      <jjsnc-tab
        v-for="(item, index) in data"
        :label="item.label"
        :value="item.value"
        :icon="item.icon"
        :key="index"
      ></jjsnc-tab>
    </slot>
    <div v-if="showSlider" ref="slider" class="jjsnc-tab-bar-slider"></div>
  </div>
</template>

<script>
import { prefixStyle } from "../../common/helpers/dom";
import { findIndex } from "../../common/helpers/util";
import jjsncTab from "./tab.vue";
export default {
  components: {
    jjsncTab
  }
};
</script>

