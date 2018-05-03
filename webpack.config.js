var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: {
        app: './ui/src/index.js'
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
