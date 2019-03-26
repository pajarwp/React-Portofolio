import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import EditProfileBuyer from '../components/EditProfileBuyer'
class BuyerProfileEdit extends Component {
 
  render() {
    return (
      <div>
        <EditProfileBuyer/>
        <Footer/>
      </div>
    );
  }
}

export default BuyerProfileEdit;
