import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class Contact extends Component {
  render() {
    return (
		<div id="colorlib-contact">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
							<h2>{this.props.store_detail.store_name}</h2>
						</div>
						<h3>Contact Information</h3>
						<div class="row contact-info-wrap">
							<div class="col-md-3">
								<p><span><i class="icon-location"></i></span>{this.props.store_detail.address}</p>
							</div>
							<div class="col-md-3">
								<p><span><i class="icon-phone3"></i></span>{this.props.store_detail.phone}</p>
							</div>
							<div class="col-md-3">
								<p><span><i class="icon-paperplane"></i></span>{this.props.store_detail.email}</p>
							</div>
							<div class="col-md-3">
								<p><span><i class="icon-globe"></i></span>{this.props.store_detail.website}</p>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    );
  }
}

export default connect(
	"store_detail, id",
	actions
)(withRouter(Contact));