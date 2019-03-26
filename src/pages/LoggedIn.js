import React, { Component } from 'react';
import Footer from '../components/Footer'
import LoginSuccess from '../components/LoginSuccess'
import { withRouter,Redirect } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class LoggedIn extends Component {
  render() {
    if (this.props.isLogin === false) {
      return <Redirect to={{pathname: "/logorsign"}}/>;
    }
    else {
    return (
      <div>
        <LoginSuccess/>
        <Footer/>
      </div>
    );
    }
  }
}

export default connect(
	"isLogin",
	actions
)(withRouter(LoggedIn));