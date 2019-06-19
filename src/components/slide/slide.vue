<template>
  <div class="jjsnc-slide" ref="slide">
    <div class="jjsnc-slide-group" ref="slideGroup">
      <slot>
        <jjsnc-slide-item
          v-for="(item, index) in data"
          :key="index"
          @click.native="clickItem(item, index)"
          :item="item"
        ></jjsnc-slide-item>
      </slot>
    </div>
  </div>
</template>

<script>
import jjsncSlideItem from "./slide-item.vue";
export default {
  components: {
    jjsncSlideItem
  }
};
</script>
<style lang="scss">
</style>


