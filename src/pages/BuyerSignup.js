import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import SignupBuyer from '../components/SignupBuyer'
class BuyerSignup extends Component {
 
  render() {
    return (
      <div>
        <SignupBuyer/>
        <Footer/>
      </div>
    );
  }
}

export default BuyerSignup;
