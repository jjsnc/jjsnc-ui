<template>
  <div class="home">
    <jjsnc-scroll-nav
      :side="true"
      :data="data"
      :current="current"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler"
    >
      <jjsnc-scroll-nav-panel
        v-for="item in data"
        :key="item.name"
        :label="item.name"
        :title="item.name"
      >
        <ul>
          <li v-for="(food, index) in item.foods" :key="index">
            <div>
              <img :src="food.icon" />
              <p>{{food.name}}</p>
            </div>
          </li>
        </ul>
      </jjsnc-scroll-nav-panel>
    </jjsnc-scroll-nav>
  </div>
</template>

<script>
import goodsData from "../example/data/goods-list.json";
const goods = goodsData.goods;
export default {
  name: "home",
  data() {
    return {
      data: goods,
      current: goods[3].name
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeHandler(label) {
      console.log("changed to:", label);
    },
    stickyChangeHandler(current) {
      console.log("sticky-change", current);
    }
  },
  components: {}
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  background: #edf0f4;
}
.jjsnc-sticky-fixed {
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.jjsnc-sticky-content {
  height: 100%;
}

.jjsnc-scroll-nav-panel-title {
  padding: 15px;
  font-size: 16px;
  background-color: #fff;
}

.jjsnc-scroll-nav-panel-title {
  padding: 15px;
  font-size: 16px;
  background-color: #fff;
}


 .jjsnc-scroll-nav-panel ul {
    overflow: hidden;
    font-size: 14px;
    line-height: 1.4;
    color: #666
}

 .jjsnc-scroll-nav-panel li {
    float: left;
    width: 50%
}

 .jjsnc-scroll-nav-panel li div {
    width: 114px;
    margin: auto
}

 .jjsnc-scroll-nav-panel li div p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

 .jjsnc-scroll-nav-panel-title {
    padding: 15px;
    font-size: 16px;
    background-color: #fff
}

</style>


