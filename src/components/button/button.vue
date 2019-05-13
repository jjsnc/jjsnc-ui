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
.jjsnc-btn {
    @include touch-active(blue);
}

</style>
