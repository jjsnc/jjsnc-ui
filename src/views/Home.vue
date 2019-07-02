<template>
  <div class="home">
    <jjsnc-sticky :pos="scrollY" :check-top="checkTop">
      <div class="scroll-ele" @scroll="scrollHandler">
        <ul>
          <li>title</li>
        </ul>
        <jjsnc-sticky-ele>
          <ul class="sticky-header">
            <li>1</li>
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items" :key="index">{{item}}</li>
        </ul>
        <jjsnc-sticky-ele>
          <ul class="sticky-header">
            <li>2</li>
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items2" :key="index">{{item}}</li>
        </ul>
        <jjsnc-sticky-ele>
          <ul class="sticky-header">
            <li>333</li>
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items3" :key="index">{{item}}</li>
        </ul>
      </div>
    </jjsnc-sticky>
  </div>
</template>

<script>
const _data = [
  "😀 😁 😂 🤣 😃 😄 ",
  "🙂 🤗 🤩 🤔 🤨 😐 ",
  "👆🏻 scroll up/down 👇🏻 ",
  "😔 😕 🙃 🤑 😲 ☹️ ",
  "🐣 🐣 🐣 🐣 🐣 🐣 ",
  "👆🏻 scroll up/down 👇🏻 ",
  "🐥 🐥 🐥 🐥 🐥 🐥 ",
  "🤓 🤓 🤓 🤓 🤓 🤓 ",
  "👆🏻 scroll up/down 👇🏻 ",
  "🦔 🦔 🦔 🦔 🦔 🦔 ",
  "🙈 🙈 🙈 🙈 🙈 🙈 ",
  "👆🏻 scroll up/down 👇🏻 ",
  "🚖 🚖 🚖 🚖 🚖 🚖 ",
  "✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 "
];
export default {
  name: "home",
  data() {
    return {
      scrollY: 0,
      checkTop: true,
      items: _data.concat(),
      items2: _data.concat(),
      items3: _data.concat()
    };
  },
  computed: {},
  mounted() {},
  methods: {
    scrollHandler(e) {
      this.scrollY = e.currentTarget.scrollTop;
    }
  },
  components: {}
};
</script>
<style lang="scss">
.home {
  height: 100vh;
}
.scroll-ele {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
}

.sticky-header li {
  background: #636161;
  z-index: 99;
  color: #fff;
}
.jjsnc-sticky {
  li {
    height: 50px;
    line-height: 50px;
  }
}
li {
  height: 36px;
  line-height: 36px;
  text-align: center;
}
</style>


