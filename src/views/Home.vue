<template>
  <div class="home">
    <div class="swipe-wrapper">
      <jjsnc-scroll>
        <jjsnc-swipe>
          <transition-group name="swipe" tag="ul">
            <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
              <jjsnc-swipe-item
                ref="swipeItem"
                :btns="data.btns"
                :index="index"
                @btn-click="onBtnClick"
              >
                <div @click="onItemClick(data.item, index)" class="item-inner">
                  <div class="icon">
                    <img width="60" height="60" :src="data.item.imgurl">
                  </div>
                  <div class="text">
                    <h2 class="item-name" v-html="data.item.name"></h2>
                    <p class="item-desc" v-html="data.item.desc"></p>
                  </div>
                </div>
              </jjsnc-swipe-item>
            </li>
          </transition-group>
        </jjsnc-swipe>
      </jjsnc-scroll>
    </div>
  </div>
</template>

<script>
// import { cityData } from "../example/data/citydata.json";
import { customData } from "../example/data/swipedata.json";
export default {
  name: "home",
  data() {
    return {
      swipeData: customData
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
.swipe-wrapper {
  height: 600px;
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


