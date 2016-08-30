let Redis = require('redis');

let cache = null;

let redis = module.exports = (server) => {
  return new Promise ( (resolve, reject) => {
    cache = Redis.createClient(server.config.cache); // sync blocking call, DEAL WITH IT.
    resolve(cache);
  });
};
