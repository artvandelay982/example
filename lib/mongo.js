let db = require('mongodb');

let mongo = module.exports = (server) => new Promise ( (resolve, reject) => {
  db.connect(server.config.db, function (err, client) {
    if (err) return reject(err);
    
    return resolve(client);
  });
});
