const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './apolloClient/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server/public/build'),
    publicPath: '/build/'
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  watch: true,
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: false
        }
      }]
    }]

  }
};