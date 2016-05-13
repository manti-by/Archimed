var path = require('path');
var assert = require('assert');
var bodyParser = require('body-parser');
var stringify = require('json-stringify-safe');

var app = require('express')();
var webpack = require('webpack');
var config = require('./webpack.config');
var i18n = require('i18n');


// Configure webpack
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Configure routes
var routes = require('./store/mongo');
var multer = require('multer');
var upload = multer();

app.get('/api', routes.getCards);
app.post('/api', upload.array(), routes.setCards);

app.get('*', function (request, response) {
    console.log('Get ' + request.baseUrl);
    response.sendFile(path.join(__dirname, 'index.html'));
});


// Configure i18n
var currentLocale = {};
i18n.configure({
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    register: currentLocale,
    directory: __dirname + '/locales'
});
app.use(i18n.init);


// Run express server
app.listen(config.server.port, config.server.host, function(error) {
    if (error) {
        console.log(error);
    }
    console.log('Listening at ' + config.server.host + ':' + config.server.port);
});