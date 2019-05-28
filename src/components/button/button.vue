<template>
    <button class="jjsnc-btn" :type="type" :class="btnClass" @click="handleClick">
      <i :class="icon" v-if="icon"></i>
      <slot></slot>
    </button>
</template>

<script>
const COMPONENT_NAME = "jjsnc-button";
export default {
  name: COMPONENT_NAME,
  props: {
    icon: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    }
  },
  computed: {
    btnClass() {
      return {
        "jjsnc-btn_active": this.active,
        "jjsnc-btn_disabled": this.disabled,
        "jjsnc-btn-inline": this.inline,
        "jjsnc-btn-primary": this.primary,
        "jjsnc-btn-outline": this.outline,
        "jjsnc-btn-outline-primary": this.outline && this.primary,
        "jjsnc-btn-light": this.light
      };
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      this.$emit("click", event);
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";


@mixin btn-active($bg, $border: null) {
  &.jjsnc-btn_active,&:active {
    background: $bg;
    @if ($border != null) {
      @include border-1px($border);
    }
  }
}

.jjsnc-btn {
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: $fontsize-large;
  line-height: 1;
  color: $btn-color;
  background: $btn-bgc;
  outline: none;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  @include btn-active($btn-active-bgc);
  > i {
    display: inline-block;
    margin-right: 4px;
    font-size: 100%;
    transform: scale(1.13);
    transform-origin: right center;
  }
}

.jjsnc-btn-inline {
  width: auto;
  display: inline-block;
  vertical-align: middle;
  padding: 9px 10px;
  font-size: $fontsize-small;
  > i {
    margin-right: 2px;
    transform: scale(1.14);
  }
}

.jjsnc-btn-primary {
  color: $btn-primary-color;
  background: $btn-primary-bgc;
  @include btn-active($btn-primary-active-bgc);
}

.jjsnc-btn-light {
  color: $btn-light-color;
  background: $btn-light-bgc;
  box-shadow: $box-shadow-content;
  @include btn-active($btn-light-active-bgc);
}

.jjsnc-btn-outline {
  color: $btn-outline-color;
  background: $btn-outline-bgc;
  @include border-1px($btn-outline-bdc);
  @include btn-active($btn-outline-active-bgc, $btn-outline-active-bdc);
}

.jjsnc-btn-outline-primary {
  color: $btn-outline-primary-color;
  background: $btn-outline-primary-bgc;
  @include border-1px($btn-outline-primary-bdc);
  @include btn-active(
    $btn-outline-primary-active-bgc,
    $btn-outline-primary-active-bdc
  );
}

.jjsnc-btn_disabled {
  color: $btn-disabled-color;
  background: $btn-disabled-bgc;
  @include border-1px($btn-disabled-bdc);
  @include btn-active($btn-disabled-bgc, $btn-disabled-bdc);
}
</style>
