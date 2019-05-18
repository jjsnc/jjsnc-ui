<template>
  <li class="jjsnc-toolbar-item border-right-1px">
    <jjsnc-button :icon="action.icon">
      <jjsnc-checkbox
        class="jjsnc-toolbar-chb"
        v-model="action.checked"
        v-if="action.type=='checkbox'"
        :label="action.text"
      ></jjsnc-checkbox>
      <span v-else v-html="action.text"></span>
    </jjsnc-button>
    <i class="jjsnc-toolbar-down"></i>
  </li>
</template>

<script>
import jjsncButton from "../button/button";
import jjsncCheckbox from "../checkbox/checkbox";
const COMPONENT_NAME = "jjsnc-toolbar-item";
export default {
  name: COMPONENT_NAME,
  components: {
    jjsncButton,
    jjsncCheckbox
  },
  props: {
    action: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
.jjsnc-toolbar-item {
  display: flex;
  @include flex-fix();
  align-items: center;
  background-color: $toolbar-bgc;
  &:last-child {
    position: static;
    &::after {
      display: none;
    }
  }
  &:active {
    background-color: $toolbar-active-bgc;
  }
  &:active {
    &::after {
      border-color: transparent;
    }
  }

  /* reset jjsnc-checkbox style */
  .jjsnc-toolbar-chb {
    height: 44px;
    padding: 0;
    font-size: $fontsize-small;
    background-color: transparent;
    .jjsnc-checkbox-wrap {
      padding: 0;
      justify-content: center;
      .jjsnc-checkbox-ui {
        position: relative;
        left: auto;
        margin-right: 0.42em;
      }
    }
  }

  /* reset jjsnc-btn style */
  .jjsnc-btn {
    position: relative;
    padding: 0 5px;
    background-color: transparent;
    border: 0 none;
    color: $color-grey;
    font-size: $fontsize-small;
    &:active {
      background-color: transparent;
    }
    &:active::after {
      display: none;
    }
    i {
      margin-right: 0;
      &.jjsncic-more {
        color: $color-light-grey;
        font-size: $fontsize-large;
      }
    }
  }
}

</style>
