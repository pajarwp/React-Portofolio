import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class ItemEdit extends Component {
	editItem = (e) => {
    this.props.editItem(e.target.value)
		this.props.history.push("/edited")
	}
  render() {
    return (
			<div class="container">
			<div class="col-md-6">
				<div class="form-group">
					<label for="companyname">Item Name</label>
					<input type="text" id="itemname" name="item_name" class="form-control" value={this.props.item_name} placeholder="Item Name" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Category</label>
					<input type="text" id="category" name="category" value={this.props.category} class="form-control" placeholder="Category" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="Phone">Price</label>
					<input type="number" id="price" name="price" class="form-control" value={this.props.price} placeholder="Price" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Size</label>
					<input type="text" id="password" name="size" class="form-control" value={this.props.size} placeholder="Size" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Color</label>
					<input type="text" id="color" name="color" class="form-control" value={this.props.color} placeholder="Color" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="fname">Quantity</label>
					<input type="number" id="address" name="quantity" class="form-control" value={this.props.quantity} placeholder="Quantity" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">Description</label><br/>
					<input type="text" id="image" name="item_description" value={this.props.item_description} class="form-control" placeholder="Description" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 1</label>
					<input type="text" id="image" name="imgurl1" class="form-control" value={this.props.imgurl1} placeholder="URL Image 1" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 2</label>
					<input type="text" id="image" class="form-control" name="imgurl2" value={this.props.imgurl2} placeholder="URL Image 2" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 3</label>
					<input type="text" id="image" class="form-control" name="imgurl3" value={this.props.imgurl3} placeholder="URL Image 3" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label for="email">URL Image 4</label>
					<input type="text" id="image" class="form-control" name="imgurl4" value={this.props.imgurl4} placeholder="URL Image 4" onChange={e => this.props.setField(e)}/>
				</div>
			</div>
			<div class="col-md-6">
				<button class="buttonedit buttonedit1" value={this.props.item_id} type="submit" onClick={(e) => this.editItem(e)}>Edit</button>
			</div>
		</div>
        )
    }
}

export default connect(
"item_id, item_name, category, price, size, color, quantity, item_description, imgurl1, imgurl2, imgurl3, imgurl4",
	actions
)(withRouter(ItemEdit));