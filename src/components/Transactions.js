import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from '../store';

class Transactions extends Component {
    getHistory = async (e) => {
    this.props.getTransactionDetail(e.target.value)
    this.props.history.push("/transactiondetail")
      };
  render() {
    return (   
    <tr>
        <td>{this.props.id}</td>
        <td>{this.props.total_price}</td>
        <button class="btn btn-dark" value={this.props.id} onClick={(e) => this.getHistory(e)}>Detail</button>
    </tr>              
    );
  }
}

export default connect(
	"transaction_detail",
	actions
)(withRouter(Transactions));