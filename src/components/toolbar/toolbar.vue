<template>
  <div class="jjsnc-toolbar">
    <ul
      class="jjsnc-toolbar-group jjsnc-toolbar-group-more"
      v-if="moreActions"
      v-show="showMore">
      <jjsnc-toolbar-item
        v-for="(action, index) in moreActions"
        :key="index"
        :action="action"
        @click.native="itemClick(action)"></jjsnc-toolbar-item>
    </ul>
    <ul class="jjsnc-toolbar-group">
      <jjsnc-toolbar-item
        v-for="(action, index) in basicActions"
        :key="index"
        :action="action"
        @click.native="itemClick(action)"></jjsnc-toolbar-item>
    </ul>
  </div>
</template>
<script>
  import jjsncToolbarItem from './toolbar-item.vue'

  const COMPONENT_NAME = 'jjsnc-toolbar'
  const EVENT_CLICK = 'click'
  const EVENT_MORE_CLICK = 'more-click'

  export default {
    name: COMPONENT_NAME,
    components: {
      jjsncToolbarItem
    },
    props: {
      actions: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      },
      moreActions: {
        type: Array
      }
    },
    data() {
      return {
        showMore: false
      }
    },
    computed: {
      basicActions() {
        const basicActions = this.actions.slice()
        this.moreActions && basicActions.push({
          icon: 'jjsncic-more',
          $jjsncMore: true
        })
        return basicActions
      }
    },
    methods: {
      itemClick(action) {
        if (action.$jjsncMore) {
          this.showMore = !this.showMore
          this.$emit(EVENT_MORE_CLICK, this.showMore)
        } else {
          this.$emit(EVENT_CLICK, action)
        }
      }
    }
  }
</script>
<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";

$toolbar-spacing: 10px;
.jjsnc-toolbar {
  position: fixed;
  left: $toolbar-spacing;
  right: $toolbar-spacing;
  bottom: $toolbar-spacing;
  z-index: 2;
//   @include safe-area-mixin(padding-bottom, $toolbar-spacing);
}

.jjsnc-toolbar-group {
  display: flex;
  height: 44px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.24);
  background-color: $toolbar-bgc;
}
.jjsnc-toolbar-group-more {
  margin-bottom: $toolbar-spacing;
  .jjsnc-toolbar-item {
    &:last-child {
      .jjsnc-toolbar-down {
        position: absolute;
        top: 44px;
        right: 9%;
        height: $toolbar-spacing;
        color: $toolbar-bgc;
        font-size: $fontsize-large-xxx;
        font-family: jjsnc-icon;
        font-style: normal;
        text-shadow: 0 1px 3px $toolbar-active-bgc;
        transform: scale(1.3);
        &::before {
          content: "\E603";
          position: relative;
          top: -10px;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 30%;
          top: 50%;
          margin-top: -6px;
          width: 40%;
          height: 2px;
          background-color: $toolbar-bgc;
        }
      }
      &:active {
        .jjsnc-toolbar-down {
          color: $toolbar-active-bgc;
          &::after {
            background-color: $toolbar-active-bgc;
          }
        }
      }
    }
  }
}
</style>
