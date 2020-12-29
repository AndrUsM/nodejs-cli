const parseParameters = require('./parseParameters');

function setPortValue(parameters) {
    let { port, splitedLine } = parameters;
    port = splitedLine[3];

    if (port) {
        port = parseParameters({
            parameter: port,
            title: 'port'
        }).value;
    }
    return {
        port: port
    }
}

module.exports = setPortValue;