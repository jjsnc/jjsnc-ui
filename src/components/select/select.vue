<template>
  <div
    class="jjsnc-select"
    :class="{'jjsnc-select_active':active,'jjsnc-select_disabled':disabled}"
    @click="showPicker"
  >
    <span v-if="selectedText" class="jjsnc-select-placeholder">{{_selectedText}}</span>
    <span v-else class="jjsnc-select-placeholder">{{_placeholder}}</span>
    <i class="jjsnc-select-icon"></i>
  </div>
</template>
<script>
import {fondIndex} from '../../common/helpers/util';
import localeMixin from '../../common/mixins/locale'
export default {};
</script>
<style lang="scss">
</style>
