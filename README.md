### Node JS CLI

_Task_: to develop a <abbr title = "CLI">command line application</abbr> that will listen to user commands and perform certain actions, depending on the line entered. After receiving the command the program must generate an internal event that will be executed by the handler of this event.

* The logic of each command should not be in the a seperate handler for a specific event.

#### Available commands
|Command |Attributes|Description|Example|
|----|-----|-------|-------|
|clear||Clear console|clear|
|exit||Exit application|exit|
|process|--file|Allow exute file with js extension|process open PATH_TO_FILE --file|
||open|Used to create a new subprocess|process open COMMAND PARAMETERS|
||close|Used to kill process by application name|process close APP_NAME|
|requst||Used to send http request|request METHOD URL DATA|
|system||At the request of the user, provide information on the use of the OS|system|

## Learn more about using cli

### Request
#### Base usage:
`request METHOD URL DATA`

If need to set http port (by default port is 443):

`request METHOD URL <PAYLOAD> PORT=PORT_VALUE`

**By default used GET method*


**Payload can be used only in methods that require request data.*

#### Examples:
`request GET https://httpbin.org/get`

`request POST https://httpbin.org/post {data:'value'}`

Response values:

    method: GET, POST, DELETE...
    statusCode: number,
    headers: object,
    payload: object

### Process
#### Base usage:
`process MODE COMMAND PARAMETERS`

#### Examples:
`process open home/user/index.js --file`

`process open ls -l`

`process close postman`

### System
#### Usage:
`system`

Response values:

    user: {
        username: string,
        hostname: string,
        shell: string,
        uid: number,
        homedir: string
    },
    memory: {
        free: number
    },
    cpu: {
        model: string,
        threads: number,
        speed: string
    },
    system:{
        endOfLineOperator: string,
        type: string,
        release: string,
        version: string,
        upTime: string
    },
    network:{
        INTERFACE_NAME: {
            address: string,
            netmask: string,
            family: string,
            mac: string,
            internal: boolean,
            cidr: string,
            scopeid: number
        }
    }


