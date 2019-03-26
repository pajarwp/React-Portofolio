import React, { Component } from 'react';
import Footer from '../components/Footer'
import EditSuccess from '../components/EditSuccess'
class Edited extends Component {
  render() {
    return (
      <div>
        <EditSuccess/>
        <Footer/>
      </div>
    );
  }
}

export default Edited;
