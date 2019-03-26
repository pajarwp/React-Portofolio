import React, { Component } from "react";
import { Link } from "react-router-dom";

class DetailTransaction extends Component {
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
									<input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value={this.props.qty}/>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<span class="price">Rp.{this.props.price_total}</span>
								</div>
							</div>
						</div>
						
    );
  }
}

export default DetailTransaction;
