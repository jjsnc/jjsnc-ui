<template>
  <div class="home">
    <jjsnc-slide :data='items'></jjsnc-slide>
  </div>
</template>

<script>
import jjsncSlide from "../components/slide/slide";
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
  mounted() {},
  methods: {},
  components: {
    jjsncSlide
  }
};
</script>
<style lang="scss">
.home {
  padding: 20px;
  background: #efeff4;
  height: 100vh;
}
.my-title-img {
  height: 120px;
  margin-bottom: 16px;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560839219850&di=ff8af70c9c485f51fa443bdac9e4c370&imgtype=0&src=http%3A%2F%2Fcdn0.hbimg.cn%2Fstore%2Fwm%2Fpiccommon%2F1198%2F11984%2FD525A3C998BBFFB18A8DBC941A.jpg")
    no-repeat 50%;
  background-size: 100%;
}
.my-content {
  text-align: center;
}
</style>


