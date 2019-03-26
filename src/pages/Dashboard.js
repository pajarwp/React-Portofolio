import React, { Component } from 'react';
import loadjs from 'loadjs'
import Footer from '../components/Footer'
import DashboardUser from '../components/DashboardUser'
class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardUser/>
        <Footer/>
      </div>
    );
  }
}

export default Dashboard;
