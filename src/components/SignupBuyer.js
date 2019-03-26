import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class SignupBuyer extends Component {
	postSignup = async () => {
    await this.props.postSignupBuyer()
    this.props.history.push("/signedup")
  };
  render() {
    return (
		<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Username</label>
					<input type="text" name="username" id="username" class="form-control" placeholder="Username" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
            <div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Fullname</label>
					<input type="text" id="fullname" name="buyer_fullname" class="form-control" placeholder="Fullname" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Address</label>
					<input type="text" id="address" name="buyer_address" class="form-control" placeholder="Address" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="Phone">Phone Number</label>
					<input type="text" id="phonenumber" name="buyer_phone" class="form-control" placeholder="Phone" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" id="email" name="buyer_email" class="form-control" placeholder="Email" onChange={e => this.props.setField(e)}/>
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
					<label for="email">URL Image</label>
					<input type="text" id="image" name="buyer_url_image" class="form-control" placeholder="URL Image" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<button class="buttonedit buttonedit1" type="submit" onClick={() => this.postSignup()}>Sign Up</button>
			</div>
		</div>
        )
    }
}

export default connect(
	"all_product",
	actions
)(withRouter(SignupBuyer));