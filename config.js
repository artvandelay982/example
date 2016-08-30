let config = module.exports = {
  port: 8080,
  cache: 'redis://localhost:6379',
  db: 'mongodb://127.0.0.1:27017/test'
};

config.msg = {
  up: 'Express Server listening on port ' + config.port,
  err: {
    start: 'Error starting server: '
  }
};
