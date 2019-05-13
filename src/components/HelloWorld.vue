<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <jjsnc-button>按钮</jjsnc-button>
  </div>
</template>

<script>
import jjsncButton from '@/components/button/button.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    jjsncButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
