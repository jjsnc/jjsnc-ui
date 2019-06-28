<template>
  <div class="home">
    <jjsnc-index-list
      ref="indexList"
      :data="data"
      :title="title"
      :pullDownRefresh="pullDownRefresh"
      @select="selectItem"
      @title-click="clickTitle"
      @pulling-down="onPullingDown"
    ></jjsnc-index-list>
  </div>
</template>

<script>
import { cityData } from "../example/data/citydata.json";

export default {
  name: "home",
  data() {
    return {
      title: "Current City: BEIJING",
      data: cityData,
      pullDownRefresh: {
        stop: 55
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    selectItem(item) {
      console.log(item.name);
    },
    clickTitle(title) {
      console.log(title);
    },
    onPullingDown() {
      // Mock async load.
      setTimeout(() => {
        // Update data.
        this.data[1].items.push(...cityData[1].items);
        // Call forceUpdate after finishing data load.
        this.$refs.indexList.forceUpdate(true);
      }, 1000);
    }
  },
  components: {}
};
</script>
<style lang="scss">
.home {
  background: #efeff4;
  height: 100vh;
}
</style>


