var path = require('path');
var assert = require('assert');
var bodyParser = require('body-parser');
var stringify = require('json-stringify-safe');

var app = require('express')();
var webpack = require('webpack');
var config = require('./webpack.config');


// Configure webpack
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
            result.data = [];

            var cursor = db.collection('test').find();
            cursor.each(function(error, doc) {
                if (error) {
                    console.log(error);
                    result = { status: 500, message: error };
                    return;
                }
                if (doc != null) {
                    result.data.append(doc);
                }
            });
        }
        response.send(stringify(result));
    });
});

var multer = require('multer');
var upload = multer();

app.post('/api', upload.array(), function (request, response) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(config.server.mongo, function(error, db) {
        var result = { status: 500 };
        if (error) {
            console.log('Error: Could not connect to DB. ' + error);
            result.message = error;
        } else {
            console.log('Insert all cards to DB');
            result.status = 200;

            console.log(request.body);

            if (request.body.data) {
                request.body.data.each(function(error, doc) {
                    db.collection('restaurants').insertOne(doc, function(error) {
                        if (error) {
                            console.log(error);
                            result = { status: 500, message: error };
                            return;
                        }
                    });
                });
            }
        }
        response.send(stringify(result));
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