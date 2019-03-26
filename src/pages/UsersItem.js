import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import PostedItem from '../components/PostedItem'
import {connect} from 'unistore/react'
import {actions} from '../store';
import {withRouter} from 'react-router-dom'

class UsersItem extends Component {

  componentDidMount = async () => {
		this.props.getPostedProduct()
	}
  render() {
    const {posted_item} = this.props;
    return (
      <div>
        <div class="colorlib-product">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                        <h2>Posted Products</h2>
                    </div>
                          <div class="row row-pb-md">
                          {posted_item.map((item, key) => {
                          return (
                            <PostedItem key={key} imgurl1={item.imgurl1} item_name={item.item_name} price={item.price} id={item.item_id}/> 
                            )
                            })}
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
	"posted_item",
	actions
)(withRouter(UsersItem));