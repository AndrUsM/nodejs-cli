import path from 'path';

export function createSubprocessFromFile(file) {
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