<template>
  <div class="home">
    <jjsnc-button @click="showCascadePicker">Cascade Picker</jjsnc-button>
  </div>
</template>

<script type="text/ecmascript-6">
const cascadeData = [
  {
    value: "Fruit",
    text: "Fruit",
    children: [
      {
        value: "Apple",
        text: "Apple",
        children: [{ value: 1, text: "One" }, { value: 2, text: "Two" }]
      },
      {
        value: "Orange",
        text: "Orange",
        children: [{ value: 3, text: "Three" }, { value: 4, text: "Four" }]
      }
    ]
  },
  {
    value: "Drink",
    text: "Drink",
    children: [
      {
        value: "Coffee",
        text: "Coffee",
        children: [{ value: 1, text: "One" }, { value: 2, text: "Two" }]
      },
      {
        value: "Tea",
        text: "Tea",
        children: [{ value: 1, text: "One" }, { value: 3, text: "Three" }]
      }
    ]
  }
];
export default {
  data() {
    return {
      goodData: cascadeData
    };
  },
  mounted() {
    this.cascadePicker = this.$createCascadePicker({
      title: "Cascade Picker",
      data: this.goodData,
      selectedIndex: [0, 1, 0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    });
  },

  methods: {
    showCascadePicker() {
      this.cascadePicker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert"
      }).show();
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000
      }).show();
    }
  }
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  background: #edf0f4;
}
.jjsnc-checkbox {
  background: #fff;
}
</style>


