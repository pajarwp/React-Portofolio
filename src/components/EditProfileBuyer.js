import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class EditProfileBuyer extends Component {
	postEdit = async () => {
    this.props.editBuyerProfile()
		this.props.history.push("/edited")
	}
  render() {
    return (
			<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Username</label>
					<input type="text" name="username" id="username" value={this.props.username} class="form-control" placeholder="Username" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
            <div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Fullname</label>
					<input type="text" id="fullname" name="buyer_fullname" value={this.props.buyer_fullname} class="form-control" placeholder="Fullname" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Address</label>
					<input type="text" id="address" name="buyer_address" class="form-control" value={this.props.buyer_address} placeholder="Address" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="Phone">Phone Number</label>
					<input type="text" id="phonenumber" name="buyer_phone" class="form-control" value={this.props.buyer_phone} placeholder="Phone" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" id="email" name="buyer_email" class="form-control" placeholder="Email" value={this.props.buyer_email} onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Password</label>
					<input type="password" id="password" name="password" class="form-control" placeholder="Password" value={this.props.password} onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image</label>
					<input type="text" id="image" name="buyer_url_image" class="form-control" placeholder="URL Image" value={this.props.buyer_url_image} onChange={e => this.props.setField(e)}/>
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
	"username, password, buyer_email, buyer_phone, buyer_fullname, buyer_address, buyer_url_image",
	actions
)(withRouter(EditProfileBuyer));