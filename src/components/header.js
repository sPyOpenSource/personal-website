import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      classes: "navbar-collapse collapse"
    };
  }
  reset() {
    this.setState({classes: "navbar-collapse collapse"});
  }
  toggle() {
    if (this.state.classes==="navbar-collapse collapse"){
      this.setState({classes: "navbar-collapse"});
    } else {
      this.setState({classes: "navbar-collapse collapse"});
    }
  }
  render() {
    return (
      <nav id="myNavbar" className="navbar navbar-default navbar inverse" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggle}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#/home" onClick={this.reset}>Personal Website</a>
          </div>
          <div className={this.state.classes}>
            <ul className="nav navbar-nav" onClick={this.reset}>
              <li><a href="#/about">About</a></li>
              <li><a href="#/media">Media</a></li>
              <li><a href="#/projects">Projects</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
