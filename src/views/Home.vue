<template>
  <div class="home">
    <jjsnc-index-list :data="cityData">
      <jjsnc-index-list-group v-for="(group, index) in cityData" :key="index" :group="group">
        <jjsnc-index-list-item
          v-for="(item, index) in group.items"
          :key="index"
          :item="item"
          @select="selectItem"
        >
          <div class="custom-item">我是自定义 {{item.name}}</div>
        </jjsnc-index-list-item>
      </jjsnc-index-list-group>
    </jjsnc-index-list>
  </div>
</template>

<script>
import { cityData } from "../example/data/citydata.json";

export default {
  name: "home",
  data() {
    return {
      title: "Current City: BEIJING",
      cityData: cityData
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
    }
  },
  components: {}
};
</script>
<style lang="scss">
// .jjsnc-slide {
//   height: 150px;
// }
.home {
  // padding: 20px;
  background: #efeff4;
  height: 100vh;

  .custom-item {
    position: relative;
    height: 70px;
    line-height: 70px;
    padding: 0 16px;
    font-size: 14;
  }
  .jjsnc-index-list-content {
    background-color: #222;
    color: #909090;
  }
  .jjsnc-index-list-anchor {
    background-color: #333;
    height: 30px;
    line-height: 30px;
    padding: 0 0 0 20px;
  }
  .jjsnc-index-list-nav {
    padding: 20px 0;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    > ul {
      > li {
        padding: 3px;
        font-size: 12px;
        color: #909090;
        &.active {
          color: #ffcd32;
        }
      }
    }
  }
}
</style>


