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
    <!-- <jjsnc-checker v-model="checkerValue" :options="options"/> -->
    <!-- <jjsnc-checker v-model="checkerValue" :options="options" type="radio"/> -->
    <!-- <jjsnc-checker v-model="checkerList" :options="options" type="radio">
      <jjsnc-checker-item v-for="item in options" :key="item.value" :option="item">
        <span class="orange">
          <i class="jjsncic-alert"></i>
          {{item.text}}
        </span>
      </jjsnc-checker-item>
    </jjsnc-checker>-->

    <!-- <jjsnc-checker v-model="checkerList" :options="options" :min="1" :max="2"/> -->
    <!-- <jjsnc-input
      v-model="value"
      @input="changeHandler"
      :clearable="clearable"
      :placeholder="placeholder"
      :type="type"
      :maxLength="maxlength"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :eye="eye"
    ></jjsnc-input>-->
    <!-- <jjsnc-textarea
      v-model="value"
      :indicator="indicator"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
    ></jjsnc-textarea>-->
    <!-- <jjsnc-popup type="my-popup" ref="myPopup">My Popup Content 1</jjsnc-popup>
    <jjsnc-button @click="showPopup('myPopup')">Show Popup</jjsnc-button>-->
    <!-- <jjsnc-popup type="my-popup" :mask="mask" ref="myPopup">My Popup Content 1</jjsnc-popup>
    <jjsnc-button @click="showPopup('myPopup')">Show Popup</jjsnc-button>-->
    <!-- <jjsnc-popup type="my-popup" :mask="false" content="<i>My Popup Content 3</i>" ref="myPopup3"/>
    <jjsnc-button @click="showPopup('myPopup3')">Show Popup - with content</jjsnc-button>-->
    <!-- <jjsnc-popup
      type="my-popup"
      :position="position"
      :mask-closable="true"
      ref="myPopup4"
    >My Popup Content 4</jjsnc-popup>
    <jjsnc-button @click="showPopup">top/right/bottom/left/center</jjsnc-button>-->
    <!-- <jjsncSelect
      v-model="value"
      :title="title"
      :options="options"
      :placeholder="placeholder"
      :auto-pop="autoPop"
      :disabled="disabled"
      @change="change"
    ></jjsncSelect>-->
    <!-- <jjsnc-switch v-model="value">Switch</jjsnc-switch> -->
    <!-- <jjsnc-rate v-model="value"></jjsnc-rate> -->
    <!-- <jjsnc-input v-model="text" placeholder="E-mail"></jjsnc-input>
    <jjsnc-validator v-model="valid" :model="text" :rules="rules" :messages="messages"></jjsnc-validator>-->
    <!-- <jjsnc-validator :model="text" :rules="rules" v-model="valid">
      <jjsnc-input v-model="text"></jjsnc-input>
    </jjsnc-validator>-->
    <!-- <jjsnc-validator v-model="valid" :model="text" :rules="rules" :messages="messages">
      <jjsnc-input v-model="text" placeholder="component name"></jjsnc-input>
      <div slot="message" class="custom-msg" slot-scope="props">
        <div v-if="(props.dirty || props.validated) && !valid">
          <i class="dd-jjsncic-important"></i>
          {{ props.message }}
          <div>
            <span
              v-for="(item, index) in Object.values(props.result)"
              :key="index"
              v-if="item.inValid"
            >{{ item.message + ' ' }}</span>
          </div>
        </div>
      </div>
    </jjsnc-validator>-->
    <!-- <jjsnc-upload
      action="http://localhost:8080/photos/"
      :simultaneous-uploads="1"
      @files-added="filesAdded"
    />-->
    <jjsnc-form
      :model="model"
      :schema="schema"
      :immediate-validate="false"
      :options="options"
      @validate="validateHandler"
      @submit="submitHandler"
      @reset="resetHandler"
    ></jjsnc-form>
  </div>
</template>

<script>
// @ is an alias to /src
// const positions = ["top", "right", "bottom", "left", "center"];
// let cur = 0;
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
// import jjsncChecker from "@/components/checker/checker.vue";
// import jjsncCheckerItem from "@/components/checker/checker-item.vue";
// import jjsncInput from "@/components/input/input.vue";
// import jjsncTextarea from "@/components/textarea/textarea.vue";
// import jjsncPopup from "@/components/popup/popup.vue";
// import jjsncSelect from "@/components/select/select.vue";
// import jjsncSwitch from "@/components/switch/switch.vue";
// import jjsncRate from "@/components/rate/rate.vue";
// import jjsncInput from "@/components/input/input.vue";
// import jjsncValidator from "@/components/validator/validator.vue";
// import jjsncUpload from "@/components/upload/upload.vue";
import jjsncForm from "@/components/form/form.vue";

export default {
  name: "home",
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        checkboxValue: false,
        checkboxGroupValue: [],
        inputValue: "",
        radioValue: "",
        rateValue: 0,
        selectValue: 2018,
        switchValue: true,
        textareaValue: "",
        uploadValue: []
      },
      schema: {
        groups: [
          {
            legend: "基础",
            fields: [
              {
                type: "checkbox",
                modelKey: "checkboxValue",
                props: {
                  option: {
                    label: "Checkbox",
                    value: true
                  }
                },
                rules: {
                  required: true
                },
                messages: {
                  required: "Please check this field"
                }
              },
              {
                type: "checkbox-group",
                modelKey: "checkboxGroupValue",
                label: "CheckboxGroup",
                props: {
                  options: ["1", "2", "3"]
                },
                rules: {
                  required: true
                }
              },
              {
                type: "input",
                modelKey: "inputValue",
                label: "Input",
                props: {
                  placeholder: "请输入"
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: "blur"
              },
              {
                type: "radio-group",
                modelKey: "radioValue",
                label: "Radio",
                props: {
                  options: ["1", "2", "3"]
                },
                rules: {
                  required: true
                }
              },
              {
                type: "select",
                modelKey: "selectValue",
                label: "Select",
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020]
                },
                rules: {
                  required: true
                }
              },
              {
                type: "switch",
                modelKey: "switchValue",
                label: "Switch",
                rules: {
                  required: true
                }
              },
              {
                type: "textarea",
                modelKey: "textareaValue",
                label: "Textarea",
                rules: {
                  required: true
                },
                // debounce validate
                // if set to true, the default debounce time will be 200(ms)
                debounce: 100
              }
            ]
          },
          {
            legend: "高级",
            fields: [
              {
                type: "rate",
                modelKey: "rateValue",
                label: "Rate",
                rules: {
                  required: true
                }
              },
              {
                type: "upload",
                modelKey: "uploadValue",
                label: "Upload",
                events: {
                  "file-removed": (...args) => {
                    // console.log("file removed", args);
                  }
                },
                rules: {
                  required: true,
                  uploaded: (val, config) => {
                    return Promise.all(
                      val.map((file, i) => {
                        return new Promise((resolve, reject) => {
                          if (file.uploadedUrl) {
                            return resolve();
                          }
                          // fake request
                          setTimeout(() => {
                            if (i % 2) {
                              reject(new Error());
                            } else {
                              file.uploadedUrl = "uploaded/url";
                              resolve();
                            }
                          }, 1000);
                        });
                      })
                    ).then(() => {
                      return true;
                    });
                  }
                },
                messages: {
                  uploaded: "上传失败"
                }
              }
            ]
          },
          {
            fields: [
              {
                type: "submit",
                label: "Submit"
              },
              {
                type: "reset",
                label: "Reset"
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard" // classic fresh
      }
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      // console.log('submit', e)
    },
    validateHandler(result) {
      this.validity = result.validity;
      this.valid = result.valid;
      // console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    resetHandler(e) {
      e.preventDefault();
      // console.log('reset', e)
    }
  },
  components: {
    // jjsncButton,
    // jjsncLoading,
    // jjsncTip,
    // jjsncCheckbox,
    // jjsncCheckboxGroup,
    // jjsncToolbar,
    // jjsncTabBar,
    // jjsncTab,
    // jjsncRadioGroup,
    // jjsncRadio,
    // jjsncChecker,
    // jjsncCheckerItem,
    // jjsncInput,
    // jjsncTextarea
    // jjsncPopup
    // jjsncSelect
    // jjsncSwitch
    // jjsncRate
    // jjsncInput,
    // jjsncValidator
    // jjsncUpload
    jjsncForm
  }
};
</script>
<style lang="scss">
.home {
  padding: 20px;
  background: #efeff4;
  height: 100vh;
}

.jjsnc-validator_warn {
  input {
    border: solid 1px yellow;
  }
}
.custom-msg {
  color: orange;
}

/* .jjsnc-popup-content {
  padding: 20px;
  color: #fff;

} */
</style>


