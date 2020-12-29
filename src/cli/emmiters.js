const EventEmmiter = require('events');
const commands = require('./commandList');

const requestResponder = require('./responders/request/request');
const clearResponder = require('./responders/clear');
const systemResponder = require('./responders/system/system');
const ProcessResponder = require('./responders/process/index');
const ManualResponder = require('./responders/help');

const emmiter = new EventEmmiter();

emmiter.on(commands.exit, _ => {
    process.exit(1);
})

emmiter.on(commands.request, line => {
    requestResponder(line);
})

emmiter.on(commands.clear, _ => {
    clearResponder();
})

emmiter.on(commands.process, line => {
    ProcessResponder(line)
})

emmiter.on(commands.system, _ => {
    systemResponder();
});

emmiter.on(commands.help, _ => {
    ManualResponder()
})

module.exports = emmiter;