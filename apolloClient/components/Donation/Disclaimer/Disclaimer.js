import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Disclaimer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accepted : false
    }
  }

  render() {
    return (
      <div>
        Disclaimer
      </div>
    );
  }
}

export default Disclaimer;