<template>
  <div class="jjsnc-loading">
    <span class="jjsnc-loading-spinners" :style="style">
      <i class="jjsnc-loading-spinner" :key="index" v-for="(item, index) in balde"></i>
    </span>
  </div>
</template>

<script>
const COMPONENT_NAME = "jjsnc-loading";
export default {
  name: COMPONENT_NAME,
  data() {
    return {
      balde: 12
    };
  },
  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style() {
      if (!this.size) {
        return;
      }
      const value = `${this.size}px`;
      return {
        width: value,
        height: value
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
.jjsnc-loading {
  font-size: $fontsize-large-xxx;
}
.jjsnc-loading-spinners {
  position: relative;
  display: block;
  width: 1em;
  height: 1em;
}
.jjsnc-loading-spinner {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 2px;
  height: 25%;
  border-radius: 50%/20%;
  opacity: 0.25;
  background-color: currentColor;
  animation: spinner-fade 1s linear infinite;
  @for $i from 1 through 12 {
    &:nth-child(#{$i}) {
      animation-delay: ($i - 1) / 12 + s;   
      transform: rotate(30deg * ($i - 6)) translateY(-150%);
    }
  }
}
@keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
</style>
