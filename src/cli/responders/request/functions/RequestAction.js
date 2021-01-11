import https from 'https';
import { methodsList } from '../constants/methodsList.js';

export class RequestAction {
    constructor(optionsObject) {
        const {
            path,
            hostname,
            port,
            method,
            payload
        } = optionsObject;

        this.payload = payload;
        this.errorInfo = {};

        this.options = {
            path: path,
            hostname: hostname,
            port: port || 443,
            method: method.toUpperCase() || 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }

    callback(response) {
        let data = '';
        response.setEncoding('utf-8');

        const method = response.socket._httpMessage.method;

        response.on('data', chunk => {
            data += chunk;
        });

        this.responseInfo = {
            method: method,
            statusCode: response.statusCode,
            headers: response.headers,
            payload: data
        };

        response.on('end', _ => {
            if (this.responseInfo)
                console.log(this.responseInfo);
        });
    }

    addPayload(request, payload) {
        const method = this.options.method;
        switch (method) {
            case 'GET':
            case 'HEAD': {
                break;
            }
            default: {
                const _method = payload && methodsList.find(item => item === method);
                if (_method)
                    request.write(payload);
                break;
            }
        }
    }

    handleError(request) {
        request.on('error', error => {
            this.errorInfo = error;
        });

        if (Object.values(this.errorInfo).length) {
            console.log(this.errorInfo);
        }
    }

    execute() {
        const request = https.request(this.options, this.callback);
        this.handleError(request);

        this.addPayload(request, this.payload);

        request.end();

        return this.responseInfo;
    }
}