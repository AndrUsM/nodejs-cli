const http = require('http');
const cli = require('../cli/index');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOST || 'localhost';

function createServer() {
    http.createServer().listen(PORT, HOSTNAME, () => {
        console.log(`Server runned on http://${HOSTNAME}:${PORT}`);
    });
}

function runServer() {
    createServer();
    cli.initialize();
}

module.exports = runServer;