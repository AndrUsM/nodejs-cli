const parseParameters = require('./parseParameters');

function setPayloadValue(parameters) {
    const { splitedLine } = parameters;
    let payload = '';
    payload = parseParameters({
        parameter: splitedLine[3],
        title: 'data'
    }).value;

    port = parseParameters({
        parameter: splitedLine[4],
        title: 'port'
    }).value;

    return {
        port: port,
        payload: payload
    }
}

module.exports = setPayloadValue;