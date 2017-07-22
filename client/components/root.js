import React from 'react';
import { connect } from 'react-redux';
import Header from "./common/header";
import './root.scss';

class RootComponent extends React.Component {

    componentDidMount(){
        this.$el = $(this.el);
        this.$el.fadeOut(1000);
        $(window).scroll(() => {
            if($(window).scrollTop() > 0){
                $('header').addClass('small');
            }else{
                $('header').hasClass('small') ? $('header').removeClass('small'): '';
            }
        })
    }
    
    render() {
        return (
            <div className="react-wrapper">
               <Header/>
               {this.props.children}
               <div id="loading-canvas" ref={el => this.el = el}></div>
            </div>
        );
    }
}

export default RootComponent;