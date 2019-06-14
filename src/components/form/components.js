import jjsncButton from '../button/button.vue'
import jjsncCheckbox from '../checkbox/checkbox.vue'
import jjsncCheckboxGroup from '../checkbox-group/checkbox-group.vue'
import jjsncChecker from '../checker/checker.vue'
import jjsncInput from '../input/input.vue'
import jjsncRadio from '../radio/radio.vue'
import jjsncRadioGroup from '../radio/radio-group.vue'
import jjsncRate from '../rate/rate.vue'
import jjsncSelect from '../select/select.vue'
import jjsncSwitch from '../switch/switch.vue'
import jjsncTextarea from '../textarea/textarea.vue'
import jjsncUpload from '../upload/upload.vue'

const allComponents = [
  jjsncButton,
  jjsncCheckbox,
  jjsncCheckboxGroup,
  jjsncChecker,
  jjsncInput,
  jjsncRadio,
  jjsncRadioGroup,
  jjsncRate,
  jjsncSelect,
  jjsncSwitch,
  jjsncTextarea,
  jjsncUpload
]

const components = {}
allComponents.forEach((Component) => {
  components[Component.name] = Component
})

export default components
