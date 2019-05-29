export const warn = function (msg, componentName) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
        const component = componentName ? `<${componentName}> ` : ''
        // eslint-disable-next-line 
        console.error(`[jjsnc warn]: ${component}${msg}`)
    }
}

export const tip = function (msg, componentName) {
    if (process.env.NODE_ENV !== 'production') {
        const component = componentName ? `<${componentName}> ` : ''
        // eslint-disable-next-line 
        console.warn(`[jjsnc tip]: ${component}${msg}`)
    }
}
