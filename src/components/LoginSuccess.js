import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginSuccess extends Component {
  render() {
    return (
		<div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-sm-10 offset-sm-1 text-center">
						<p class="icon-addcart"><span><i class="icon-check"></i></span></p>
						<h2 class="mb-4">Logged In</h2>
						<p>
							<Link to="/allproducts"class="btn btn-primary btn-outline-primary">Shop</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default LoginSuccess;
