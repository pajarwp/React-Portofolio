import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
        <footer id="colorlib-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col footer-col colorlib-widget">
                        <h4>About Los Zapatos</h4>
                        <p>Los Zapatos is your place for athletic and casual shoes for the whole family from hundreds of name brands.
                            You'll find styles for men from brands like Nike, Converse, Vans, Sperry, Madden Girl, Skechers, ASICS and
                            more!
                        </p>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p>
                            <span className="block">Copyright: Pajar Wijaya Putra</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
