const controller = require('./controller');
const validator = require('./validator');

function configure(server) {
    server.get('/rides', controller.rides);
    server.post('/rides/calculate-price', validator.calculateRidePrice, controller.calculateRidePrice);
}

module.exports = { configure }