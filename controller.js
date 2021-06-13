const rideList = require('./rides');
const utils = require('./utils');

function rides(req, res, next) {
    res.json(rideList);
    next();
}

function calculateRidePrice(req, res, next) {
    const { distance, startTime } = req.body;
    res.json({ price: utils.calculatePrice(distance, startTime) });
    next();
}

module.exports = { rides, calculateRidePrice };