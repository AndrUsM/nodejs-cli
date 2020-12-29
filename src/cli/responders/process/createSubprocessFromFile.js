const path = require('path');

function createSubprocessFromFile(file) {
    const fileExtension = path.extname(file);

    switch (fileExtension) {
        case '.js': {
            return {
                command: 'node',
                parameters: [file]
            }
        }
        default: {
            break;
        }
    }
}

module.exports = createSubprocessFromFile;