import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class DashboardUser extends Component {

    deleteAccount = async () => {
        this.props.deleteUser()
        this.props.history.push("/")
    };

    componentDidMount = async () => {
        this.props.getUserData()
    }

  render() {
    if (this.props.isLogin === false) {
        return <Redirect to={{pathname: "/logorsign"}}/>;
      }
      else {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
                    <h2>{this.props.user_store_name}</h2>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-xl-3">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="side border mb-1">
                                    <h3>Menu</h3>
                                    <ul>
                                        <li><Link to="/userprofileedit">Edit Profile</Link></li>
                                        <li><Link to="/postitem">Post Product</Link></li>
                                        <li><Link to="/usersitem">Edit/Delete Product</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 text-center">
                        <img src={this.props.user_url_image} class="img-fluid" alt="Free html5 bootstrap 4 template"/><br/><br/>
                        <button class="btn btn-danger" onClick={e => this.deleteAccount(e)}>Delete Account</button>
                    </div>
                    <div class="col-sm-4 text-center">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Field</th>
                                    <th scope="col">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Address</td>
                                    <td>{this.props.user_address}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{this.props.user_phone}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.props.user_email}</td>
                                </tr>
                                <tr>
                                    <td>Website</td>
                                    <td>{this.props.user_website}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
}
export default connect(
	"isLogin, user_store_name, user_url_image, user_website, user_address, user_email, user_phone",
	actions
)(withRouter(DashboardUser));