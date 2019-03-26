import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import Detail from '../components/Detail'
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class ProductDetail extends Component {

  render() {
    return (
      <div>
        <Detail/>
        <Footer/>
      </div>
    );
  }
}

export default connect(
	"item_detail, id",
	actions
)(withRouter(ProductDetail));