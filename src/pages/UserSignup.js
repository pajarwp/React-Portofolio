import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import SignupUser from '../components/SignupUser'
class UserSignup extends Component {
 
  render() {
    return (
      <div>
        <SignupUser/>
        <Footer/>
      </div>
    );
  }
}

export default UserSignup;
