<template>
  <div class="home">
    <jjsnc-button @click="showAlert">Cascade Picker</jjsnc-button>
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
    showAlert() {
      this.dialog = this.$createDialog({
        type: "prompt",
        title: "我是标题",
        prompt: {
          value: "",
          placeholder: "请输入"
        },
        onConfirm: (e, promptValue) => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: `Prompt value: ${promptValue || ""}`
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
</style>


