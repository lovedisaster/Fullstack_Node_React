import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from '../Donation.style';
import {ThankYouWrapper} from './ThankYour.style';

class ThankYou extends Component {
  render() {
    return (
      <Wrapper>
        <ThankYouWrapper>
        <p>Thank you</p>
        <a href="/">Back to home page</a>
        </ThankYouWrapper>
      </Wrapper>
    );
  }
}

export default ThankYou;