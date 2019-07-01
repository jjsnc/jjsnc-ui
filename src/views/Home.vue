<template>
  <div class="home">
  </div>
</template>

<script>
// import { cityData } from "../example/data/citydata.json";
import { swipeData } from "../example/data/swipedata.json";
export default {
  name: "home",
  data() {
    return {
      swipeData: swipeData
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
  height: 100vh;
}
</style>


