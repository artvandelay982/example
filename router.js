let bodyParser = require('body-parser');

let router = module.exports = (server) => new Promise ( (resolve, reject) => {
  bootstrap(server);
  routes(server);
  server.app.listen(server.config.port, (err) => {
    if (err) return reject(err);
    return resolve(server.config.msg.up);
  });
});

function bootstrap (server) {
  server.app.use(bodyParser.urlencoded({ extended: true }));
  server.app.use(bodyParser.json());
}

function routes (server) {
  let app = server.app;
  let config = server.config;
  let lib = server.lib;
  
  app.get('/', (req, res) => res.send(config.msg.hi));
  app.get('/mongo', (req, res) => {
    lib.mongo.listCollections().toArray( (err, docs) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(docs);
    });
  });
  app.get('/redis', (req, res) => {
    lib.redis.keys( '*', (err, keys) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(keys);
    });
  });
}
