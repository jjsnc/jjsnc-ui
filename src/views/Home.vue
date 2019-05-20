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
   <div id="ll" class="a b c d sss">
       a b c d sss
   </div>


  </div>
</template>

<script>
// @ is an alias to /src
// import jjsncButton from "@/components/button/button.vue";
// import jjsncLoading from "@/components/loading/loading.vue";
// import jjsncTip from "@/components/tip/tip.vue";
// import jjsncCheckbox from "@/components/checkbox/checkbox.vue";
// import jjsncCheckboxGroup from "@/components/checkbox-group/checkbox-group.vue";
import jjsncToolbar from "@/components/toolbar/toolbar.vue";
export default {
  name: "home",
  components: {
    // jjsncButton,
    // jjsncLoading,
    // jjsncTip,
    // jjsncCheckbox,
    // jjsncCheckboxGroup,
    jjsncToolbar
  },
  data() {
    return {
    }
  },
  methods: {
    showText(item) {
      alert(item)
    },
    moreMoney(item) {
      this.money += 10
      item.text = '一口价<span class="orange">' + this.money + '元</span>'
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
};
</script>
<style>

.orange{
  color: #fc9153
}
  
</style>


