var path = require('path');
var stringify = require('json-stringify-safe');
var webpack = require('webpack');
var config = require('./webpack.config');

var express = require('express');
var app = express();


// Configure webpack
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


// Configure routes
app.get('/api', function (request, response) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(config.server.mongo, function(error, db) {
        var result = { status: 500 };
        if (error) {
            console.log('Error: Could not connect to DB. ' + error);
            result.message = error;
        } else {
            console.log('Return all cards from DB');
            result.status = 200;
            result.data = db.collection('test').find();
        }
        response.write(stringify(result));
        db.close();
    });
});

app.get('*', function (request, response) {
    console.log('Get ' + request.baseUrl);
    response.sendFile(path.join(__dirname, 'index.html'));
});


// Run express server
app.listen(config.server.port, config.server.host, function(error) {
    if (error) {
        console.log(error);
    }
    console.log('Listening at ' + config.server.host + ':' + config.server.port);
});