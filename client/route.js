import React from 'react';
import { Route, IndexRoute} from 'react-router';
import RootComponent from './components/root';
import PropertyList from './components/list/propertiesList';

export default(
    <Route path="/" component={RootComponent}>
       <Route path="property-list" component={PropertyList}/>
    </Route>
);
