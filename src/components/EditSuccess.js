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
						<h2 class="mb-4">Editing Success</h2>
						<p>
							<Link to="/"class="btn btn-primary btn-outline-primary">Back</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default SignupSuccess;
