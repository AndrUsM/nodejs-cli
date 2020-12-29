const openProcess = require('./openProcess');
const closeProcess = require('./closeProcess');

function ProcessResponder(processResponderOptions) {
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
        default:
        case 'open':
            openProcess(spawnCommand);
            break;
    }
}

module.exports = ProcessResponder;