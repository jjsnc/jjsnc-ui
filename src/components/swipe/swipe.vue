<template>
  <div class="jjsnc-swipe">
    <slot>
      <transition-group name="jjsnc-swipe" tag="ul">
        <li v-for="(item, index) in data" :key="item.item.value">
          <jjsnc-swipe-item
            :btns="item.btns"
            :item="item.item"
            :index="index"
            :auto-shrink="autoShrink"
          ></jjsnc-swipe-item>
        </li>
      </transition-group>
    </slot>
  </div>
</template>

<script>
import jjsncSwipeItem from "./swipe-item.vue";

const COMPONENT_NAME = "jjsnc-swipe";
const EVENT_ITEM_CLICK = "item-click";
const EVENT_BTN_CLICK = "btn-click";
export default {
  name: COMPONENT_NAME,
  provide() {
    return {
      swipe: this
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    autoShrink: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.activeIndex = -1;
    this.items = [];
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
      if (index <= this.activeIndex) {
        this.activeIndex -= 1;
      }
    },
    onItemClick(item, index) {
      this.$emit(EVENT_ITEM_CLICK, index, item);
    },
    onBtnClick(btn, index) {
      const item = this.data[index];
      this.$emit(EVENT_BTN_CLICK, btn, index, item);
    },
    onItemActive(index) {
      if (index === this.activeIndex) {
        return;
      }
      if (this.activeIndex !== -1) {
        const activeItem = this.items[this.activeIndex];
        activeItem.shrink();
      }
      this.activeIndex = index;
    }
  },
  components: {
    jjsncSwipeItem
  }
};
</script>

<style lang="scss">
.jjsnc-swipe {
  overflow: hidden;
}
.jjsnc-swipe-enter-active,
.jjsnc-swipe-leave-active {
  transition: all 0.3s;
  .jjsnc-swipe-item-inner {
    transition: all 0.3s;
  }
}
.jjsnc-swipe-enter,
.jjsnc-swipe-leave-to {
  .jjsnc-swipe-item-inner {
    height: 0;
  }
}
</style>

