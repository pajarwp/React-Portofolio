import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupSuccess extends Component {
  render() {
    return (
		<div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-sm-10 offset-sm-1 text-center">
						<p class="icon-addcart"><span><i class="icon-check"></i></span></p>
						<h2 class="mb-4">Thank you Signing Up, Now you can Logging In to your accout</h2>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default SignupSuccess;
