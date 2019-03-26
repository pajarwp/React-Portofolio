import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class Category extends Component {
  render() {
    var men=require('../images/men.jpg')
    var formal=require('../images/formal.jpg')
    var sport=require('../images/sport.jpg')
    var brogues=require('../images/brogues.jpg') 
    var boots=require('../images/boots.jpg') 
    var slipon=require('../images/slipon.jpg') 

    return (
		<div class="colorlib-featured catmar">
			<div class="container">
				<div class="row">
					<div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
						<h2>Category</h2>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-sm-4 text-center">
							<div class="featured">
								<div class="featured-img featured-img-2" style={{backgroundImage: "url("+men+")"}}>
									<h2>Casuals</h2>
									<p><Link to="/category" class="btn btn-primary btn-lg" name="casual" onClick={e => this.props.setCategory(e)}>Shop now</Link></p>
								</div>
							</div>
						</div>
						<div class="col-sm-4 text-center">
							<div class="featured">
								<div class="featured-img featured-img-2"
									style={{backgroundImage: "url("+formal+")"}}>
									<h2>Formal</h2>
									<p><Link to="/category" class="btn btn-primary btn-lg" name="formal" onClick={e => this.props.setCategory(e)}>Shop now</Link></p>
								</div>
							</div>
						</div>
						<div class="col-sm-4 text-center">
							<div class="featured">
								<div class="featured-img featured-img-2"
									style={{backgroundImage: "url("+sport+")"}}>
									<h2>Sports</h2>
									<p><Link to="/category" class="btn btn-primary btn-lg" name="sport" onClick={e => this.props.setCategory(e)}>Shop now</Link></p>
								</div>
							</div>
						</div>
					</div>
					<div class="row rowmar">
						<div class="col-sm-4 text-center">
							<div class="featured">
								<div class="featured-img featured-img-2"
									style={{backgroundImage: "url("+brogues+")"}}>
									<h2>Brogues</h2>
									<p><Link to="/category" class="btn btn-primary btn-lg" name="brogues" onClick={e => this.props.setCategory(e)}>Shop now</Link></p>
								</div>
							</div>
						</div>
						<div class="col-sm-4 text-center">
							<div class="featured">
								<div class="featured-img featured-img-2"
									style={{backgroundImage: "url("+boots+")"}}>
									<h2>Boots</h2>
									<p><Link to="/category" class="btn btn-primary btn-lg" name="boots" onClick={e => this.props.setCategory(e)}>Shop now</Link></p>
								</div>
							</div>
						</div>
						<div class="col-sm-4 text-center">
							<div class="featured">
								<div class="featured-img featured-img-2"
									style={{backgroundImage: "url("+slipon+")"}}>
									<h2>Slip On</h2>
									<p><Link to="/category" class="btn btn-primary btn-lg" name="slipon" onClick={e => this.props.setCategory(e)}>Shop now</Link></p>
								</div>
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
	"isLogin",
	actions
)(withRouter(Category));