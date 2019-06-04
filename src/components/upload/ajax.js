import {
    evalOpts,
    STATUS_SUCCESS,
    STATUS_UPLOADING,
    STATUS_ERROR
} from './util'

export default function ajaxUpload(file, options, changeHandler) {
    const {
        target,
        headers = {},
        data = {},
        fileName = 'file',
        withCredentials,
        timeout,
        prop = 'file',
        progressInterval = 100,
        checkSuccess = function () { return true }
    } = options
}