import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import ItemEdit from '../components/ItemEdit'
class EditItem extends Component {
  render() {
    return (
      <div>
        <ItemEdit/>
        <Footer/>
      </div>
    );
  }
}

export default EditItem;
