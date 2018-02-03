const path = require('path');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

module.exports = {
    plugins: [
        new StyleExtHtmlWebpackPlugin()
    ],
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, 'node_modules')],
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|svg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }],
            },
        ]
    },
};
