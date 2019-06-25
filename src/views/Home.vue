<template>
  <div class="home">
    <div class="scroll-list-wrap">
      <jjsnc-scroll ref="scroll" :data="items" :options="options"></jjsnc-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      options: {},
      items: [
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
      ]
    };
  },
  mounted() {},
  methods: {},
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
  height: 100vh;
}

.scroll-list-wrap {
  height: 350px;
}
</style>


