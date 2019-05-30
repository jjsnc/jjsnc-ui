<template>
  <li class="jjsnc-rate-item" :class="{'jjsnc-rate-item_active':index <=$parent.tempValue}">
    <slot>
      <div class="jjsnc-rate-item-def"></div>
    </slot>
  </li>
</template>

<script>
const COMPONENT_NAME = "jjsnc-rate-item";
export default {
  name: COMPONENT_NAME,
  props: {
    index: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="scss">
@import "../../common/scss/mixin";
.jjsnc-rate-item {
  position: relative;
  width: 32px;
  flex: 0 1 auto;
  margin-right: 6px;
  &::after {
    contain: "";
    display: block;
    padding: 50% 0;
  }
  &:last-child {
    margin-right: 0;
  }
  .jjsnc-rate-item-def {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    @include bg-image("evaluation_icon_star_gray");
  }
}
.jjsnc-rate-item_active {
  .jjsnc-rate-item_def {
    @include bg-image("evaluation_icon_star");
  }
}
</style>

