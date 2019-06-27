<template>
  <div class="home">
    <jjsnc-slide ref="slide" :data="items" @change="changePage">
      <jjsnc-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </jjsnc-slide-item>
    </jjsnc-slide>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
        }
      ]
    };
  },
  computed: {},
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
  height: 660px;
}
</style>


