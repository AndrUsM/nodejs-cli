const { spawn } = require('child_process');
const createSubprocessFromFile = require('./createSubprocessFromFile');

function openProcess(spawnCommand) {
    let { command,parameters } = spawnCommand;
    parameters = parameters ? parameters.split(' ') : [];

    // if command is a file
    if(parameters.includes('--file')){
        const fileExtensionConfig = createSubprocessFromFile(command);
        command = fileExtensionConfig.command;
        parameters = fileExtensionConfig.parameters
    }

    const openedProcess = spawn(command, parameters);
    openedProcess.stdout.on('data', data => {
        const outData = [
            '\n',
            data.toString()
        ].join("");
        console.log(outData);
    });

    openedProcess.on('close', code => {
        console.log(`child process close all stdio with code ${code}`);
    });

    openedProcess.on('exit', code => {
        console.log(`child process exited with code ${code}`);
    });

    openedProcess.on('error', code => {
        console.log(code);
    });
}

module.exports = openProcess;