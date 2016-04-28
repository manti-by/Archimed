var path = require('path');
var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: 'eval',
    server: {
        host: '0.0.0.0',
        port: 3000,
        mongo: 'mongodb://localhost:27017/myproject'
    },
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        devFlagPlugin
    ],
    module: {
        loaders: [
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: 'file'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};