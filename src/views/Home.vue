<template>
  <div class="home">
    <jjsnc-index-list
      ref="indexList"
      :data="data"
      :title="title"
      :pullUpLoad="true"
      @select="selectItem"
      @title-click="clickTitle"
      @pulling-up="onPullingUp"
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
      data: cityData.slice(0, 4)
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
    onPullingUp() {
      // Mock async load.
      setTimeout(() => {
        const length = this.data.length;
        if (length < cityData.length) {
          // Update data.
          this.data.push(cityData[length]);
        }
        // Call forceUpdate after finishing data load.
        this.$refs.indexList.forceUpdate();
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


