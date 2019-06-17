<template>
  <div class="home">
    <jjsnc-button  @click="showCascadePicker">Cascade Picker</jjsnc-button>
  </div>
</template>

<script>
const cascadeData = [
  {
    value: 'Fruit',
    text: 'Fruit',
    children: [
      {
        value: 'Apple',
        text: 'Apple',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Orange',
        text: 'Orange',
        children: [{ value: 3, text: 'Three'}, { value: 4, text: 'Four' }]
      }
    ]
  },
  {
    value: 'Drink',
    text: 'Drink',
    children: [
      {
        value: 'Coffee',
        text: 'Coffee',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Tea',
        text: 'Tea',
        children: [{ value: 1, text: 'One' }, { value: 3, text: 'Three'}]
      }
    ]
  }
]
export default {
  name: "home",
  data() {
    return {};
  },
  mounted () {
    this.cascadePicker = this.$createCascadePicker({
      title: 'Cascade Picker',
      data: cascadeData,
      selectedIndex: [0, 1, 0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showCascadePicker() {
      this.cascadePicker.show()
    },
    selectHandle() {

    },
    cancelHandle() {
    
    }
  },
  components: {
  }
};
</script>
<style lang="scss">
.home {
  padding: 20px;
  background: #efeff4;
  height: 100vh;
}

</style>


