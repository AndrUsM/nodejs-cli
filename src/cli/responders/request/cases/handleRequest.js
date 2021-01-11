import urlUtils from 'url';
import { RequestAction } from '../functions/RequestAction.js';

export function handleRequest(parameters) {
    const {
        url
    } = parameters;

    let {
        port,
        payload,
        method,
    } = parameters;

    const parsedUrl = urlUtils.parse(url);

    const requestConfigurationOptions = {
        hostname: parsedUrl.hostname,
        port: port,
        path: parsedUrl.path,
        method: method,
        payload: payload
    };

    const requestConfiguration = new RequestAction(requestConfigurationOptions);

    const requestResoult = requestConfiguration.execute();

    if (requestResoult) {
        console.log(requestResoult);
    }
    else {
        const message = [
            'No response with options:',
            JSON.stringify(requestConfigurationOptions)
        ].join(" ");

        console.log(message);
    };
}