<template>
  <div class="jjsnc-upload-btn">
    <slot>
      <div class="jjsnc-upload-btn-def">
        <i></i>
      </div>
    </slot>
    <input
      class="jjsnc-upload-input"
      type="file"
      @change="changeHandler"
      :multiple="multiple"
      :accept="accept"
    >
  </div>
</template>
<script type="text/ecmascript-6">
import btnMixin from "./btn-mixin";

const COMPONENT_NAME = "jjsnc-upload-btn";

export default {
  name: COMPONENT_NAME,
  mixins: [btnMixin],
  methods: {
    changeHandler(e) {
      const fileEle = e.currentTarget;
      const files = fileEle.files;
      if (files) {
        this.$parent.addFiles(files);
        fileEle.value = null;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
.jjsnc-upload-btn {
  position: relative;
  overflow: hidden;
  &:active {
    .jjsnc-upload-btn-def {
      background-color: $upload-btn-active-bgc;
    }
  }
}

.jjsnc-upload-input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  font-size: 0;
  opacity: 0;
}

.jjsnc-upload-btn-def {
  position: relative;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  background-color: $upload-btn-box-shadow;
  border-radius: 2px;
  @include border-1px($upload-btn-border-color, 2px);
  > i {
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 2px;
      transform: translate(-50%, -50%);
      background-color: $upload-btn-color;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>
