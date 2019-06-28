<template>
  <div class="home">
    <jjsnc-index-list
      :data="cityData"
      :title="title"
      @select="selectItem"
      @title-click="clickTitle"
    ></jjsnc-index-list>
  </div>
</template>

<script>
import {cityData} from '../example/data/citydata.json'

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
  // background: #efeff4;
  height: 100vh;
}
</style>


