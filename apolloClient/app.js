import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router, browserHistory } from 'react-router';
import routes from './router';
import { ApolloProvider } from 'react-apollo';

const link = new HttpLink({
    uri:'http://localhost:3000/graphql/'
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})


render(
    <ApolloProvider client={client}>
       <Router history={browserHistory} routes={routes} />
    </ApolloProvider>, 
    document.currentScript.ownerDocument.getElementById('root')
);