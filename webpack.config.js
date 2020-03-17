const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        '@babel/polyfill',
        './public/js/main.js'
    ],
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ]
};