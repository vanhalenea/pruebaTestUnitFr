var express = require('express');
var bodyParser = require('body-parser');
// var router = require('./router');
var app = express();
const http = require('http');
app.use(bodyParser.json({ type: 'application/json' }));

// app.use('', router);
app.use(require('./routes/index-routes'));

const welcome = p => () => {
    console.info(`up and running in port: ${p}`);
  };
  // app.use(errorHandler());
  http.createServer(app).listen(9200, welcome(9200));
