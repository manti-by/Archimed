var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var mongoose = require('mongoose');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, '0.0.0.0', function (error) {
    if (error) {
        console.log(error);
    }
    console.log('Listening at localhost:3000');
});

mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));