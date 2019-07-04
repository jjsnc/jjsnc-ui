<template>
  <div class="home">
  </div>
</template>

<script>
import goodsData from "../example/data/goods-list.json";
const goods = goodsData.goods;
export default {
  name: "home",
  data() {
    return {
      data: goods
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
  background: #edf0f4;
}

</style>


