import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
