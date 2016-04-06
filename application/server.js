var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

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