const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [{loader:"style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    }
}