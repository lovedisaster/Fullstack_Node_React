const express = require('express');
const {
  graphqlExpress,
  graphiqlExpress,
} = require('graphql-server-express');


const path = require('path');
const volleyball = require('volleyball');

const { schema } = require('./graphql/express_graphql');

const routers = require("./routers");

const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');


const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const NodeCache = require( "node-cache" );
const config = require('../config');
const webpackConfig = config.isProd ?  require('../webpack.production.config.js') : require('../webpack.config.js');
const bodyParser = require('body-parser');

const PORT = 3000;
const server = express();

//server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
}));

// We wrap the express server so that we can attach the WebSocket for subscriptions
const ws = createServer(server);

ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions',
  });
});


// app.use(volleyball);
// app.set('views', config.paths.server_pages);
// app.set('view engine', 'pug');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(express.static(path.resolve(__dirname, '..', 'client')));
// app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500).send(err.message || 'Internal server error.');
//   //Need decent error handling 
// });

// app.use(webpackMiddleware(webpack(webpackConfig),{
//   publicPath: webpackConfig.output.publicPath,
//   headers: {"X-Custom-Webpack-Header" : "yes"},
//   stats: {
//     colors: true
//   }
// }));

// app = routers.router(app);
// app.listen(process.env.PORT || 3000, function () {
//   console.log("Server is running on port 3000");
// });




