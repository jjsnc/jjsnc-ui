import defalutMessage from '../../locale/lang/zh-CN';
import { warn } from '../helpers/debug';
import { isUndef, isNumber } from "../helpers/util";
import { formatDate } from '../lang/date';


let proto;

const DEFAULT_LANG = 'zh-CN';

const locale = {
    name: 'locale',
    install(Vue) {
        if (locale.installed) return;
        proto = Vue.prototype;
        Vue.util.defineReactive(proto, '$jjsncLang', DEFAULT_LANG);
        proto['$jjsncMessage'] = { [DEFAULT_LANG]: defalutMessage };
        locale.installed = true;
    },
    use(lang, messages) {
        proto['jjsncLang'] = lang;
        const jjsncMessage = proto['jjsncMessage'];
        // if messages have never been stored in vue.prototye
        if (!(lang in jjsncMessage)) {
            jjsncMessage[[lang]] = messages;
        }

    },
    helpers: {
        toLocaleDateString(config, formatRules) {
            /**
    * Safari don't support formatRules like
    * 'yyyy-MM-dd hh:mm:ss', so transfer it to 'yyyy/MM/dd hh:mm:ss'
    */
            const compatibleConfig = isNumber(config) ? config : config.replace(/-/g, '/');
            const date = new Date(compatibleConfig);
            /* istanbul ignore if */
            if (isUndef(formatRules)) return date.toDateString();
            return formatDate(date, formatRules)
        }
    },
    addHelper(fnName, fn) {
        // check existed helper fn
        /* istanbul ignore if */
        if (fnName in locale.helpers) {
            warn(`${fnName} has already been registered on helpers function, please change another name`)
        }
        locale.helpers[fnName] = fn;
    }
}

export default locale;