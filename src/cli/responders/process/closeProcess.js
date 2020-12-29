const { spawn } = require('child_process');

function closeProcess(application) {
    const getApplicationPidProcess = spawn('pgrep', [application]);

    getApplicationPidProcess.stdout.on('data', data => {
        const pid = +data.toString();
        if (pid) {
            process.kill(pid, 9);
        } else {
            console.error(`Not found pid for ${application}`);
        }
    })


}

module.exports = closeProcess;