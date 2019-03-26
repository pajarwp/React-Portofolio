import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';
class Header extends Component {
    handleClick = async () => {
    this.props.getTransactionHistory()
    };
    render(){
    if (this.props.isLogin && this.props.status === "buyer"){
    return (
        <div id="page">
            <nav class="colorlib-nav" role="navigation">
                <div class="top-menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 col-md-9">
                                <div id="colorlib-logo">
                                <Link to="/"><img src="images/logo.png" class="img-fluid imagelogo" alt="Free html5 bootstrap 4 template"/></Link>
                                </div>
                            </div>
                            <div class="col-sm-5 col-md-3">
                                <form action="#" class="search-wrap searchm">
                                    <div class="form-group">
                                        <input type="search" class="form-control search" placeholder="Search"/>
                                        <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 text-left menu-1">
                                <ul>
                                    <li class="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/allproducts">Shop</Link></li>
                                    <li><Link to="/buyerprofile"  onClick={() => this.handleClick()}>My Profile</Link></li>
                                    <li class="cart"><Link to="/cart"><i class="icon-shopping-cart"></i> Cart</Link></li>
                                    <li className="listnav"><Link to="/" onClick={() => this.props.postLogout()}>Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sale">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 offset-sm-2 text-center">
                                <div class="row">
                                    <div class="owl-carousel2">
                                        <div class="item">
                                            <div class="col">
                                                <h3><Link to="/allproducts">Find The Best Shoes In Town</Link></h3>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="col">
                                                <h3><Link to="/allproducts">Give You Quality With Minimum Price</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
  else if (this.props.isLogin && this.props.status === ("user" || "admin")){
    return (
        <div id="page">
            <nav class="colorlib-nav" role="navigation">
                <div class="top-menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 col-md-9">
                                <div id="colorlib-logo">
                                <Link to="/"><img src="images/logo.png" class="img-fluid imagelogo" alt="Free html5 bootstrap 4 template"/></Link>
                                </div>
                            </div>
                            <div class="col-sm-5 col-md-3">
                                <form action="#" class="search-wrap searchm">
                                    <div class="form-group">
                                        <input type="search" class="form-control search" placeholder="Search"/>
                                        <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 text-left menu-1">
                                <ul>
                                    <li class="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/allproducts">Shop</Link></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li className="listnav"><Link to="/" onClick={() => this.props.postLogout()}>Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sale">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 offset-sm-2 text-center">
                                <div class="row">
                                    <div class="owl-carousel2">
                                        <div class="item">
                                            <div class="col">
                                                <h3><Link to="/allproducts">Find The Best Shoes In Town</Link></h3>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="col">
                                                <h3><Link to="/allproducts">Give You Quality With Minimum Price</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
else{
    return(
    <div id="page">
    <nav class="colorlib-nav" role="navigation">
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-md-9">
                        <div id="colorlib-logo">
                        <Link to="/"><img src="images/logo.png" class="img-fluid imagelogo" alt="Free html5 bootstrap 4 template"/></Link>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-3">
                        <form action="#" class="search-wrap searchm">
                            <div class="form-group">
                                <input type="search" class="form-control search" placeholder="Search"/>
                                <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-left menu-1">
                        <ul>
                            <li class="active"><Link to="/">Home</Link></li>
                            <li><Link to="/allproducts">Shop</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/buyerprofile">My Profile</Link></li>
                            <li class="cart"><Link to="/cart"><i class="icon-shopping-cart"></i> Cart [0]</Link></li>
                            <li class="cart"><Link to="/logorsign">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="sale">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2 text-center">
                        <div class="row">
                            <div class="owl-carousel2">
                                <div class="item">
                                    <div class="col">
                                        <h3><Link to="/allproducts">Find The Best Shoes In Town</Link></h3>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="col">
                                        <h3><Link to="/allproducts">Give You Quality With Minimum Price</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
)
}
}}
  export default connect(
	"isLogin, status",
	actions
)(withRouter(Header));