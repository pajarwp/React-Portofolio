import React, { Component } from 'react';
import loadjs from 'loadjs';
import { Link } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
import {withRouter} from 'react-router-dom'
import Footer from '../components/Footer'
import BannerAll from '../components/BannerAll'
import ContentAll from '../components/ContentAll'

class AllProduct extends Component {

	componentDidMount = async () => {
		this.props.getAllProduct()

	}

  render() {
		const {all_product} = this.props;
    return (
      <div>
        <BannerAll/>
        <div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-xl-3">
						<div class="row">
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Category</h3>
									<ul>
										<li><Link to="/category" name="casual" onClick={e => this.props.setCategory(e)}>Casuals</Link></li>
										<li><Link to="/category" name="formal" onClick={e => this.props.setCategory(e)}>Formal</Link></li>
										<li><Link to="/category" name="sport" onClick={e => this.props.setCategory(e)}>Sports</Link></li>
										<li><Link to="/category" name="brogues" onClick={e => this.props.setCategory(e)}>Brogues</Link></li>
										<li><Link to="/category" name="boots" onClick={e => this.props.setCategory(e)}>Boots</Link></li>
										<li><Link to="/category" name="slipon" onClick={e => this.props.setCategory(e)}>Slip On</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-xl-9">
						<div class="row row-pb-md">
            {all_product.map((item, key) => {
              return (
              <ContentAll key={key} imgurl1={item.imgurl1} item_name={item.item_name} price={item.price} id={item.item_id}/>
              )
              })}
              </div>
						<div class="row">
							<div class="col-md-12 text-center">
								<div class="block-27">
									<ul>
										<li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
										<li class="active"><span>1</span></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
									</ul>
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
	"all_product",
	actions
)(withRouter(AllProduct));