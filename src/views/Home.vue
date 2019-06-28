<template>
  <div class="home">
    <jjsnc-index-list
      :data="cityData"
      :title="title"
      @select="selectItem"
      @title-click="clickTitle"
    ></jjsnc-index-list>
  </div>
</template>

<script>
const cityData = [
  {
    name: "★Hot City",
    items: [
      {
        name: "BEIJING",
        value: 1
      },
      {
        name: "SHANGHAI",
        value: 2
      }
    ]
  },
  {
    name: "A",
    items: [
      {
        name: "ANSHAN",
        value: 3
      },
      {
        name: "ANQING",
        value: 4
      }
    ]
  }
];

export default {
  name: "home",
  data() {
    return {
      title: "Current City: BEIJING",
      cityData: cityData
    };
  },
  computed: {},
  mounted() {},
  methods: {
    selectItem(item) {
      console.log(item.name);
    },
    clickTitle(title) {
      console.log(title);
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
  height: 660px;
}
</style>


