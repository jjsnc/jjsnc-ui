<template>
  <div class="home">
    <!-- <jjsnc-button>按钮</jjsnc-button>
    <jjsnc-button type="submit">submit</jjsnc-button>
    <jjsnc-button :active="true">Active Button</jjsnc-button>
    <jjsnc-button :disabled="true">disabled</jjsnc-button>
    <jjsnc-button icon="jjsncic-right">jjsncic-right</jjsnc-button>
    <jjsnc-button :light="true">按钮</jjsnc-button>
    <jjsnc-button :inline="true">inline</jjsnc-button>
    <jjsnc-button :outline="true">outline</jjsnc-button>
    <jjsnc-button :primary="true">primary</jjsnc-button>
    <jjsnc-loading :size="28"></jjsnc-loading>
    <jjsnc-loading :size="40"></jjsnc-loading>
        <jjsnc-loading></jjsnc-loading>
    <jjsnc-button :inline="true" :outline="true" @click="$refs.tip.show()" :primary="true">Show tip</jjsnc-button>
      <jjsnc-tip ref="tip" direction="bottom" style="left:123px;top:25px;">Tip</jjsnc-tip>
    <jjsnc-checkbox v-model="checked"> Checkbox</jjsnc-checkbox>-->
    <!-- <jjsnc-checkbox
      v-model="checked"
      position="right"
      shape="square"
      :hollow-style="true"
    >Styled Checkbox</jjsnc-checkbox>
    <jjsnc-checkbox v-model="checked" :option="option"/>
    <jjsnc-checkbox v-model="checked" :option="{disabled: true}">Disabled Checkbox</jjsnc-checkbox>-->

    <!-- <jjsnc-checkbox class="with-click" v-model="checked">
      Agree
      <a href="javascript:;" @click.stop="myhandle">处理事件</a>
    </jjsnc-checkbox>-->
    <!-- <jjsnc-checkbox-group v-model="checkList" @input='EVENT_INPUT' :options="options" ></jjsnc-checkbox-group> -->
    <!-- <jjsnc-checkbox-group v-model="checkList" :options="options" :horizontal="true" shape="square" :hollow-style="true" /> -->
    <!-- <jjsnc-checkbox-group v-model="checkList">
      <jjsnc-checkbox option="1">
        <i>Checkbox 1</i>
      </jjsnc-checkbox>
      <jjsnc-checkbox option="2">
        <i>Checkbox 2</i>
      </jjsnc-checkbox>
      <jjsnc-checkbox :option="{value: '3', disabled: true}">
        <i>Disabled Checkbox</i>
      </jjsnc-checkbox>
      <jjsnc-checkbox :option="{value: '4', disabled: true}">
        <i>Disabled & Checked Checkbox</i>
      </jjsnc-checkbox>
    </jjsnc-checkbox-group>-->
    <!-- <jjsnc-toolbar :actions="actions" @click="clickHandler" :more-actions="moreActions"></jjsnc-toolbar> -->
    <!-- <jjsnc-tab-bar
      :data="tabs"
      v-model="selectedLabelDefault"
      @click="clickHandler"
      @change="changeHandler"
      :showSlider='true'
      :inline='true'
      :useTransition='true'
    ></jjsnc-tab-bar>-->
    <!-- <jjsnc-tab-bar v-model="selectedLabelSlots" show-slider inline @click="clickHandler">
      <jjsnc-tab v-for="(item) in tabs" :label="item.label" :key="item.label">

        <i slot="icon" :class="item.icon"></i>

        {{item.label}}
      </jjsnc-tab>
    </jjsnc-tab-bar>-->
    <!-- <jjsnc-radio-group v-model="selected" :options="options"></jjsnc-radio-group> -->
    <!-- <jjsnc-radio-group
      v-model="selected2"
      :options="options2"
      position="right"
      :hollow-style="true"
    />-->
    <!-- <jjsnc-radio-group v-model="selected3" :options="options3" :horizontal="true"/> -->
    <!-- <jjsnc-radio-group>
      <jjsnc-radio
        v-for="(option, index) in options4"
        :key="index"
        :option="option"
        v-model="selected4"
      >
        <img :src="option.src">
      </jjsnc-radio>
    </jjsnc-radio-group>-->
    <jjsnc-checker v-model="checkerValue" :options="options"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import jjsncButton from "@/components/button/button.vue";
// import jjsncLoading from "@/components/loading/loading.vue";
// import jjsncTip from "@/components/tip/tip.vue";
// import jjsncCheckbox from "@/components/checkbox/checkbox.vue";
// import jjsncCheckboxGroup from "@/components/checkbox-group/checkbox-group.vue";
// import jjsncToolbar from "@/components/toolbar/toolbar.vue";
// import jjsncTabBar from "@/components/tab-bar/tab-bar.vue";
// import jjsncTab from "@/components/tab-bar/tab.vue";
// import jjsncRadioGroup from "@/components/radio/radio-group.vue";
// import jjsncRadio from "@/components/radio/radio.vue";
import jjsncChecker from "@/components/checker/checker.vue";
export default {
  name: "home",
  components: {
    // jjsncButton,
    // jjsncLoading,
    // jjsncTip,
    // jjsncCheckbox,
    // jjsncCheckboxGroup,
    // jjsncToolbar
    // jjsncTabBar,
    // jjsncTab,
    // jjsncRadioGroup,
    // jjsncRadio
    jjsncChecker
  },
  data() {
    return {
      // selected: "",
      // options: ["Option1", "Option2"],
      // selected2: 3,
      // options2: [
      //   {
      //     label: "Option1",
      //     value: 1
      //   },
      //   {
      //     label: "Option2",
      //     value: 2
      //   },
      //   {
      //     label: "Option3",
      //     value: 3,
      //     disabled: true
      //   }
      // ],
      // selected3: "3",
      // options3: [
      //   {
      //     label: "1",
      //     value: "1"
      //   },
      //   {
      //     label: "2",
      //     value: "2"
      //   },
      //   {
      //     label: "3",
      //     value: "3",
      //     disabled: true
      //   }
      // ],
      // selected4: "1",
      // options4: [
      //   {
      //     label: "1",
      //     value: "1",
      //     src:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg"
      //   },
      //   {
      //     label: "2",
      //     value: "2",
      //     src:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg"
      //   },
      //   {
      //     label: "3",
      //     value: "3",
      //     src:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg",
      //     disabled: true
      //   }
      // ]
      checkerValue: [],
      options: [
        {
          value: 1,
          text: "red"
        },
        {
          value: 2,
          text: "yellow"
        },
        {
          value: 3,
          text: "blue"
        },
        {
          value: 4,
          text: "green"
        }
      ]
    };
  },
  methods: {
    clickHandler() {
      // if you clicked home tab, then print 'Home'
    },
    changeHandler() {
      // if you clicked different tab, this methods can be emitted
    }
  }
};
</script>
<style>
.orange {
  color: #fc9153;
}
.home {
  padding: 20px;
  background: #efeff4;
  height: 100vh;
}
</style>


