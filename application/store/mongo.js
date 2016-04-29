var config = require('./webpack.config');

function getAllCards(callback) {
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

            var cursor = db.collection('cards').find();
            cursor.forEach(function(item) {
                console.log(item);
                result.data.push(item);
                if (!cursor.hasNext()) {
                    callback(result);
                }
            });
        }
    });
}