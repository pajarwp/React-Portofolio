import React, { Component } from 'react';
import Footer from '../components/Footer'
import SignupSuccess from '../components/SignupSuccess'
import { withRouter,Redirect } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class SignedUp extends Component {
  render() {
    if (this.props.isSigned === false) {
      return <Redirect to={{pathname: "/logorsign"}}/>;
    }
    else {
    return (
      <div>
        <SignupSuccess/>
        <Footer/>
      </div>
    );
  }
}
}

export default connect(
	"isSigned",
	actions
)(withRouter(SignedUp));