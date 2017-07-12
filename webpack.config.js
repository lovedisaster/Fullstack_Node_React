let path = require('path');
let LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/build')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
  }
};