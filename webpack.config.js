var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: './react-pro-ui/src/index.js'
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            }
        ]
    },
    stats: {
        colors: true
    }
}
