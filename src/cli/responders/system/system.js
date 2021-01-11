import os from 'os';
import { parseObjects } from './parseObjects.js';
import { formatTime } from '../../../lib/timeFormat/index.js';


export function systemResponder() {
    const cpus = os.cpus();
    const cpuInfo = cpus[0];

    const userInfo = os.userInfo();

    const systemInfo = {
        user: {
            username: userInfo.username,
            hostname: os.hostname(),
            shell: userInfo.shell,
            uid: userInfo.uid,
            homeDir: userInfo.homedir,
        },
        memory: {
            free: os.freemem()
        },
        cpu: {
            model: cpuInfo.model,
            threads: cpus.length,
            speed: `${cpuInfo.speed}GHz`
        },
        system: {
            endOfLineOperator: os.EOL,
            type: os.type(),
            release: os.release(),
            version: os.version(),
            upTime: formatTime(os.uptime())
        },
        network: parseObjects(os.networkInterfaces())
    }

    console.log(systemInfo);
}