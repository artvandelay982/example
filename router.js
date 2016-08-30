let router = module.exports = (server) => new Promise ( (resolve, reject) => {
  routes(server);
  server.app.listen(server.config.port, (err) => {
    if (err) return reject(err);
    return resolve(server.config.msg.up);
  });
});

function routes (server) {
  let app = server.app;
  let lib = server.lib;
  
  app.get('/', (req, res) => res.send('Hello Express Server!'));
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
