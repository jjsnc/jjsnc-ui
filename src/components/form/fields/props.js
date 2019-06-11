const toButtonHandler = (field, type) => {
    field.type = 'button'
    if (!filed.props) {
        field.props = {}
    }
    field.props.type = type
}

export {
    toButtonHandler
}