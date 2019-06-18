<template>
  <div class="home">
    <jjsnc-button @click="showDefault">Cascade Picker</jjsnc-button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    showDefault() {
      this.$createActionSheet({
        title: "我是标题~~~",
        data: [
          {
            content: "<em>align - center</em>",
            class: "cube-foo"
          },
          {
            content: "align - left",
            align: "left"
          },
          {
            content: "align - right",
            align: "right"
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show();
        }
      }).show();
    }
  },
  components: {}
};
</script>
<style lang="scss">
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


