import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="span6">
        <h1>Welcome:</h1>
        <p>This is my personal web page. It is a little summary of my past work...</p>
	      <h1>News:</h1>
        <p>22 June 2017: I'm using react.js to build my website.</p>
	      <p>20 October 2016: I have made a new design for my website, please check it out.</p>
	      <p>10 August 2015: I have made updates on my website, please check it out.</p>
	      <p>5 April 2015: I have updated my web page.</p>
	      <p>24 October 2014: I have a completely different design for my website.</p>
	      <p>8 April 2014: I have added my theses which are written during my studies.</p>
	      <p>3 November 2013: I have updated my biography.</p>
        <br/>
      </div>
    );
  }
}

export default Home;
