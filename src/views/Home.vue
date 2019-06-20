<template>
  <div class="home">
    <jjsnc-slide
      ref="slide"
      :data="items"
      @change="changePage"
      :initial-index="1"
      :loop="true"
      :auto-play="true"
      :interval="6000"
      :threshold="0.4"
      :speed="600"
      @scroll="scroll"
      :options="options"
    >
      <jjsnc-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </jjsnc-slide-item>
      <template slot="dots" slot-scope="props">
        <span
          class="my-dot"
          :class="{active: props.current === index}"
          v-for="(item, index) in props.dots"
          :key="index"
        >{{index + 1}}</span>
      </template>
    </jjsnc-slide>
  </div>
</template>

<script>
import jjsncSlide from "../components/slide/slide";
import jjsncSlideItem from "../components/slide/slide-item";
export default {
  name: "home",
  data() {
    return {
      options: {
        listenScroll: true,
        probeType: 3
      },
      items: [
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
    scroll({ x, y }) {
    }
  },
  components: {
    jjsncSlide,
    jjsncSlideItem
  }
};
</script>
<style lang="scss">
.jjsnc-slide {
  height: 150px;
}
.home {
  padding: 20px;
  background: #efeff4;
  height: 100vh;
}
.my-title-img {
  height: 120px;
  margin-bottom: 16px;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560839219850&di=ff8af70c9c485f51fa443bdac9e4c370&imgtype=0&src=http%3A%2F%2Fcdn0.hbimg.cn%2Fstore%2Fwm%2Fpiccommon%2F1198%2F11984%2FD525A3C998BBFFB18A8DBC941A.jpg")
    no-repeat 50%;
  background-size: 100%;
}
.my-content {
  text-align: center;
}
</style>


