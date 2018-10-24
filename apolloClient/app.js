import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { Router, browserHistory } from 'react-router';
import routes from './router';


import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// const link = new HttpLink({
//     uri:'http://localhost:3000/graphql/'
// })

// const client = new ApolloClient({
//     link,
//     cache: new InMemoryCache()
// })

// Create an http link:
const httpLink = new HttpLink({
    uri: "http://localhost:3000/graphql/"
  });
  
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:3000/graphql/`,
    options: {
      reconnect: true
    }
  });
  
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );
  
  const client = new ApolloClient({ link, cache: new InMemoryCache() });


render(
    <ApolloProvider client={client}>
       <Router history={browserHistory} routes={routes} />
    </ApolloProvider>, 
    document.currentScript.ownerDocument.getElementById('root')
);