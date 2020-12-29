function formatTime(timeInSeconds) {
    timeInSeconds = typeof timeInSeconds === 'number' ? timeInSeconds : +timeInSeconds;
    
    var hours = Math.floor(timeInSeconds / 3600);
    const hoursInSeconds = hours * 3600;

    var minutes = Math.floor((timeInSeconds - hoursInSeconds) / 60);
    var seconds = timeInSeconds - hoursInSeconds - (minutes * 60);

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
        throw new Error('Wrong <formatTime> function argument.\n timeInSeconds must has number type!');
    }
}

function checkValueLength(value) {
    return value < 10 ? `0${value}` : value;
}

module.exports = formatTime;