import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="layer">
        <h1>Welcome:</h1>
        <p>This is my personal web page. It is a little summary of my work...</p>
	      <h1>News:</h1>
	      <p>20 October 2016: I have made a new design for my web page, please check it out.</p>
	      <p>10 August 2015: I have made updates on my web page, please check it out.</p>
	      <p>5 April 2015: I have updated my web page.</p>
	      <p>24 October 2014: I have a completely different design for my web page.</p>
	      <p>8 April 2014: I have added my theses which are written during my studies.</p>
	      <p>3 November 2013: I have updated my biography.</p>
	      <p>10 December 2012: I have updated my biography.</p>
	      <p>12 July 2012: The buienradar applet has been updated and the source code has been included.</p>
        <br/>
      </div>
    );
  }
}

export default Home;
