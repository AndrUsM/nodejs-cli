const handleRequestError = require('./cases/handleError');
const handleRequest = require('./cases/handleRequest');
const { methodsWithBody } = require('./constants/methodsList');
const setPayloadValue = require('./functions/setPayloadValue');
const setPortValue = require('./functions/setPortValue');

function requestResponder(line) {

    const splitedLine = line.split(' ');

    const method = splitedLine[1];
    const url = splitedLine[2];
    let payload = '';
    let port = { port: 443 };

    const isPayloadRequired = methodsWithBody.find(item => item === method);

    if (typeof isPayloadRequired === 'string') {
        const payloadAndPortValues = setPayloadValue({
            splitedLine: splitedLine
        });

        payload = payloadAndPortValues.payload;
        port = payloadAndPortValues.port;
    } else {
        const portValue = setPortValue({
            port: port,
            splitedLine: splitedLine
        });

        port = portValue.port;
    }

    if (url && method) {
        try {
            handleRequest({
                port: port,
                payload: payload,
                method: method,
                url: url,
                splitedLine: splitedLine
            });
        } catch (error) {
            console.error(error);
        }
    } else {
        const requiredDataList = [
            {
                name: 'method',
                type: 'string',
                value: method
            },
            {
                name: 'url',
                type: 'string',
                value: url
            }
        ];

        handleRequestError({
            requiredDataList: requiredDataList
        })
    }
}

module.exports = requestResponder;