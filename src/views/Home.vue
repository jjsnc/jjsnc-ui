<template>
  <div class="home">
    <jjsnc-scroll-nav @change="changeHandler" :speed='100'>
      <jjsnc-scroll-nav-panel v-for="item in data" :key="item.name" :label="item.name">
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
      data: goods
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeHandler(label) {
      // console.log("changed to:", label);
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
.jjsnc-scroll-nav-panel-title{
  padding: 15px;
  font-size: 16px;
  text-align: center;
  background: #fff;
}

 .jjsnc-scroll-nav-panel ul {
    overflow: hidden;
    font-size: 14px;
    line-height: 1.4;
    color: #666;
    background: #fff;
}
.jjsnc-scroll-nav-panel li {
    float: left;
    width: 50%;
}

.jjsnc-scroll-nav-panel li div {
    width: 114px;
    margin: 0 auto 15px;
}

.jjsnc-scroll-nav-panel img {
    width: 114px;
    height: 114px;
}

</style>


