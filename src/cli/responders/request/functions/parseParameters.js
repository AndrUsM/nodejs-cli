function parseParameters(parameters) {
    const {
        parameter,
        title
    } = parameters;
    
    const splitedParameter = parameter.split('=');

    const _title = splitedParameter[0];
    const _value = splitedParameter[1];

    const checkPortExistence = parameter && _title === title;
    if (checkPortExistence) {
        port = +_value;
    }

    return {
        title: _title,
        value: _value
    }
}

module.exports = parseParameters;