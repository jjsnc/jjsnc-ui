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
      data: cityData,
      pullDownRefresh: {
        stop: 55
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
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


