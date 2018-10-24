const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


// entry: './client/index.js',

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
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: true
        }
      }]
    }]
  }
};