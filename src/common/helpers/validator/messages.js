import { deepAssign } from '../util';

function addMessage(...args) {
    const NAMESPACE = 'validator';
    const vueProto = this._base.prototype;
    const lang = vueProto.$jjsncLang;
    const baseMessage = vueProto.$jjsncMessage[lang][NAMESPACE]

    if (typeof args[0] === 'string') {
        args[0] = {
            [args[0]]: args[1]
        }
    }
    deepAssign(baseMessage, args[0]);
}

export { addMessage }