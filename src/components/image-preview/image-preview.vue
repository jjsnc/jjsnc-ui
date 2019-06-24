<template>
  <transition name="jjsnc-image-preview-fade">
    <jjsnc-popup type="image-preview" :z-index="zIndex" :center="false" v-show="isVisible">
      <div class="jjsnc-image-preview-container">
        <div class="jjsnc-image-preview-header">
          <slot name="header" :current="currentPageIndex"></slot>
        </div>
        <jjsnc-slide
          ref="slide"
          v-if="isVisible"
          :data="imgs"
          :initial-index="currentPageIndex"
          :auto-play="false"
          :loop="loop"
          :speed="speed"
          :options="options"
          @change="slideChangeHandler"
        >
          <jjsnc-slide-item v-for="(img, index) in imgs" :key="index">
            <div class="jjsnc-image-preview-item" @click="itemClickHandler">
              <jjsnc-scroll
                ref="items"
                :options="scrollOptions"
                @dblclick.native="dblclickHandler(index, $event)"
              >
                <img class="jjsnc-image-preview-img" :src="img" @load="imgLoad(index)">
              </jjsnc-scroll>
            </div>
          </jjsnc-slide-item>
          <template slot="dots">
            <i></i>
          </template>
        </jjsnc-slide>
        <div class="jjsnc-image-preview-footer">
          <slot name="footer" :current="currentPageIndex">
            <span class="jjsnc-image-preview-counter">{{currentPageIndex + 1}}/{{imgs.length}}</span>
          </slot>
        </div>
      </div>
    </jjsnc-popup>
  </transition>
</template>
<script type="text/ecmascript-6">
import jjsncPopup from "../popup/popup.vue";
import jjsncSlide from "../slide/slide.vue";
import jjsncSlideItem from "../slide/slide-item.vue";
import jjsncScroll from "../scroll/scroll.vue";
import visibilityMixin from "../../common/mixins/visibility";
import popupMixin from "../../common/mixins/popup";
import { isAndroid } from "../../common/helpers/env";

const COMPONENT_NAME = "jjsnc-image-preview";
const EVENT_CHANGE = "change";
const EVENT_HIDE = "hide";

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin, popupMixin],
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    imgs: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 400
    },
    preventDefault: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentPageIndex: this.initialIndex,
      options: {
        observeDOM: false,
        bounce: {
          left: true,
          right: true
        },
        useTransition: !isAndroid,
        probeType: 3,
        preventDefault: this.preventDefault
      },
      scrollOptions: {
        HWCompositing: isAndroid,
        observeDOM: false,
        zoom: true,
        bindToWrapper: true,
        freeScroll: true,
        scrollX: true,
        scrollY: true,
        probeType: 3,
        bounce: false,
        click: false,
        dblclick: true,
        bounceTime: 300,
        preventDefault: this.preventDefault
      }
    };
  },
  watch: {
    initialIndex(newIndex) {
      this.setPageIndex(newIndex);
    }
  },
  methods: {
    show() {
      this.isVisible = true;
      this.$nextTick(() => {
        this._listenSlide();
        this._listenScroll();
      });
    },
    _listenSlide() {
      // waiting slide initial
      this.$nextTick(() => {
        const slide = this.$refs.slide.slide;
        slide.on("scrollStart", this.slideScrollStartHandler);
        slide.on("scrollEnd", this.slideScrollEndHandler);
      });
    },
    _listenScroll() {
      // waiting scroll initial
      this.$nextTick(() => {
        this.$refs.items.forEach(scrollItem => {
          const scroll = scrollItem.scroll;
          scroll.on("zoomStart", this.zoomStartHandler.bind(this, scroll));
          scroll.on("beforeScrollStart", this.beforeScrollHandler);
          scroll.on("scroll", this.checkBoundary.bind(this, scroll));
          scroll.on("scrollEnd", this.scrollEndHandler.bind(this, scroll));
        });
      });
    },
    hide() {
      this.isVisible = false;
      this.$emit(EVENT_HIDE);
    },
    prev() {
      const slide = this.$refs.slide.slide;
      slide && slide.prev();
    },
    next() {
      const slide = this.$refs.slide.slide;
      slide && slide.next();
    },
    goTo(index) {
      const slide = this.$refs.slide.slide;
      slide && slide.goToPage(index, 0);
    },
    imgLoad(i) {
      /* istanbul ignore if */
      if (this.isVisible && this.$refs.items) {
        this.$refs.items[i].scroll.refresh();
      }
    },
    setPageIndex(currentPageIndex) {
      if (
        this.currentPageIndex >= 0 &&
        this.currentPageIndex !== currentPageIndex
      ) {
        const item = this.$refs.items[this.currentPageIndex];
        if (item) {
          const scroll = item.scroll;
          /* istanbul ignore if */
          if (scroll.scale !== 1) {
            scroll.scale = 1;
            scroll.lastcale = 1;
            scroll.refresh();
          }
        }
      }
      this.currentPageIndex = currentPageIndex;
    },
    slideChangeHandler(currentPageIndex) {
      this.setPageIndex(currentPageIndex);
      this.slideScrollEndHandler();
      this.$emit(EVENT_CHANGE, currentPageIndex);
    },
    slideScrollStartHandler() {
      const slide = this.$refs.slide.slide;
      if (this._scrolling && !this._hasEnableSlide) {
        slide.disable();
      } else {
        slide.enable();
      }
    },
    slideScrollEndHandler() {
      this.$refs.items.forEach(scrollItem => {
        this.scrollEndHandler(scrollItem.scroll);
      });
    },
    _scroll(scroll) {
      const slide = this.$refs.slide.slide;
      slide.disable();
      slide.refresh();
      scroll.enable();
    },
    _slide(scroll) {
      this.$refs.slide.slide.enable();
      scroll.disable();
    },
    beforeScrollHandler() {
      // for touchstart scrollEnd
      // cancel it, do not enable slide
      clearTimeout(this.enableSlideTid);
    },
    scrollEndHandler(scroll) {
      clearTimeout(this.enableSlideTid);
      if (this.dblZooming) {
        this.dblZooming = false;
        clearTimeout(this.clickTid);
      }
      this._hasEnableSlide = false;
      this._scrolling = false;
      scroll.enable();
      this.enableSlideTid = setTimeout(() => {
        this.$refs.slide.slide.enable();
      });
    },
    checkBoundary(scroll, pos) {
      if (scroll.distX && Math.abs(scroll.distX) > Math.abs(scroll.distY)) {
        this._scrolling = true;
        const reached =
          scroll.distX > 0
            ? pos.x >= scroll.minScrollX
            : pos.x <= scroll.maxScrollX;
        if (reached) {
          this._hasEnableSlide = true;
          this._slide(scroll);
        } else {
          if (!this._hasEnableSlide) {
            this._scroll(scroll);
          }
        }
      } else if (scroll.distY) {
        this._scrolling = true;
        this._scroll(scroll);
      }
    },
    zoomStartHandler(scroll) {
      this._scroll(scroll);
    },
    dblclickHandler(index, e) {
      const scroll = this.$refs.items[index].scroll;
      this.dblZooming = true;
      this.zoomTo(scroll, scroll.scale > 1 ? 1 : 2, e);
      scroll.disable();
    },
    itemClickHandler() {
      clearTimeout(this.clickTid);
      this.clickTid = setTimeout(() => {
        !this.dblZooming && this.hide();
      }, this.scrollOptions.bounceTime);
    },
    zoomTo(scroll, scale, e) {
      scroll.zoomTo(scale, e.pageX, e.pageY);
    }
  },
  components: {
    jjsncPopup,
    jjsncSlide,
    jjsncSlideItem,
    jjsncScroll
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import '../../common/scss/variable.scss';

.jjsnc-image-preview-fade-enter, .jjsnc-image-preview-fade-leave-active {
  opacity: 0;
}

.jjsnc-image-preview-fade-enter-active, .jjsnc-image-preview-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.jjsnc-image-preview {
  .jjsnc-popup-mask {
    opacity: 0.6;
  }

  .jjsnc-popup-content {
    width: 100%;
    height: 100%;
  }

  .jjsnc-slide-item {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}

.jjsnc-image-preview-container {
  height: 100%;
  margin: 0 -10px;
}

.jjsnc-image-preview-header, .jjsnc-image-preview-footer {
  position: absolute;
  left: 0;
  right: 0;
}

.jjsnc-image-preview-header {
  top: 0;
}

.jjsnc-image-preview-footer {
  bottom: 0;
}

.jjsnc-image-preview-counter {
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
  font-size: $fontsize-medium;
  color: $image-preview-counter-color;
}

.jjsnc-image-preview-item {
  position: relative;
  padding: 0 10px;
  width: 100%;
  height: 100%;

  .jjsnc-scroll-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jjsnc-image-preview-img {
    display: block;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
