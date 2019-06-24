var co = require('co');
const http = require('http');
const Metro = require('metro');
const express = require('express');


// https://blog.csdn.net/xiangzhihong8/article/details/85054279

const app = express();

// co(function *() {
//   const config = yield Metro.loadConfig();
//   console.log(config);
//   const metroBundlerServer = yield Metro.runMetro(config);
//   app.use(metroBundlerServer.processRequest);
//   app.listen(8080);
// })

co(function *() {
  const config = yield Metro.loadConfig();
  const metroBundlerServer = yield Metro.runBuild(config, {
    entry: 'index.js',
    out: 'bundle',
    platform: 'ios',
    sourceMap: true,
    sourceMapUrl: './bundle.map'
  });
})
