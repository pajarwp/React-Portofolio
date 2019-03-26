import React, { Component } from "react";
import { Link } from "react-router-dom";
import Transactions from './Transactions'
import {Redirect} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class BuyerData extends Component {

 componentDidMount = async () => {
    this.props.getBuyerData()
};

handleClick = async () => {
    this.props.getTransactionHistory()
};

deleteAccount = async () => {
    this.props.deleteBuyer()
    this.props.history.push("/")
};

render() {
    const {transaction_history} = this.props;
    if (this.props.isLogin === false) {
        return <Redirect to={{pathname: "/logorsign"}}/>;
      }
      else {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
                    <h2>{this.props.buyer_fullname}</h2>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 text-center">
                        <img src={this.props.buyer_url_image} class="img-fluid" alt="Free html5 bootstrap 4 template"/><br/><br/>
                        <button class="btn btn-danger" onClick={e => this.deleteAccount(e)}>Delete Account</button>
                    </div>
                    <div class="col-sm-6 text-center">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Field</th>
                                    <th scope="col">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td>{this.props.buyer_username}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{this.props.buyer_address}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{this.props.buyer_phone}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.props.buyer_email}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                        <Link to="/buyerprofileedit"><button class="buttonedit buttonedit1">Edit</button></Link>
                        </div><br/>
                        <div>
                            <h3>Transactions</h3>
                                <table class="table table-sm">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Total Payment</th>
                                    <th scope="col">History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {transaction_history.map((item, key) => {
                                return (
                                    <Transactions key={key} id={item.transaction_id} total_price={item.total_price}/>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div> 
                    </div>             
                </div>
            </div>
        </div>
    );
  }
}
}
export default connect(
	"isLogin, buyer_fullname, buyer_url_image, buyer_username, buyer_address, buyer_email, buyer_phone, transaction_history",
	actions
)(withRouter(BuyerData));