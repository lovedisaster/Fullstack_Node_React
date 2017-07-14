const express = require('express');
let app = express();
const path = require('path');
const volleyball = require('volleyball');
const routers = require("./routers");
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

app.use(volleyball);
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//Webpack
app.use(webpackMiddleware(webpack(webpackConfig),{
  publicPath: webpackConfig.output.publicPath,
  headers: {"X-Custom-Webpack-Header" : "yes"},
  stats: {
    colors: true
  }
}));

app = routers.router(app);



app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});




