import { parseParameters } from './parseParameters.js';

export function setPortValue(parameters) {
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