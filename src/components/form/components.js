import jjsnceButton from '../button/button.vue'
import jjsnceCheckbox from '../checkbox/checkbox.vue'
import jjsnceCheckboxGroup from '../checkbox-group/checkbox-group.vue'
import jjsnceChecker from '../checker/checker.vue'
import jjsnceInput from '../input/input.vue'
import jjsnceRadio from '../radio/radio.vue'
import jjsnceRadioGroup from '../radio/radio-group.vue'
import jjsnceRate from '../rate/rate.vue'
import jjsnceSelect from '../select/select.vue'
import jjsnceSwitch from '../switch/switch.vue'
import jjsnceTextarea from '../textarea/textarea.vue'
import jjsnceUpload from '../upload/upload.vue'

const allComponents = [
    jjsnceButton,
    jjsnceCheckbox,
    jjsnceCheckboxGroup,
    jjsnceChecker,
    jjsnceInput,
    jjsnceRadio,
    jjsnceRadioGroup,
    jjsnceRate,
    jjsnceSelect,
    jjsnceSwitch,
    jjsnceTextarea,
    jjsnceUpload
]


const components = {}

allComponents.forEach((Component) => {
    components[Component.name] = Component
})

export default components