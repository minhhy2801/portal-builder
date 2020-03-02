const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const pluginSettingConfig = {
    entry: './src/Router.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'plugin.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'development',
    plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html"
    })
  ]
};

module.exports = [pluginSettingConfig];