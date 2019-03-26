import React, { Component } from "react";
import { Link } from "react-router-dom";

class Order extends Component {
  render() {
    return (
		<div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-sm-10 offset-sm-1 text-center">
						<p class="icon-addcart"><span><i class="icon-check"></i></span></p>
						<h2 class="mb-4">Thank you for purchasing, Your order is complete</h2>
						<p>
							<Link to="/"class="btn btn-primary btn-outline-primary">Home</Link>
							<Link to="/allproducts"class="btn btn-primary btn-outline-primary"><i class="icon-shopping-cart"></i> Continue Shopping</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Order;
