import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class SignupUser extends Component {
	postSignup = async () => {
    await this.props.postSignupUser()
    this.props.history.push("/signedup")
  };
  render() {
    return (
		<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Store Name</label>
					<input type="text" id="storename" name="username" class="form-control" placeholder="Store Name" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" id="email" name="user_email" class="form-control" placeholder="Email" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="Phone">Phone Number</label>
					<input type="text" id="phonenumber" name="user_phone" class="form-control" placeholder="Phone" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Password</label>
					<input type="password" id="password" name="password" class="form-control" placeholder="Password" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Website</label>
					<input type="text" id="website" name="user_website" class="form-control" placeholder="Website" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Address</label>
					<input type="text" id="address" name="user_address" class="form-control" placeholder="Address" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image</label>
					<input type="text" id="image" name="user_url_image" class="form-control" placeholder="URL Image" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Description</label><br/>
					<input type="text" id="image" name="user_description" class="form-control" placeholder="Description" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<button class="buttonedit buttonedit1" type="submit" onClick={() => this.postSignup()}>SignUp</button>
			</div>
		</div>
        )
    }
}

export default connect(
	"all_product",
	actions
)(withRouter(SignupUser));