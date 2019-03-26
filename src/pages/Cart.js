import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import MyCart from '../components/MyCart'
import {connect} from 'unistore/react'
import {actions} from '../store';
import {withRouter} from 'react-router-dom'
import { Link } from "react-router-dom";

class Cart extends Component {

  componentDidMount = async () => {
		this.props.getCart()

  }

  transaction = async () => {
    this.props.addTransaction()
    this.props.history.push("/transaction")

  }
  
  render() {
    const {cart, total_price} = this.props;
    return (
      <div>
        <div class="colorlib-product">
			<div class="container">
				<div class="row row-pb-lg">
					<div class="col-md-12">
						<div class="product-name d-flex">
							<div class="one-forth text-left px-4">
								<span>Product Details</span>
							</div>
							<div class="one-eight text-center">
								<span>Price</span>
							</div>
							<div class="one-eight text-center">
								<span>Quantity</span>
							</div>
							<div class="one-eight text-center">
								<span>Total</span>
							</div>
							<div class="one-eight text-center px-4">
								<span>Remove</span>
							</div>
							<div class="one-eight text-center px-4">
								<span>Edit</span>
							</div>
						</div>
            {cart.map((item, key) => {
              return (
              <MyCart key={key} imgurl1={item.imgurl1} cart_id={item.cart_id} item_name={item.item_name} price={item.price} price_total={item.price_total} qty={item.qty}/>
              )
            })}
              </div>
				</div>
				<div class="row row-pb-lg">
					<div class="col-md-12">
						<div class="total-wrap">
							<div class="row">
								<div class="col-sm-8">
									<form action="#">
										<div class="row form-group">
										</div>
									</form>
								</div>
								<div class="col-sm-4 text-center">
									<div class="total">
										<div class="sub">
											<p><span>Subtotal:</span> <span>Rp.{total_price}</span></p>
											<p><span>Delivery:</span> <span>Rp.0</span></p>
										</div>
										<div class="grand-total">
											<p><span><strong>Total:</strong></span> <span>Rp.{total_price}</span></p>
										</div>
										<button class="buttonedit buttonedit1" type="submit" onClick={() => this.transaction()}>Purchase</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default connect(
	"cart, total_price, token",
	actions
)(withRouter(Cart));