const restify = require('restify');
const cors = require('cors');
const router = require('./router');
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

router.configure(server);

server.use(cors())

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});