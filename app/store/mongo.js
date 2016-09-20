var config = require('../webpack.config');
var mongo = require('mongodb');

function connect(callback) {
    mongo.MongoClient.connect(config.server.mongo, function (error, db) {
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
        console.log('Return all the cards from DB');
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
            db.close();
        });
    });
};

module.exports.setCards = function(request, response) {
    connect(function(db, result) {
        console.log('Perform action ' + request.body.action);
        result.status = 200;

        var collection = db.collection('cards'),
            data = JSON.parse(request.body.data);

        if (request.body.action == 'DELETE_CARD') {
            collection.deleteOne(data, { w: 1 }, function (error) {
                if (error) {
                    console.log(error);
                    result = { status: 500, message: error };
                }
                response.json(result);
                db.close();
            });
        } else {
            collection.insert(data, { w: 1 }, function (error) {
                if (error) {
                    console.log(error);
                    result = { status: 500, message: error };
                }
                response.json(result);
                db.close();
            });
        }
    });
};