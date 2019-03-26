import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import LoginSuccess from './components/LoginSuccess'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LoginSuccess/>
        <Footer/>
      </div>
    );
  }
}

export default App;
