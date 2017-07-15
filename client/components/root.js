import React from 'react';
import { connect } from 'react-redux';


class RootComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}

export default RootComponent;