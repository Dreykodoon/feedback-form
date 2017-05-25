const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry:   {
        index: './index.js',
    },
    output:  {
        filename:   '[name].bundle.js',
        path:       path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module:  {
        rules: [
            {
                test:    /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use:     [
                    {
                        loader:  'babel-loader',
                        options: {
                            presets: [
                                ['es2015', 'react']
                            ]
                        }
                    }
                ]
            }, {
                test:   /\.scss$/,
                loader: extractCSS.extract(['css-loader', 'sass-loader'])
            }, {
                test: /\.(png|jpg)$/,
                use:  [
                    {
                        loader:  'url-loader',
                        options: {limit: 10000}, // Convert images < 10k to base64 strings
                    }
                ]
            }
        ]
    },
    plugins: [
        extractCSS,
    ],
};
