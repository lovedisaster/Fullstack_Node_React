import React from 'react';
import { Route, IndexRoute} from 'react-router';
import RootComponent from './components/root';
import PropertyList from './components/list/propertiesList';
import About from './components/about/about';
import Home from './components/home/home';

export default(
    <Route path="/" component={RootComponent}>
       <IndexRoute component={Home}/>
       <Route path="property-list" component={PropertyList}/>
       <Route path="about" component={About}/>
    </Route>
);
