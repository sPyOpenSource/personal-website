import React, { Component } from 'react';
import WebTorrent from '../webtorrent';

class Media extends Component {
  constructor() {
    super();
    this.download = this.download.bind(this);
    this.play = this.play.bind(this);
    this.state = {
      display: "none"
    };
  }
  play(e) {
    e.preventDefault();
    let client = new WebTorrent();
    let torrentIds = {
      'Modeshow': 'magnet:?xt=urn:btih:916379bed14225a646b1fa3ba4d12614b6d7ae47&dn=0920.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as=http%3A%2F%2Flocalhost%3A3000%2Fmedia%2F0920.mp4&xs=http%3A%2F%2Flocalhost%3A3000%2Fmedia%2F0920.torrent',
      'Bike Show': 'magnet:?xt=urn:btih:86355cc4bb7dd710cb8947777ebff5b852887d84&dn=093.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as=http%3A%2F%2Flocalhost%3A3000%2Fmedia%2F093.mp4&xs=http%3A%2F%2Flocalhost%3A3000%2Fmedia%2F093.torrent',
      'Story of the Spring': 'magnet:?xt=urn:btih:8e28dc57738cf60125cdf3c6f5e081827cef70b2&dn=0669.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as=http%3A%2F%2Flocalhost%3A3000%2Fmedia%2F0669.mp4&xs=http%3A%2F%2Flocalhost%3A3000%2Fmedia%2F0669.torrent'
    };
    client.add(torrentIds[e.target.alt], this.download);
  }
  download(torrent){
    // Torrents can contain many files. Let's use the .mp4 file
    let file = torrent.files[0];
    // Display the file by adding it to the DOM.
    // Supports video, audio, image files, and more!
    this.setState({display: 'block'});
    file.renderTo('video');
  }
  render() {
    return (
      <div className="container">
        <video controls width="100%" style={{display:this.state.display}}>
        </video>
        <br/>
        <div className="row">
          <div className="col-sm-4">
            <a href="./media/093.mp4" onClick={this.play}><img src="img/videos/germany.png" alt="Bike Show" className="img-responsive"></img></a>
            <p>Bike Show at Germany.</p>
          </div>
          <div className="col-sm-4">
            <a href="./media/0669.mp4" onClick={this.play}><img src="img/videos/spring.png" alt="Story of the Spring" className="img-responsive"></img></a>
            <p>Story of the Spring at Chinese New Year's Eve Doelen (Rotterdam, The Netherlands).</p>
          </div>
          <div className="col-sm-4">
            <a href="./media/0920.mp4" onClick={this.play}><img src="img/videos/show.png" alt="Modeshow" className="img-responsive"></img></a>
            <p>You are Beautiful Modeshow at Theather Zuidplein (Rotterdam, The Netherlands) supported by Red Cross.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
