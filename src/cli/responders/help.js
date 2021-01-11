export function manualResponder() {
    const data = [
        {
            command: 'request',
            description: 'Utils for creation http request',
            example: 'request METHOD <DATA> <PORT>'
        },
        {
            command: 'clear',
            description: 'Used to clear console'
        },
        {
            command: 'exit',
            description: 'Exit from application'
        },
        {
            command: 'process',
            description: 'Used to create child process',
            example: 'process open COMMAND PARAMETERS <--file> || process close APPNAME'
        },
        {
            command: 'system',
            description: 'Get information about os: hardware and os',
            example: 'system'
        }
    ];

    return data.forEach(item => {
        console.log(
            [
                [item.command].join(': '),
                ['description', item.description].join(': '),
                item.example ? ['example', item.example].join(': ') : ''
            ].join('\n\t')
        )
    });
}