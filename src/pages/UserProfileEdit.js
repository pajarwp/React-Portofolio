import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import EditProfileUser from '../components/EditProfileUser'
class UserProfileEdit extends Component {

  render() {
    return (
      <div>
        <EditProfileUser/>
        <Footer/>
      </div>
    );
  }
}

export default UserProfileEdit;
