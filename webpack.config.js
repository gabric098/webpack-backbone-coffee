var webpack = require('webpack');

var ENV = process.env.ENV || 'dev';

module.exports = {
    entry: {
        app: './src/coffee/main.coffee'
    },
    output: {
        path: './dist',
        filename: (ENV === 'prod') ? 'app.min.js' : 'app.js'
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee" }
        ]
    },
    plugins: (ENV === 'dev') ? [
        new webpack.ProvidePlugin({
            "$": "npm-zepto",
            "_": "underscore",
            "Backbone": "backbone"
        })
    ] : [
        new webpack.ProvidePlugin({
            "$": "npm-zepto",
            "_": "underscore",
            "Backbone": "backbone"
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
        extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"],
        alias: {
            jquery: "npm-zepto"
        }
    }
};