<template>
  <div class="home">
    <jjsnc-sticky :pos="scrollY">
      <jjsnc-scroll :scroll-events="scrollEvents" @scroll="scrollHandler">
        <ul>
          <li>title</li>
        </ul>
        <jjsnc-sticky-ele ele-key="11">
          <ul class="sticky-header">
            <li>11</li>
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items" :key="index">{{item}}</li>
        </ul>
        <jjsnc-sticky-ele ele-key="22">
          <ul class="sticky-header">
            <li>22</li>
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items2" :key="index">{{item}}</li>
        </ul>
        <jjsnc-sticky-ele ele-key="33">
          <ul class="sticky-header">
            <li>33</li>
          </ul>
        </jjsnc-sticky-ele>
        <ul>
          <li v-for="(item, index) in items3" :key="index">{{item}}</li>
        </ul>
      </jjsnc-scroll>
      <template slot="fixed" slot-scope="props">
        <ul class="sticky-header">
          <li>{{props.current}}</li>
        </ul>
      </template>
    </jjsnc-sticky>
  </div>
</template>

<script>
// import { cityData } from "../example/data/citydata.json";
// import { swipeData } from "../example/data/swipedata.json";
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
    }
  },
  components: {}
};
</script>
<style lang="scss">
.home {
  height: 100vh;
}
.sticky-header li {
  background:#636161;
  z-index: 99;
  color: #fff;
}
.jjsnc-sticky{
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


