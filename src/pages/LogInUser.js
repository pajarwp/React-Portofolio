import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import LoginFormUser from '../components/LoginFormUser'
class LogInUser extends Component {
  render() {
    return (
      <div>
        <LoginFormUser/>
        <Footer/>
      </div>
    );
  }
}

export default LogInUser;
