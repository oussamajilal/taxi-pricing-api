const moment = require('moment');

function getMultiplier(currentTime) {
    if (currentTime.isBetween(moment('16:00', 'HH:mm'), moment('19:00', 'HH:mm'))) {
        return 1.5;
    }

    if (currentTime.isBetween(moment('20:00', 'HH:mm'), moment('00:00', 'HH:mm').add(1, 'd'))) {
        return 1.0;
    }

    if (currentTime.isBetween(moment('00:00', 'HH:mm'), moment('06:00', 'HH:mm'))) {
        return 1.0;
    }

    return 0.5;
}

function calculatePrice(miles, startTime) {
    const extractedTime = moment(startTime).utcOffset('+0000').format('HH:mm');
    const currentTime = moment(extractedTime, 'HH:mm');
    return 1 + (miles / 0.2) * getMultiplier(currentTime);
}

module.exports = { calculatePrice };