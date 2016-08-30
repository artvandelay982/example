// server package deps
let express = require('express');
let bodyParser = require('body-parser');

// local deps
let config = require('./config');
let lib = require('./lib');
let router = require('./router');

// server express app
let app = express();

let Server = module.exports = {
  express: express,
  config: config,
  lib: lib,
  router: router,
  app: app,
  start: start
};

function start (server) {
  server = typeof server !== 'undefined' ? server : Server;
  
  lib(server)
    .then( () => router(server) )
    .then( msg => console.log(msg) )
    .catch( err => console.error(config.msg.err.start, err) );
};

if (module === require.main) start(Server);
