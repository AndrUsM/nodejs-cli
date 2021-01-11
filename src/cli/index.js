// const Readline = require('readline');
import Readline from 'readline';
import { commands } from './commandList.js';
import { emmiter } from './emmiters.js';

const readline = Readline.createInterface({
    input: process.stdin,
    out: process.stdout
})

export const cli = {};

cli.promptMessage = () => {
    readline.prompt();
    process.stdout.write("> ");
}

cli.initialize = () => {
    cli.promptMessage()
    readline.on('line', line => {
        const enteredCommand = line ? line.split(' ')[0] : '';
        let matcherCommand = Object.keys(commands).find(command => enteredCommand.startsWith(command));

        if (matcherCommand) emmiter.emit(matcherCommand, line);
        else console.info(`Command ${line} not found`);

        cli.promptMessage()
    });
    readline.on('close', () => {
        process.exit(1);
    });
}
