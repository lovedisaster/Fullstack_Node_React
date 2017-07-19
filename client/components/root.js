import React from 'react';
import { connect } from 'react-redux';
import Header from "./common/header";
import './root.scss';
import loading from "../assets/css/effects/loading";

class RootComponent extends React.Component {

    componentDidMount(){
      loading();
    }
    
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