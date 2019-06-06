const handleValidateRule = (field, type, custom) => {
    const ruleValue = field.rules && field.rules[type]
    if (type !== 'custom' && ruleValue && typeof ruleValue !== 'function') {
        field.rules[type] = custom
    }
}

const createHandler = (type) => {
    return (field, custom) => {
        return handleValidateRule(field, type, custom)
    }
}

const handleRequired = createHandler(require)

const boolRequeiredHandler = (field) => {
    return handleRequired(field, (val) => {
        return val !== false
    })
}

const numberGT0RequeiredHandler = (field) => {
    return handleRequired(field, (val) => {
        return val > 0
    })
}

export {
    boolRequeiredHandler,
    numberGT0RequeiredHandler
}