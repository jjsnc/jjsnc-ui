<template>
  <div class="jjsnc-tab-panels" ref="panels">
    <div class="jjsnc-tab-panels-group" ref="panelsGroup">
      <slot>
        <jjsnc-tab-panel
          v-for="(item, index) in data"
          :label="item.label"
          :value="item.value"
          :key="index"
        >{{item.label}}</jjsnc-tab-panel>
      </slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import TabPanel from "./tab-panel.vue";
import { findIndex } from "../../common/helpers/util";
import { prefixStyle } from "../../common/helpers/dom";

const TRANSFORM = prefixStyle("transform");

const COMPONENT_NAME = "jjsnc-tab-panels";
const INDEX_OUT_OF_BOUNDARY = -1;

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: [String, Number]
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    this.panels = [];
  },
  mounted() {
    this._move(this.value);
  },
  methods: {
    _move(value) {
      const curIndex = findIndex(this.panels, panel => panel.value === value);
      /* istanbul ignore if */
      if (curIndex === INDEX_OUT_OF_BOUNDARY) {
        return;
      }
      const panelsGroup = this.$refs.panelsGroup;
      const distance = -(curIndex * 100);
      panelsGroup.style[TRANSFORM] = `translateX(${distance}%)`;
    },
    addPanel(panel) {
      this.panels.push(panel);
    },
    removePanel(panel) {
      const index = this.panels.indexOf(panel);
      if (index > -1) this.panels.splice(index, 1);
    }
  },
  watch: {
    value(newV) {
      this._move(newV);
    }
  },
  components: { TabPanel }
};
</script>
<style lang="scss">
.jjsnc-tab-panels {
  position: relative;
  overflow: hidden;
}
.jjsnc-tab-panels-group {
  display: flex;
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}
</style>

