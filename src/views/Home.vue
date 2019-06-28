<template>
  <div class="home">
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
.home {
  background: #efeff4;
  height: 100vh;
}
</style>


