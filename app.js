const restify = require('restify');
const controller = require('./controller');
const validator = require('./validator');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({
  mapParams: false
}));
server.use(restify.plugins.fullResponse());

server.on('restifyError', function (req, res, err, next) {
  res.status(err.status);
  res.json(err.errors);
});

server.get('/rides', controller.rides);
server.post('/rides/calculate-price', validator.calculateRidePrice, controller.calculateRidePrice);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});