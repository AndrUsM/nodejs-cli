const methodsWithoutBody = [
    'GET',
    'HEAD',
    'CONNECT',
    'TRACE',
];
const methodsWithBody = [
    'POST',
    'DELETE',
    'PATCH',
    'PUT',
    'OPTIONS'
]

const methodsList = [
    methodsWithBody,
    methodsWithoutBody
];

module.exports = {
    methodsWithBody: methodsWithBody,
    methodsWithoutBody: methodsWithoutBody,
    methodsList: methodsList
};
