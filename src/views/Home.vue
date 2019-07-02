<template>
  <div class="home">
    <jjsnc-sticky
      :pos="scrollY"
      :check-top="checkTop"
      fixed-show-ani="sticky-fixed-show"
      @diff-change="diffChange"
    >
      <jjsnc-scroll :scroll-events="scrollEvents" @scroll="scrollHandler">
        <img src="https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/6.jpg" />
        <jjsnc-sticky-ele>
          <ul class="sticky-header">
            <!-- <li>111</li> -->
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items" :key="index" class="border-top-1px">{{item}}</li>
        </ul>
        <ul>
          <li v-for="(item, index) in items2" :key="index" class="border-top-1px">{{item}}</li>
        </ul>
        <ul>
          <li v-for="(item, index) in items3" :key="index" class="border-top-1px">{{item}}</li>
        </ul>
      </jjsnc-scroll>
      <ul class="sticky-header" slot="fixed" ref="stickyHeader">
        <li>header</li>
      </ul>
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
      scrollEvents: ["scroll"],
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
    scrollHandler({ y }) {
      this.scrollY = -y;
    },
    diffChange(height) {
      let opacity = 0;
      if (height) {
        opacity = height / 50;
      }
      this.$refs.stickyHeader.style.opacity = opacity;
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
img {
  width: 100%;
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

.sticky-fixed-show-enter,
.sticky-fixed-show-leave-active {
  transform: translate(0, -100%);
}

.sticky-fixed-show-enter-active,
.sticky-fixed-show-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>


