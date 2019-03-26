import React, { Component } from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/Header"
import { withRouter } from "react-router-dom";
import loadjs from 'loadjs'
class AppRouter extends Component {
  componentWillMount() {
    loadjs(["js/jquery.min.js", 
    "../js/popper.min.js", 
    "../js/bootsrap.min.js", 
    "../js/jquery.easing.1.3.js", 
    "../js/jquery.waypoints.min.js",
    "../js/jquery.flexslider-min.js",
    "../js/owl.carousel.min.js",
    "../js/jquery.magnific-popup.min.js",
    "../js/magnific-popup-options.js",
    "../js/bootstrap-datepicker.js",
    "../js/jquery.stellar.min.js",
    "../js/main.js",
  ], function() {
    });
  }

  postSignout = () => {
    localStorage.clear();
    this.props.history.push("/");
}
  render() {
    return (
      <div>
        <Header postSignout={this.postSignout}/>
        <MainRoutes />
      </div>
    );
  }
}

export default withRouter(AppRouter);
