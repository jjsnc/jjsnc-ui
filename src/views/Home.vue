<template>
  <div class="home">
    <div class="scroll-list-wrap">
      <jjsnc-scroll
        ref="scroll"
        :data="items"
        direction="horizontal"
        class="horizontal-scroll-list-wrap"
      >
        <ul class="list-wrapper">
          <li v-for="(item, index) in items" class="list-item" :key="index">{{ item }}</li>
        </ul>
      </jjsnc-scroll>
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
        "😀 😁 😂 🤣 😃 🙃 ",
        "👈🏻  scroll 👉🏻 ",
        "🙂 🤔 😄 🤨 😐 🙃 ",
        "👈🏻  scroll 👉🏻 ",
        "😔 😕 🙃 🤑 😲 ☹️ ",
        "👈🏻  scroll 👉🏻 ",
        "🐣 🐣 🐣 🐣 🐣 🐣 ",
        "👈🏻  scroll 👉🏻 ",
        "🐥 🐥 🐥 🐥 🐥 🐥 ",
        "👈🏻  scroll 👉🏻 ",
        "🤓 🤓 🤓 🤓 🤓 🤓 ",
        "👈🏻  scroll 👉🏻 ",
        "🦔 🦔 🦔 🦔 🦔 🦔 ",
        "👈🏻  scroll 👉🏻 ",
        "🙈 🙈 🙈 🙈 🙈 🙈 ",
        "👈🏻  scroll 👉🏻 ",
        "🚖 🚖 🚖 🚖 🚖 🚖 ",
        "👈🏻  scroll 👉🏻 ",
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

.horizontal-scroll-list-wrap {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .jjsnc-scroll-content {
    display: inline-block;
  }
  .list-wrapper {
    padding: 0 10px;
    line-height: 60px;
    white-space: nowrap;
  }
  .list-item {
    display: inline-block;
  }
}
</style>


