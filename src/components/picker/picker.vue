<template>
  <transition name="jjsnc-picker-fade">
    <!-- Transition animation need use with v-show in the same template. -->
    <jjsnc-popup
      type="picker"
      :mask="true"
      :center="false"
      :z-index="zIndex"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="maskClick"
    >
      <transition name="jjsnc-picker-move">
        <div class="jjsnc-picker-panel jjsnc-safe-area-pb" v-show="isVisible" @click.stop>
          <div class="jjsnc-picker-choose border-bottom-1px">
            <span class="jjsnc-picker-cancel" @click="cancel">{{_cancelTxt}}</span>
            <span class="jjsnc-picker-confirm" @click="confirm">{{_confirmTxt}}</span>
            <div class="jjsnc-picker-title-group">
              <h1 class="jjsnc-picker-title" v-html="title"></h1>
              <h2 v-if="subtitle" class="jjsnc-picker-subtitle" v-html="subtitle"></h2>
            </div>
          </div>
          <div class="jjsnc-picker-content">
            <i class="border-bottom-1px"></i>
            <i class="border-top-1px"></i>
            <div class="jjsnc-picker-wheel-wrapper" ref="wheelWrapper">
              <div
                v-for="(data, index) in finalData"
                :key="index"
                :style="{order:_getFlexOrder(data)}"
              >
                <!-- The class name of the ul and li need be configured to BetterScroll. -->
                <ul class="jjsnc-picker-wheel-scroll">
                  <li
                    v-for="(item, index) in data"
                    class="jjsnc-picker-wheel-item"
                    :key="index"
                    v-html="item[textKey]"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="jjsnc-picker-footer"></div>
        </div>
      </transition>
    </jjsnc-popup>
  </transition>
</template>

<script>
import Bscroll from "better-scroll";
import jjsncPopup from "../popup/popup.vue";
import visibilityMixin from "../../common/mixins/visibility";
import popupMixin from "../../common/mixins/popup";
import basicPickerMixin from '../../common/mixins/basic-picker';
  import pickerMixin from '../../common/mixins/picker'
import localeMixin from "../../common/mixins/locale";
const COMPONENT_NAME = "jjsnc-picker";

const EVENT_SELECT = "select";
const EVENT_VALUE_CHANGE = "value-change";
const EVENT_CANCEL = "cancel";
const EVENT_CHANGE = "change";

export default {
  data() {},
  components: {
    jjsncPopup
  }
};
</script>

<style lang="scss">
</style>
