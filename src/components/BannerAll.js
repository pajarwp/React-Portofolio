import React, { Component } from "react";
import { Link } from "react-router-dom";

class BannerAll extends Component {
  render() {
    var all=require('../images/all.jpg')
    return (
<div class="breadcrumbs-two">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="breadcrumbs-img" style={{backgroundImage: "url("+all+")"}}>
							<h2>Our Product</h2>
						</div>
					</div>
				</div>
			</div>
		</div>

    );
  }
}

export default BannerAll;
