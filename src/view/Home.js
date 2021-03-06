import React, { Component } from 'react'
const ReactMarkdown = require('react-markdown')

class Home extends Component {
  render() {
    return (
      <div className="container">
        <img src="/img/frontpage.jpg" width="100%" alt="My face"/>
        <h2>Introduction:</h2>
        <p>
          You are welcome to visite my personal website.
          This is my personal web page. It is a little summary of my past work. I hava worked on 2D materials and simultions. My main intrest is Nanoscience. I have done three projects.
          One project is about how to build a drone. Two other projects are about climate.
          You can also found three videos which I have made in the past. They are videos which I have taken at some events.
          I have worked on a Git Server project.
        </p>
	      <h2>News:</h2>
        <p>18 January 2019: I have added two videos and a drone simulation game.</p>
        <ReactMarkdown source={"7 October 2017: I've added p2p feature in video streaming."} />
        <ReactMarkdown source={"22 June 2017: I'm using react.js to build my website."} />
	      <p>20 October 2016: I have made a new design for my website, please check it out.</p>
	      <p>10 August 2015: I have made updates on my website, please check it out.</p>
	      <p>5 April 2015: I have updated my web page.</p>
	      <p>24 October 2014: I have a completely different design for my website.</p>
	      <p>8 April 2014: I have added my theses which are written during my studies.</p>
      </div>
    );
  }
}

export default Home;
