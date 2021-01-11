import { openProcess } from './openProcess.js';
import { closeProcess } from './closeProcess.js';

export function ProcessResponder(processResponderOptions) {
    const line = processResponderOptions;
    const splitedLine = line.split(' ');

    const action = splitedLine[1];
    const pid = splitedLine[2];

    const spawnCommand = {
        command: splitedLine[2],
        parameters: splitedLine[3]
    }

    switch (action) {
        case 'close': {
            closeProcess(pid);
            break;
        }
        case 'open':
        default: {
            openProcess(spawnCommand);
            break;
        }
    }
}
