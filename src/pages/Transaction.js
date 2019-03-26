import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import Order from '../components/Order'
import { withRouter,Redirect } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class Transaction extends Component {

  render() {
    return (
      <div>
        <Order/>
        <Footer/>
      </div>
    );
  }
}

export default connect(
	"isTrans",
	actions
)(withRouter(Transaction));