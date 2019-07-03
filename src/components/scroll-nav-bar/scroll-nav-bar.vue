<template>
  <div class="jjsnc-scroll-nav-bar" :class="'jjsnc-scroll-nav-bar_' + direction">
    <jjsnc-scroll ref="scroll" nestMode="none" :options="options" :direction="direction">
      <div class="jjsnc-scroll-nav-bar-items" ref="items">
        <div
          class="jjsnc-scroll-nav-bar-item"
          v-for="(txt, index) in txts"
          :key="index"
          :class="{'jjsnc-scroll-nav-bar-item_active': active === labels[index]}"
          @click="clickHandler(labels[index])"
        >
          <slot :txt="txt" :index="index" :active="active" :label="labels[index]">
            <span v-html="txt"></span>
          </slot>
        </div>
      </div>
    </jjsnc-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import scrollMixin from "../../common/mixins/scroll";
import jjsncScroll from "../scroll/scroll.vue";

const DIRECTION_H = "horizontal";
const DIRECTION_V = "vertical";

const COMPONENT_NAME = "jjsnc-scroll-nav-bar";
const EVENT_CHANGE = "change";

export default {
  name: COMPONENT_NAME,
  inject: {
    scrollNav: {
      default: null
    }
  },
  mixins: [scrollMixin],
  props: {
    direction: {
      type: String,
      default: DIRECTION_H,
      validator(val) {
        return val === DIRECTION_H || val === DIRECTION_V;
      }
    },
    labels: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return [];
      }
    },
    txts: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return this.labels;
      }
    },
    current: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      active: this.current
    };
  },
  watch: {
    current(newVal) {
      this.active = newVal;
    },
    active(newVal) {
      this.$emit(EVENT_CHANGE, newVal);
      this._adjust();
    }
  },
  mounted() {
    this.scrollNav && this.scrollNav.setBar(this);
    if (this.active) {
      // waiting panels loaded
      this.$nextTick(() => {
        this._adjust();
      });
    }
  },
  beforeDestroy() {
    this.scrollNav && this.scrollNav.setBar(null);
  },
  methods: {
    clickHandler(label) {
      if (label === this.active) {
        return;
      }
      this.active = label;
      this.scrollNav && this.scrollNav.barChange(label);
    },
    refresh() {
      this.$refs.scroll.refresh();
      this._adjust();
    },
    _adjust() {
      // waiting ui
      this.$nextTick(() => {
        const isHorizontal = this.direction === DIRECTION_H;
        const targetProp = isHorizontal ? "clientWidth" : "clientHeight";
        const active = this.active;
        const viewportSize = this.$refs.scroll.$el[targetProp];
        const itemsEle = this.$refs.items;
        const scrollerSize = itemsEle[targetProp];
        const minTranslate = Math.min(0, viewportSize - scrollerSize);
        const middleTranslate = viewportSize / 2;
        const items = itemsEle.children;
        let size = 0;
        this.labels.every((label, index) => {
          if (label === active) {
            size += items[index][targetProp] / 2;
            return false;
          }
          size += items[index][targetProp];
          return true;
        });
        let translate = middleTranslate - size;
        translate = Math.max(minTranslate, Math.min(0, translate));
        this.$refs.scroll.scrollTo(
          isHorizontal ? translate : 0,
          isHorizontal ? 0 : translate,
          300
        );
      });
    }
  },
  components: {
    jjsncScroll
  }
};
</script>

<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/index";
.jjsnc-scroll-nav-bar {
  position: relative;
  display: flex;
  color: $scroll-nav-color;
  background-color: $scroll-nav-bgc;
}
.jjsnc-scroll-nav-bar_horizontal {
  align-items: center;
  .jjsnc-scroll-wrapper {
    flex: 1;
    text-align: center;
  }
  .jjsnc-scroll-content {
    display: inline-block;
    vertical-align: top;
  }
  .jjsnc-scroll-nav-bar-items {
    white-space: nowrap;
  }
}

.jjsnc-scroll-nav-bar_vertical {
  height: 100%;
  justify-content: center;
  text-align: center;
  .jjsnc-scroll-nav-bar-item {
    display: block;
  }
}

.jjsnc-scroll-nav-bar-items {
  font-size: $fontsize-medium;
}
.jjsnc-scroll-nav-bar-item {
  display: inline-block;
  vertical-align: top;
  padding: 20px 15px;
}

.jjsnc-scroll-nav-bar-item_active {
  color: $scroll-nav-active-color;
}
</style>

