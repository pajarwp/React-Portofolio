import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class About extends Component {
  render() {
    return (
<div class="colorlib-about">
	<div class="container">
		<div class="row row-pb-lg">
			<div class="col-sm-6 mb-3">
				<div class="video colorlib-video" style={{backgroundImage: "url("+this.props.store_detail.url_image+")"}}>
					<div class="overlay"></div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="about-wrap">
				<p>{this.props.store_detail.description}</p>
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
)(withRouter(About));