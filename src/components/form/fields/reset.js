const typesRestMap = {
    checkbox() {
        /* istanbul ignore next */
        return false
    },
    select() {
        /* istanbul ignore next */
        return null
    }
}

function getResetValueType(type) {
    const resetHandler = typesRestMap[type]
    return resetHandler && resetHandler()
}

export {
    getResetValueType
}