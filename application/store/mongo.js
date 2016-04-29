var config = require('../webpack.config');

function connect(callback) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(config.server.mongo, function (error, db) {
        var result = { status: 500 };
        if (error) {
            console.log('Error: Could not connect to DB. ' + error);
            result.message = error;
        } else {
            callback(db, result);
        }
    });
}

module.exports.getCards = function(request, response) {
    connect(function(db, result) {
        console.log('Return all cards from DB');
        result.status = 200;
        result.data = [];

        db.collection('cards').find().toArray(function (error, data) {
            if (error) {
                console.log(error);
                result.status = 500;
            } else {
                result.data = data;
            }

            response.json(result);
        });
    });
};

module.exports.setCards = function(request, response) {
    connect(function(db, result) {
        console.log('Insert all cards to DB');
        result.status = 200;

        if (request.body.data) {
            var collection = db.collection('cards');
            collection.drop(function (error) {
                if (error) {
                    result = {status: 500, message: error};
                    return;
                }

                var data = JSON.parse(request.body.data);
                for (var i = 0; i < data.length; i++) {
                    collection.insertOne(data[i], function (error) {
                        if (error) {
                            console.log(error);
                            result = {status: 500, message: error};
                        }
                    });
                }
            });
        }

        response.json(result);
    });
};