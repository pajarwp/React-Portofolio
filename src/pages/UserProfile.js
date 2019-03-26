import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import About from '../components/About'
class UserProfile extends Component {

  render() {
    return (
      <div>
        <Contact/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default UserProfile;
