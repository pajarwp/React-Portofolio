import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import TextBox from '../components/TextBox'
import Partner from '../components/Partner'
import Category from '../components/Category'
class Home extends Component {
  
  render() {
    return (
      <div>
        <Slider/>
        <TextBox/>
        <Category/>
        <Partner/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
