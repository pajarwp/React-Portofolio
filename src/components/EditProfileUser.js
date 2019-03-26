import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class EditProfileUser extends Component {
	postEdit = async () => {
    this.props.editUserProfile()
		this.props.history.push("/edited")
	}
  render() {
    return (
			<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Store Name</label>
					<input type="text" id="storename" name="username" value={this.props.username} class="form-control" placeholder="Store Name" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" id="email" name="user_email" value={this.props.user_email} class="form-control" placeholder="Email" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="Phone">Phone Number</label>
					<input type="text" id="phonenumber" name="user_phone" value={this.props.user_phone} class="form-control" placeholder="Phone" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Password</label>
					<input type="password" id="password" name="password" value={this.props.password} class="form-control" placeholder="Password" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Website</label>
					<input type="text" id="website" name="user_website" class="form-control" value={this.props.user_website} placeholder="Website" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Address</label>
					<input type="text" id="address" name="user_address" class="form-control" value={this.props.user_address} placeholder="Address" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image</label>
					<input type="text" id="image" name="user_url_image" class="form-control" value={this.props.user_url_image} placeholder="URL Image" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Description</label><br/>
					<input type="text" id="image" name="user_description" value={this.props.user_description} class="form-control" placeholder="Description" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<button class="buttonedit buttonedit1" type="submit" onClick={() => this.postEdit()}>Edit</button>
			</div>
		</div>
        )
    }
}

export default connect(
	"username, password, user_email, user_phone, user_address, user_url_image, user_website, user_description",
	actions
)(withRouter(EditProfileUser));