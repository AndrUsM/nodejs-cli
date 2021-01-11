export function parseObjects(objects) {
    let _object = new Object();

    Object.entries(objects).forEach(([key, value]) => {
        if (typeof value === 'object') {
            let _arraysObject = new Object();

            Array.from(value).forEach(item => {
                Object.entries(item).forEach(([itemKey, itemValue]) => {
                    _arraysObject[itemKey] = itemValue;
                })
                _object[key] = _arraysObject;
            })
        } else {
            _object[key] = value;
        }
    });

    return _object;
}