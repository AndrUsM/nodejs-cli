/**
 * field: {
 *  name: string,
 *  type: string,
 *  value: any
 * }
 */
export function handleRequestError(parameters) {
    const {
        requiredDataList
    } = parameters;

    let emptyParametersList = [];

    requiredDataList.forEach((field) => {
        const { name, type, value } = field;
        if (typeof value !== type || !value)
            emptyParametersList.push(`${name}:${type}`);
    });
    
    const checkNumberOfItemsCondition = emptyParametersList.length > 1;
    
    const parametersWord = [
        'parameter',
        checkNumberOfItemsCondition ? 's' : ''
    ].join('');

    const message = [
        emptyParametersList.join(' and '),
        checkNumberOfItemsCondition ? 'are' : 'is',
        `required ${parametersWord} for request command`
    ].join(' ');

    console.log(message);
}