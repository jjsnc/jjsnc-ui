<template>
  <div ref="wrapper" class="jjsnc-scroll-wrapper">
    <div class="jjsnc-scroll-content">
      <div class="jjsnc-scroll-list-wrapper">
        <slot>
          <ul class="jjsnc-scroll-list">
            <li
              class="jjsnc-scroll-item border-bottom-1px"
              v-for="(item, index) in data"
              :key="index"
              @click="clickItem(item)"
            >{{item}}</li>
          </ul>
        </slot>
      </div>
      <slot name="pullup" :pullUpload="pullUpload" :isPullUpLoad="isPullUpLoad">
        <div class="jjsnc-pullup-wrapper" v-if="pullUpload">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <loading></loading>
          </div>
        </div>
      </slot>
    </div>
    <div v-if="pullDownRefresh" class="jjsnc-pulldown" ref="pulldown">
      <slot
        name="pulldonw"
        :pullDownRefresh="pullDownRefresh"
        :pullDownStyle="pullDownStyle"
        :beforePullDown="beforePullDown"
        :isPullingDown="isPullingDown"
        :bubbleY="bubbleY"
      >
        <div class="jjsnc-pulldown-wrapper" :style="pullDownStyle">
          <div class="before-trigger" v-show="beforePullDown">
            <bubble :y="bubbleY" class="bubble"></bubble>
          </div>
          <div class="after-trigger" v-show="!beforePullDown">
            <div v-show="isPullingDown" class="loading">
              <loading></loading>
            </div>
            <div v-show="!isPullingDown" class="jjsnc-pulldown-loaded">
              <span>{{refreshTxt}}</span>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>


export default {};
</script>
<style lang="scss">
</style>


