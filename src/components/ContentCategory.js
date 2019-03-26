import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class ContentCategory extends Component {
	handleClick = (e) => {
		this.props.getDetailProduct(e.target.value)
		this.props.history.push("/productdetail")
  };
	render(){
    return (		
	<div class="col-md-3 col-lg-3 mb-4 text-center">
		<div class="product-entry border">
			<a class="prod-img">
				<img src={this.props.imgurl1} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
			</a>
			<div class="desc">
				<h2>{this.props.item_name}</h2>
				<button class="btn btn-dark" value={this.props.id} onClick={e => this.handleClick(e)}>Detail</button>
				<span class="price">Rp.{this.props.price}</span>
			</div>
		</div>
	</div>				
    );
  }
}
	export default connect(
		"isLogin",
		actions
	)(withRouter(ContentCategory));