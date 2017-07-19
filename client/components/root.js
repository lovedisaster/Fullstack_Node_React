import React from 'react';
import { connect } from 'react-redux';
import Header from "./common/header";
import './root.scss';

class RootComponent extends React.Component {
    render() {
        return (
            <div className="react-wrapper">
               <Header/>
               {this.props.children}
            </div>
        );
    }
}

export default RootComponent;