<template>
  <div class="home">
    <jjsnc-button>按钮</jjsnc-button>
    <jjsnc-button type="submit">submit</jjsnc-button>
    <jjsnc-button :active="true">Active Button</jjsnc-button>
    <jjsnc-button :disabled="true">disabled</jjsnc-button>
    <jjsnc-button icon="jjsncic-right">jjsncic-right</jjsnc-button>
    <jjsnc-button :light="true">按钮</jjsnc-button>
    <jjsnc-button :inline="true">inline</jjsnc-button>
    <jjsnc-button :outline="true">outline</jjsnc-button>
    <jjsnc-button :primary="true">primary</jjsnc-button>
  </div>
</template>

<script>
// @ is an alias to /src
import jjsncButton from "@/components/button/button.vue";
export default {
  name: "home",
  components: {
    jjsncButton
  }
};
</script>

