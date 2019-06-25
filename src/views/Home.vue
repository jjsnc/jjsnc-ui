<template>
  <div class="home">
    <div class="imgs-container">
      <img :src="img" v-for="(img, index) in imgs" :key="img" @click="handleImgsClick(index)">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      initialIndex: 0,
      imgs: [
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg"
      ]
    };
  },
  mounted() {},
  methods: {
    handleImgsClick(index) {
      this.initialIndex = index;
      const params = {
        $props: {
          imgs: this.imgs,
          initialIndex: "initialIndex", // 响应式数据的key名
          loop: false
        },
        $events: {
          change: i => {
            // 必须更新 initialIndex
            this.initialIndex = i;
          }
        }
      };
      this.$createImagePreview({ ...params }).show();
    }
  },
  components: {}
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
.imgs-container {
  img {
    width: 150px;
    height: 150px;
  }
}
</style>


