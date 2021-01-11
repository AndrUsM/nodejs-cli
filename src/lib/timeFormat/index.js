export function formatTime(timeInSeconds) {
    timeInSeconds = typeof timeInSeconds === 'number' ?
        timeInSeconds :
        parseInt(timeInSeconds);

    let hours = Math.floor(timeInSeconds / 3600);
    const hoursInSeconds = hours * 3600;

    let minutes = Math.floor((timeInSeconds - hoursInSeconds) / 60);
    let seconds = timeInSeconds - hoursInSeconds - (minutes * 60);

    hours = checkValueLength(hours);
    minutes = checkValueLength(minutes);
    seconds = checkValueLength(seconds);

    if (timeInSeconds) {
        return [
            hours,
            minutes,
            seconds
        ].join(':');
    } else {
        const message = [
            'Wrong <formatTime> function argument.',
            'timeInSeconds must has number type!'
        ].join('\n');

        throw new Error(message);
    }
}

function checkValueLength(value) {
    return value < 10 ? `0${value}` : value;
}