let asyncDeps = [
  { mongo: require('./mongo') },
  { redis: require('./redis') }
];

let lib = module.exports = (server) => {
  return Promise.all( initAsyncDepPromises(server) )
    .then(deps => {
      deps.forEach( (dep, i) => {
        let key = Object.keys(asyncDeps[i])[0];
        lib[key] = dep;
      });
    }); 
};

function initAsyncDepPromises (server) {
  // call each module to init async connection routine
  return asyncDeps.map( (dep, i) => asyncDeps[i][Object.keys(asyncDeps[i])[0]](server) );
}
