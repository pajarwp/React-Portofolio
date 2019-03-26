import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
import loadjs from 'loadjs'
class Detail extends Component {
	handleClick = (e) => {
		this.props.getStoreProfile(e.target.value)
		this.props.history.push("/userprofile")
  };

  addCart = (e) => {
	this.props.addCart(e.target.value)
	this.props.history.push("/cart")
};

componentWillMount() {
    loadjs(["js/jquery.min.js", 
    "../js/popper.min.js", 
    "../js/bootsrap.min.js", 
    "../js/jquery.easing.1.3.js", 
    "../js/jquery.waypoints.min.js",
    "../js/jquery.flexslider-min.js",
    "../js/owl.carousel.min.js",
    "../js/jquery.magnific-popup.min.js",
    "../js/magnific-popup-options.js",
    "../js/bootstrap-datepicker.js",
    "../js/jquery.stellar.min.js",
    "../js/main.js",
  ], function() {
    });
  }
	render(){
    return (
<div class="colorlib-product">
			<div class="container">
				<div class="row row-pb-lg product-detail-wrap">
					<div class="col-sm-8">
						<div class="owl-carousel">
							<div class="item">
								<div class="product-entry border">
									<img src={this.props.item_detail.imgurl1} class="img-fluid"
										alt="Free html5 bootstrap 4 template"/>
								</div>
							</div>
							<div class="item_detail">
								<div class="product-entry border">
									<img src={this.props.item_detail.imgurl2} class="img-fluid"
										alt="Free html5 bootstrap 4 template"/>
								</div>
							</div>
							<div class="item_detail">
								<div class="product-entry border">
									<img src={this.props.item_detail.imgurl3} class="img-fluid"
										alt="Free html5 bootstrap 4 template"/>
								</div>
							</div>
							<div class="item_detail">
								<div class="product-entry border">
									<img src={this.props.item_detail.imgurl4} class="img-fluid"
										alt="Free html5 bootstrap 4 template"/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="product-desc">
							<h3>{this.props.item_detail.item_name}</h3>
							<p class="price">
								<span>Rp.{this.props.item_detail.price}</span>
							</p>
							<p>{this.props.item_detail.description}
							</p>
							<p>Size : {this.props.item_detail.size}</p>
							<p>Color : {this.props.item_detail.color}</p>
							<p>Stock : {this.props.item_detail.qty}</p>
							<h3>Store : {this.props.item_detail.posted_by}</h3>
							<button class="btn btn-dark" value={this.props.item_detail.posted_by} onClick={e => this.handleClick(e)}>Store Profile</button><br/>
							<div class="form-group">
								<label for="email">Quantity</label>
								<input type="text" id="quantity" name="item_sum" class="form-control input-number" placeholder="Quantity" onChange={e => this.props.setField(e)}/>
							</div>
							<div class="row">
								<div class="col-sm-12 text-center">
									<button class="btn btn-primary btn-addtocart" value={this.props.item_detail.item_id} onClick={(e) => this.addCart(e)}>Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    );
	}
}

export default connect(
	"item_detail, id",
	actions
)(withRouter(Detail));