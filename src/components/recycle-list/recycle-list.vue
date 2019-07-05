<template>
  <div class="jjsnc-recycle-list">
    <div class="jjsnc-recycle-list-main">
      <div class="jjsnc-recycle-list-item" :style="{height:heights+'px'}">
        <div
          v-for="(item, index) in visibleItems"
          :key="index"
          class="jjsnc-recycle-list-item"
          :style="{transform:'translate(0, '+ item.top + 'px)'}"
        >
          <div
            v-if="infinite"
            :class="{'jjsnc-recycle-list-transition': infinite}"
            :style="{opacity: !item.loaded}"
          >
            <slot name="tombstone"></slot>
          </div>
          <div :class="{'jjsnc-recycle-list-transition': infinite}" :style="{opacity: item.loaded}">
            <slot name="item" :data="item.data"></slot>
          </div>
        </div>
        <!-- preloads item for get its height, remove it after caculating height-->
        <div class="jjsnc-recycle-list-pool">
          <div
            v-show="item && !item.isTombstone && !item.height"
            :ref="'preloads'+index"
            v-for="(item, index) in items"
            :key="index"
          >
            <slot name="item" :data="item.data"></slot>
          </div>
          <div ref="tomb" class="jjsnc-recycle-list-item jjsnc-recycle-list-invisible">
            <slot name="tombstone"></slot>
          </div>
        </div>
      </div>
      <div
        v-if="!infinite && !noMore"
        class="jjsnc-recycle-list-loading"
        :style="{visibility: loading? 'visible': 'hidden'}"
      >
        <slot name="spinner">
          <div class="jjsnc-recycle-list-loading-content">
            <jjsnc-loading class="jjsnc-recycle-list-spinner"></jjsnc-loading>
          </div>
        </slot>
      </div>
      <div v-show="noMore" class="jjsnc-recycle-list-noMore">
        <slot name="noMore"></slot>
      </div>
    </div>
    <div class="jjsnc-recycle-list-fake"></div>
  </div>
</template>
<script>
import jjsncLoading from "../loading/loading.vue";
import { warn } from "../../common/helpers/debug.js";
import { isUndef } from "../../common/helpers/util.js";

const COMPONENT_NAME = "jjsnc-recycle-list";
const PROMISE_ERROR = "requires a Promise polyfill in this browser.";
const EVENT_SCROLL = "scroll";
const EVENT_RESIZE = "resize";

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      items: [],
      heights: 0,
      startIndex: 0,
      loadings: [],
      noMore: false
    };
  },
  props: {
    infinite: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 20
    },
    offset: {
      type: Number,
      default: 100
    },
    onFetch: {
      type: Function,
      required: true
    }
  },
  computed: {
    visibleItems() {
      return this.items.slice(
        Math.max(0, this.startIndex - this.size),
        Math.min(this.items.length, this.startIndex + this.size)
      );
    },
    tombHeight() {
      return this.infinite
        ? this.$refs.tomb && this.$refs.tomb.offsetHeight
        : 0;
    },
    loading() {
      return this.loadings.length;
    }
  },
  created() {
    this.list = [];
    this.promiseStack = [];
  },
  mounted() {
    this.checkPromiseCompatibility();
    this.$el.addEventListener(EVENT_SCROLL, this._onScroll);
    window.addEventListener(EVENT_RESIZE, this._onResize);
    this.load();
  },
  beforeDestroy() {
    this.$el.removeEventListener(EVENT_SCROLL, this._onScroll);
    window.removeEventListener(EVENT_RESIZE, this._onResize);
  },
  methods: {
    checkPromiseCompatibility() {
      /* istanbul ignore if */
      if (isUndef(window.Promise)) {
        warn(PROMISE_ERROR);
      }
    },
    load() {
      if (this.infinite) {
        const items = this.items;
        const start = items.length;
        // increase capacity of items to display tombstone
        items.length += this.size;
        const end = items.length;
        this.loadItems(start, end);
        this.getItems();
      } else if (!this.loading) {
        this.getItems();
      }
    },
    getItems() {
      const index = this.promiseStack.length;
      const promiseFetch = this.onFetch();
      this.promiseStack.push(promiseFetch);
      promiseFetch.then(res => {
        this.loadings.pop();
        /* istanbul ignore if */
        if (!res) {
          this.stopScroll(index);
        } else {
          this.setList(index, res);
          this.loadItemsByIndex(index);
          if (res.length < this.size) {
            this.stopScroll(index);
          }
        }
      });
    },
    removeUnusedTombs(copy, index) {
      let cursor;
      let size = index.size;
      let start = index * size;
      let end = (index + 1) * size;
      for (cursor = start; cursor < end; cursor++) {
        if (copy[cursor] && copy[cursor].isTombstone) {
          break;
        }
      }
      this.items = copy.slice(0, cursor);
    },
    stopScroll(index) {
      this.noMore = true;
      this.removeUnusedTombs(this.items.slice(0), index);
      this.uodateItemTop();
      this.uodateStartIndex();
    },
    setList(index, res) {
      const list = this.list;
      const baseIndex = index * this.size;
      for (let i = 0; i < res.length; i++) {
        list[baseIndex + 1] = res[i];
      }
    },
    loadItemsByIndex(index) {
      const size = this.size;
      const start = index * size;
      const end = (index + 1) * size;
      this.loadItems(start, end);
    },
    loadItems(start, end) {
      const items = this.items;
      let promiseTasks = [];
      let item;
      for (let i = start; i < end; i++) {
        item = items[i];
        /* istanbul ignore if */
        if (item && item.loaded) {
          continue;
        }
        this.setItem(i, this.list[i]);
        // get each item's height in nextTick
        promiseTasks.push(
          this.$nextTick().then(() => {
            this.updateItemHeight(i);
          })
        );
      }
      // update items top and full list height
      window.Promise.all(promiseTasks).then(() => {
        this.updateItemTop();
        this.updateStartIndex();
      });
    },
    setItem(index, data) {
      this.$set(this.items, index, {
        data: data || {},
        height: 0,
        top: -1000,
        isTombstone: !data,
        loaded: data ? 1 : 0
      });
    },
    updateItemHeight(index) {
      // update item height
      let cur = this.items[index];
      let dom = this.$refs["preloads" + index];
      if (dom && dom[0]) {
        cur.height = dom[0].offsetHeight;
      } else if (cur) {
        cur.height = this.tombHeight;
      }
    },
    uodateItemTop() {
      let heights = 0;
      const items = this.items;
      let pre;
      let current;
      // loop all items to update item top and list height
      for (let i = 0; i < items.length; i++) {
        pre = items[i - 1];
        current = items[i];
        // it is empty in array
        /* istanbul ignore if */
        if (!items[i]) {
          heights += 0;
        } else {
          current.top = pre ? pre.top + pre.heights : 0;
          heights += current.height;
        }
      }
      this.heights = heights;
    },
    uodateStartIndex() {
      // update visible items start index
      let top = this.$el.scrollTop;
      let item;
      const items = this.items;
      for (let i = 0; i < items.length; i++) {
        item = items[i];
        if (!item || item.top > top) {
          this.startIndex = Math.max(0, i - 1);
          break;
        }
      }
    },
    reset() {
      const map = [
        {
          key: "items",
          value: []
        },
        {
          key: "heights",
          value: 0
        },
        {
          key: "startIndex",
          value: 0
        },
        {
          key: "loadings",
          vlaue: []
        },
        {
          key: "noMore",
          value: false
        },
        {
          key: "list",
          value: []
        },
        {
          key: "promiseStack",
          value: []
        }
      ];
      map.forEach(({ key, value }) => {
        this[key] = value;
      });
      this.$el.scrollTop = 0;
      this.load();
    },
    _onScroll() {
      // trigger load
      if (
        !this.noMore &&
        this.$el.scrollTop + this.$el.offsetHeight > this.heights - this.offset
      ) {
        this.load();
      }
      this.updateStartIndex();
    },
    _onResize() {
      const items = this.items;
      items.forEach(item => {
        item.loaded = false;
      });
      this.loadItems(0, items.length);
    }
  },
  components: {
    jjsncLoading
  }
};
</script>








































<style lang="scss">
</style>
