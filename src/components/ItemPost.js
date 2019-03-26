import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class ItemPost extends Component {
	postItem = async () => {
    this.props.postItem()
		this.props.history.push("/dashboard")
	}
  render() {
    return (
		<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Item Name</label>
					<input type="text" id="itemname" name="item_name" class="form-control" placeholder="Item Name" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Category</label>
					<input type="text" id="category" name="category" class="form-control" placeholder="Category" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="Phone">Price</label>
					<input type="number" id="price" name="price" class="form-control" placeholder="Price" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Size</label>
					<input type="text" id="password" name="size" class="form-control" placeholder="Size" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Color</label>
					<input type="text" id="color" name="color" class="form-control" placeholder="Color" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Quantity</label>
					<input type="number" id="address" name="quantity" class="form-control" placeholder="Quantity" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Description</label><br/>
					<input type="text" id="image" name="item_description" class="form-control" placeholder="Description" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 1</label>
					<input type="text" id="image" name="imgurl1" class="form-control" placeholder="URL Image 1" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 2</label>
					<input type="text" id="image" class="form-control" name="imgurl2" placeholder="URL Image 2" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 3</label>
					<input type="text" id="image" class="form-control" name="imgurl3" placeholder="URL Image 3" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 4</label>
					<input type="text" id="image" class="form-control" name="imgurl4" placeholder="URL Image 4" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<button class="buttonedit buttonedit1" type="submit" onClick={() => this.postItem()}>Submit</button>
			</div>
		</div>
        )
    }
}

export default connect(
	"username, password, user_email, user_phone, user_address, user_url_image, user_website, user_description",
	actions
)(withRouter(ItemPost));