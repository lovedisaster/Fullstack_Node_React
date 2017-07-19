const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public/build'),
    publicPath: '/build/'
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new LiveReloadPlugin({port: 3001, hostname: 'localhost'}),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader", options: {
          sourceMap: true
        }
      }]
    }]

  }
};