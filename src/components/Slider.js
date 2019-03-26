import React, { Component } from "react";
import { Link } from "react-router-dom";

class Slider extends Component {
  render() {
    var img_bg_1=require('../images/img_bg_1.jpg')
    var img_bg_2=require('../images/img_bg_2.jpg')
    var img_bg_3=require('../images/img_bg_3.jpg')    
    return (
<aside id="colorlib-hero">
			<div class="flexslider">
				<ul class="slides">
					<li style={{backgroundImage: "url("+img_bg_1+")"}}>
						<div class="overlay"></div>
						<div class="container-fluid">
							<div class="row">
								<div class="col-sm-6 offset-sm-3 text-center slider-text">
									<div class="slider-text-inner">
										<div class="desc">
											<h1 class="head-1">Men's</h1>
											<h2 class="head-2">Shoes</h2>
											<h2 class="head-3">Collection</h2>
											<p class="category"><span>New trending shoes</span></p>
											<p><Link to="/allproducts" class="btn btn-primary">Shop Collection</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li style={{backgroundImage: "url("+img_bg_2+")"}}>
						<div class="overlay"></div>
						<div class="container-fluid">
							<div class="row">
								<div class="col-sm-6 offset-sm-3 text-center slider-text">
									<div class="slider-text-inner">
										<div class="desc">
											<h1 class="head-1">Best</h1>
											<h2 class="head-2">Product</h2>
											<h2 class="head-3"><strong class="font-weight-bold">Buy</strong> Now</h2>
											<p class="category"><span>Best Quality</span></p>
											<p><Link to="/allproducts" class="btn btn-primary">Shop Collection</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li style={{backgroundImage: "url("+img_bg_3+")"}}>
						<div class="overlay"></div>
						<div class="container-fluid">
							<div class="row">
								<div class="col-sm-6 offset-sm-3 text-center slider-text">
									<div class="slider-text-inner">
										<div class="desc">
											<h1 class="head-1">New</h1>
											<h2 class="head-2">Arrival</h2>
											<h2 class="head-3">From <strong class="font-weight-bold">The Best</strong>
												Seller</h2>
											<p class="category"><span>New stylish shoes for men</span></p>
											<p><Link to="allproducts" class="btn btn-primary">Shop Collection</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</aside>
    );
  }
}

export default Slider;
