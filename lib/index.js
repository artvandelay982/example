let asyncDeps = [
  { mongo: require('./mongo') },
  { redis: require('./redis') }
];

let lib = module.exports = (server) => {
  return Promise.all(initAsyncDepPromises(server))
    .then(exportAsyncDeps); 
};

// call each module to init async connection routine
function initAsyncDepPromises (server) {
  return asyncDeps.map( (dep, i) => asyncDeps[i][Object.keys(asyncDeps[i])[0]](server) );
}

function exportAsyncDeps (deps) {
  deps.forEach( (dep, i) => {
    let key = Object.keys(asyncDeps[i])[0];
    lib[key] = dep;
  });
}
