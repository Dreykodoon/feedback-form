const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry:   {
        index: './index.js',
    },
    devtool: 'inline-source-map',
    output:  {
        filename: '[name].bundle.js',
        path:     path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: {
            index: 'dist/index.html'
        },
    },
    module:  {
        rules: [
            {
                test: /\.jsx?$/, // both .js and .jsx
                loader: 'eslint-loader',
                include: path.resolve(process.cwd(), 'src'),
                enforce: 'pre',
                options: {
                    failOnError: true,
                },
            },
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
                test:   /\.css$/,
                loader: extractCSS.extract({
                    fallback: 'style-loader',
                    use:      'css-loader'
                })
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use:  [
                    {
                        loader:  'url-loader',
                        options: {
                            limit:    10000,
                            mimetype: 'application/font-woff'
                        },
                    }
                ],
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use:  [
                    {
                        loader:  'url-loader',
                        options: {
                            limit:    10000,
                            mimetype: 'application/octet-stream'
                        },
                    }
                ],
            }, {
                test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use:  [
                    {
                        loader:  'url-loader',
                        options: {
                            limit:    10000,
                            mimetype: 'image/svg+xml'
                        },
                    }
                ],
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
        extractCSS, new HtmlWebpackPlugin({
            title:    'Feedback Form',
            template: 'index.ejs',
        }),
    ],
};
