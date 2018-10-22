import React from 'react';

import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo';
import Home from './Home/Home';
import Nav from './Shared/Nav/Nav';
import LogoBanner from './Shared/LogoBanner/LogoBanner';

const link = new HttpLink({
    uri:'http://localhost:3000/graphql/'
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

class RootComponent extends React.Component {    
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="body-wrapper">
                    <Nav/>
                    <LogoBanner/>
                    <Home/>
                    {
                        /*
                        <Cars/>
                        */
                    }
                </div>
            </ApolloProvider>
        );
    }
}

export default RootComponent;