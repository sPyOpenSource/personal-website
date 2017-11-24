import React, { Component } from 'react';
var markdown = require('../utils/markdown');

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome:</h2>
        <p>This is my personal web page. It is a little summary of my past work...</p>
	      <h2>News:</h2>
        <div dangerouslySetInnerHTML={{__html: markdown.toHTML("7 October 2017: I've added p2p feature in video streaming.")}} />
        <div dangerouslySetInnerHTML={{__html: markdown.toHTML("22 June 2017: I'm using react.js to build my website.")}} />
	      <p>20 October 2016: I have made a new design for my website, please check it out.</p>
	      <p>10 August 2015: I have made updates on my website, please check it out.</p>
	      <p>5 April 2015: I have updated my web page.</p>
	      <p>24 October 2014: I have a completely different design for my website.</p>
	      <p>8 April 2014: I have added my theses which are written during my studies.</p>
	      <p>3 November 2013: I have updated my biography.</p>
      </div>
    );
  }
}

export default Home;
