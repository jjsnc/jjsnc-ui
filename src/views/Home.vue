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
      this.$createDialog({
        type: "alert",
        title: "我是标题",
        content: "我是内容",
        icon: "cubeic-alert"
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


