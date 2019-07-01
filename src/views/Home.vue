<template>
  <div class="home">
    <div class="swipe-wrapper">
      <jjsnc-scroll>
        <jjsnc-swipe @item-click="onItemClick" @btn-click="onBtnClick" :data="swipeData"></jjsnc-swipe>
      </jjsnc-scroll>
    </div>
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
    onItemClick(item) {
      console.log("click item:", item);
    },
    onBtnClick(btn, index) {
      if (btn.action === "delete") {
        this.$createActionSheet({
          title: "确认要删除吗",
          active: 0,
          data: [{ content: "删除" }],
          onSelect: () => {
            this.swipeData.splice(index, 1);
          }
        }).show();
      }
    }
  },
  components: {}
};
</script>
<style lang="scss">
.home {
  // background: #efeff4;
  height: 100vh;
}
.swipe-wrapper{
  height: 500px;
}
.swipe-view {
  .swipe-wrapper {
    position: fixed;
    top: 60px;
    left: 10px;
    right: 10px;
    bottom: 0;
    background: #fff;
  }
}
</style>


