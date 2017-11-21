const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool:   'inline-source-map',
    devServer: {
        historyApiFallback: {
            index: 'dist/index.html'
        },
        proxy:              {
            '/resources': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
});
