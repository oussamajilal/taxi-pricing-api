const rideList = require('./rides')

function rides(req, res, next) {
    res.contentType = 'json';
    res.send(rideList);
    next();
}

module.exports = { rides };