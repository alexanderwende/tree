/*global jasmine, __karma__, window, System*/

Error.stackTraceLimit            = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

// this disables karma's default on-load behavior
__karma__.loaded = function () {};

// a filter method for our spec files
function onlySpecFiles (path) {

    return /\.spec\.js$/.test(path);
}

// a method which loads all spec files via System.import
// and returns them as an array of promises
function resolveTestFiles () {

    return Object.keys(window.__karma__.files)
                 .filter(onlySpecFiles)
                 .map(function (moduleName) {
                     return System.import(moduleName);
                 });
}

// for karma's test-server the base URL is '/base'
// and we only need this system config for karma
System.config({
    baseURL: '/base'
});

// now we can load our default systemjs config
System.import('systemjs.config.js')
      // load all our spec files via System.import
      .then(function () {
          return Promise.all(resolveTestFiles());
      })
      // and then start karma manually
      .then(
          function () {
              __karma__.start();
          },
          function (error) {
              __karma__.error(error.stack || error);
          }
      );