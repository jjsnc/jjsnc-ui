import Vue from 'vue'
import {
    /* eslint-disable no-unused-vars */
    // Style,
    // locale
    Locale,
    // basic
    Button,
    Loading,
    Tip,
    Toolbar,
    TabBar,
    TabPanels,
    // form
    Checkbox,
    CheckboxGroup,
    Checker,
    Radio,
    RadioGroup,
    Input,
    Textarea,
    Select,
    Switch,
    Rate,
    Validator,
    Upload,
    Form,
    // popup
    Popup,
    Toast,
    Picker,
    // CascadePicker,
    // DatePicker,
    // TimePicker,
    // SegmentPicker,
    Dialog,
    ActionSheet,
    // Drawer,
    ImagePreview,
    // scroll
    Scroll,
    Slide,
    IndexList,
    Swipe,
    Sticky,
    ScrollNav,
    ScrollNavBar,
    RecycleList,
    // module
    BetterScroll,
    createAPI
} from './module'



const components = [
    // locale
    Locale,
    // basic
    Button,
    Loading,
    Tip,
    Toolbar,
    TabBar,
    TabPanels,
    // form
    Checkbox,
    CheckboxGroup,
    Checker,
    Radio,
    RadioGroup,
    Input,
    Textarea,
    Select,
    Switch,
    Rate,
    Validator,
    Upload,
    Form,
    // popup
    Popup,
    Toast,
    Picker,
    // CascadePicker,
    // DatePicker,
    // TimePicker,
    // SegmentPicker,
    Dialog,
    ActionSheet,
    // Drawer,
    ImagePreview,
    // scroll
    Scroll,
    Slide,
    IndexList,
    Swipe,
    Sticky,
    ScrollNav,
    ScrollNavBar,
    RecycleList
]

components.forEach((component)=> {
    Vue.use(component)
})