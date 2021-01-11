import EventEmmiter from 'events';
import { commands } from './commandList.js';

import { requestResponder } from './responders/request/request.js';
import { clearResponder } from './responders/clear.js';
import { systemResponder } from './responders/system/system.js';
import { ProcessResponder } from './responders/process/index.js';
import { manualResponder } from './responders/help.js';

export const emmiter = new EventEmmiter();

emmiter.on(commands.exit, () => {
    process.exit(1);
});

emmiter.on(commands.request, line => {
    requestResponder(line);
});

emmiter.on(commands.clear, () => {
    clearResponder();
});

emmiter.on(commands.process, line => {
    ProcessResponder(line);
});

emmiter.on(commands.system, () => {
    systemResponder();
});

emmiter.on(commands.help, () => {
    manualResponder();
});