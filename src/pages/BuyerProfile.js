import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import BuyerData from '../components/BuyerData'

class BuyerProfile extends Component {

  render() {
    return (
      <div>
        <BuyerData/>
        <Footer/>
      </div>
    );
  }
}

export default BuyerProfile;
