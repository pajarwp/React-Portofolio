import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import LoginFormBuyer from '../components/LoginFormBuyer'

class LogInBuyer extends Component {

  render() {
    return (
      <div>
        <LoginFormBuyer/>
        <Footer/>
      </div>
    );
  }
}

export default LogInBuyer;
