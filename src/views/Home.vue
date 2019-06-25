<template>
  <div class="home">
    <jjsnc-button @click="showImagePreview">Show ImagePreview</jjsnc-button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imgs: [
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg",
        "https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg"
      ]
    };
  },
  mounted() {},
  methods: {
    showImagePreview() {
      this.$createImagePreview({
        imgs: this.imgs
      }).show();
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
</style>


