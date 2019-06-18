<template>
  <div class="home">
    <jjsnc-button @click="showSlot">Cascade Picker</jjsnc-button>
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
    showSlot() {
      this.$createDialog(
        {
          type: "alert",
          confirmBtn: {
            text: "我知道了",
            active: true
          }
        },
        createElement => {
          return [
            createElement(
              "div",
              {
                class: {
                  "my-title": true
                },
                slot: "title"
              },
              [
                createElement("div", {
                  class: {
                    "my-title-img": true
                  }
                }),
                createElement("p", "附近车少,优选出租车将来接您")
              ]
            ),
            createElement(
              "p",
              {
                class: {
                  "my-content": true
                },
                slot: "content"
              },
              "价格仍按快车计算"
            )
          ];
        }
      ).show();
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
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560839219850&di=ff8af70c9c485f51fa443bdac9e4c370&imgtype=0&src=http%3A%2F%2Fcdn0.hbimg.cn%2Fstore%2Fwm%2Fpiccommon%2F1198%2F11984%2FD525A3C998BBFFB18A8DBC941A.jpg') no-repeat 50%;
    background-size: 100%;
}
.my-content {
  text-align: center;
  }
</style>


