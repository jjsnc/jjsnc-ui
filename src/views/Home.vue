<template>
  <div class="home">
    <jjsnc-tab-bar v-model="selectedLabel" show-slider>
      <jjsnc-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="index"></jjsnc-tab>
    </jjsnc-tab-bar>
    <!-- <jjsnc-tab-panels v-model="selectedLabel">
      <jjsnc-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="index">
        <ul>
          <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">{{hero}}</li>
        </ul>
      </jjsnc-tab-panel>
    </jjsnc-tab-panels> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selectedLabel: "天辉",
      tabs: [
        {
          label: "天辉",
          icon: "jjsncic-like",
          heroes: [
            "敌法师",
            "卓尔游侠",
            "主宰",
            "米拉娜",
            "变体精灵",
            "幻影长矛手",
            "复仇之魂",
            "力丸",
            "矮人狙击手",
            "圣堂刺客",
            "露娜",
            "赏金猎人",
            "熊战士"
          ]
        },
        {
          label: "夜魇",
          icon: "jjsncic-star",
          heroes: [
            "血魔",
            "影魔",
            "剃刀",
            "剧毒术士",
            "虚空假面",
            "幻影刺客",
            "冥界亚龙",
            "克林克兹",
            "育母蜘蛛",
            "编织者",
            "幽鬼",
            "司夜刺客",
            "米波"
          ]
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
.home {
  // height: 100vh;
  // background: #edf0f4;
}



.tab-panel-li  {
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #eee;
}

.tab-panel-li:last-child  {
  border-bottom: 1px solid #eee;
}

</style>


