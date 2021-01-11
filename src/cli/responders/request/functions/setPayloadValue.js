import { parseParameters } from './parseParameters.js';

export function setPayloadValue(parameters) {
    const { splitedLine } = parameters;

    const payload = parseParameters({
        parameter: splitedLine[3],
        title: 'data'
    }).value;

    const port = parseParameters({
        parameter: splitedLine[4],
        title: 'port'
    }).value;

    return {
        port: port,
        payload: payload
    }
}
