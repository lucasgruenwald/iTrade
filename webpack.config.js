const path = require('path');

module.exports = {
    entry: './frontend/iTrade.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/react']
                }
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
};