<template>
  <div class="jjsnc-upload-file" :class="fileCls" @click="clickHandler">
    <slot>
      :img-style="fileStyle"
      :progress="fileProgress"
    </slot>
    <div class="jjsnc-upload-file-def" :style="fileStyle">
      <i class="jjsncic-wrong" @click.stop="removeFile"></i>
      <div class="cube-upload-file-state" :class="fileStatusCls">
        <i class="cube-upload-file-status" :class="statusCls"></i>
        <span class="cube-upload-file-progress">{{fileProgress}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  @import "../../common/scss/variable.styl";
  @import "../../common/scss/mixin.styl";
  .jjsnc-upload-file {
      position: relative;
  }
  .jjsnc-upload-file-def{
      position: relative;
      width: 80px;
      height: 80px;
      box-sizing: border-box;
      
  }
</style>
