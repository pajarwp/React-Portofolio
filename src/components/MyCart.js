import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class MyCart extends Component {
	deleteCart = async (e) => {
    this.props.deleteCart(e.target.value)
    this.props.history.push("/cart")
};

editCart = async (e) => {
	console.log(e.target.value)
	this.props.editCart(e.target.value)
	this.props.history.push("/edited")
};
  render() {
    return (       
	<div class="product-cart d-flex">
		<div class="one-forth">
			<div class="product-img">
        <img src={this.props.imgurl1} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
			</div>
			<div class="display-tc">
				<h3>{this.props.item_name}</h3>
			</div>
		</div>
		<div class="one-eight text-center">
			<div class="display-tc">
				<span class="price">Rp.{this.props.price}</span>
			</div>
		</div>
		<div class="one-eight text-center">
			<div class="display-tc">
				<input type="text" id="quantity" name="item_qty" onChange={e => this.props.setField(e)} class="form-control input-number text-center" placeholder={this.props.qty}/>
			</div>
		</div>
		<div class="one-eight text-center">
			<div class="display-tc">
				<span class="price">Rp.{this.props.price_total}</span>
			</div>
		</div>
		<div class="one-eight text-center">
			<div class="display-tc">
				<button value={this.props.cart_id} class="closed" onClick={e => this.deleteCart(e)}></button>
			</div>
		</div>
		<div class="one-eight text-center">
			<div class="display-tc">
				<button class="btn btn-dark" value={this.props.cart_id} onClick={e => this.editCart(e)}>Edit</button>
			</div>	
		</div>
	</div>
						
    );
  }
}

export default connect(
	"cart, total_price, token",
	actions
)(withRouter(MyCart));