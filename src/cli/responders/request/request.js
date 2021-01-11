import { handleRequestError } from './cases/handleError.js';
import { methodsWithBody } from './constants/methodsList.js';
import { setPayloadValue } from './functions/setPayloadValue.js';
import { setPortValue } from './functions/setPortValue.js';
import { handleRequest } from './cases/handleRequest.js';

export function requestResponder(line) {
    const splitedLine = line.split(' ');

    const method = splitedLine[1];
    const url = splitedLine[2];

    let payload = '';
    let port = 443;

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