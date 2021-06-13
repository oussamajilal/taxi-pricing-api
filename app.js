const restify = require('restify');
const controller = require('./controller');

const server = restify.createServer();
server.get('/rides', controller.rides);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});