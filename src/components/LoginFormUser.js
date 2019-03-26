import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class LoginFormUser extends Component {
  postLogin = async () => {
    await this.props.postLoginUser()
    this.props.history.push("/loggedin")
  };
  render() {
    return (
		<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Name</label>
					<input type="text" id="name" name="username" class="form-control" placeholder="Store Name" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Password</label>
					<input type="password" name="password" id="password" class="form-control" placeholder="Password" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<button class="buttonedit buttonedit1" type="submit" onClick={() => this.postLogin()}>Log In</button>
			</div>
		</div>
        )
    }
}

export default connect("all_product",
	actions
)(withRouter(LoginFormUser));