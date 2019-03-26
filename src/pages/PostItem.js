import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import ItemPost from'../components/ItemPost'
class PostItem extends Component {
 
  render() {
    return (
      <div>
        <ItemPost/>
        <Footer/>
      </div>
    );
  }
}

export default PostItem;
