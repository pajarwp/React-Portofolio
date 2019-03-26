import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import BannerAll from '../components/BannerAll'
import Partner from '../components/Partner'
import ContentCategory from '../components/ContentCategory'
import {connect} from 'unistore/react'
import {actions} from '../store';
import {withRouter} from 'react-router-dom'
class Category extends Component {
  componentDidMount = async () => {
    this.props.getCategoryProduct()
	}
 
  render() {
		const {item_category} = this.props;
    return (
      <div>
        <BannerAll/>
        <div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>View All Products</h2>
					</div>
				</div>
				<div class="row row-pb-md">
        {item_category.map((item, key) => {
              return (
          <ContentCategory key={key} imgurl1={item.imgurl1} item_name={item.item_name} price={item.price} id={item.item_id}/>
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
        <Partner/>
        <Footer/>
      </div>
    );
  }
}

export default connect(
	"item_category, category",
	actions
)(withRouter(Category));