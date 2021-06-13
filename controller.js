const rideList = require('./rides')

function rides(req, res, next) {
    res.json(rideList);
    next();
}

function calculateRidePrice(req, res, next) {
    console.log(req.body);
    res.send('OK');
    next();
}

module.exports = { rides, calculateRidePrice };