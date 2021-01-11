export function parseParameters(parameters) {
    const {
        parameter,
        title
    } = parameters;
    let port = 443;

    const splitedParameter = parameter.split('=');

    const _title = splitedParameter[0];
    const _value = splitedParameter[1];

    const checkPortExistence = parameter && _title === title;

    if (checkPortExistence) {
        port = parseInt(_value);
    }

    return {
        title: _title,
        value: _value
    }
}