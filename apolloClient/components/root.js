import React from 'react';
import Nav from './Shared/Nav/Nav';
import LogoBanner from './Shared/LogoBanner/LogoBanner';

class RootComponent extends React.Component {    
    render() {
        return (
            <div className="body-wrapper">
                <Nav/>
                <LogoBanner/>
                {this.props.children}
            </div>
        );
    }
}

export default RootComponent;