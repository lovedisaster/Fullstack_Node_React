// @flow strict
import React from 'react';
import Disclaimer from './Disclaimer/Disclaimer';
import Donate from './Donate/Donate';
import Login from './Login/Login';
import ThankYou from './ThankYou/ThankYou';

export const SubSteps = {
  LOGIN : "LOGIN",
  DISCLAIMER : "DISCLAIMER",
  DONATE : "DONATE",
  THANKYOU : "THANKYOU"
}


class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: SubSteps.LOGIN
    }
    this._goToStep = this._goToStep.bind(this);
  }

  _goToStep(step) {
    this.setState(os => {
      let ns = Object.assign({}, os);
      ns.currentStep = step;
      return ns;
    })
  }

  render() {
    switch(this.state.currentStep) {
      case SubSteps.LOGIN : 
        return (
          <Login stepHandler={this._goToStep}/>
        );
      case SubSteps.DISCLAIMER : 
        return (
          <Disclaimer stepHandler={this._goToStep}/>
        );
      case SubSteps.DONATE : 
        return (
           <Donate stepHandler={this._goToStep}/>
        );
      case SubSteps.THANKYOU : 
        return (
          <ThankYou/>
        );
      default: 
        return (
          <Login stepHandler={this._goToStep}/>
        );  
    }
    
  }
}

export default Donation;