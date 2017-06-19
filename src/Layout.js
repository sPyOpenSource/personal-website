import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className="row-fluid">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
