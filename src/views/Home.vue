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
    <jjsnc-checkbox v-model="checked" :option="{disabled: true}">Disabled Checkbox</jjsnc-checkbox> -->

    <jjsnc-checkbox class="with-click" v-model="checked">
      Agree
      <a href="javascript:;" @click.stop="myhandle">处理事件</a>
    </jjsnc-checkbox>
  </div>
</template>

<script>
// @ is an alias to /src
// import jjsncButton from "@/components/button/button.vue";
// import jjsncLoading from "@/components/loading/loading.vue";
// import jjsncTip from "@/components/tip/tip.vue";
import jjsncCheckbox from "@/components/checkbox/checkbox.vue";
export default {
  name: "home",
  components: {
    // jjsncButton,
    // jjsncLoading,
    // jjsncTip,
    jjsncCheckbox
  },
  data() {
    return {
      checked: false,
      option: {
        label: "Option Checkbox",
        value: "optionValue",
        disabled: false
      }
    };
  },
  methods: {
    myhandle() {

      alert('234')
    }
  }
};
</script>
<style>
.with-click .jjsnc-checkbox-label a {
  position: relative;
  z-index: 1;
}
</style>


