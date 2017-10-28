import React, { Component } from 'react';
import WebTorrent from '../webtorrent';
//import * as THREE from 'three';
var THREE = require('../utils/OBJLoader');

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
    if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
    let torrentIds = {
      'Modeshow': 'magnet:?xt=urn:btih:916379bed14225a646b1fa3ba4d12614b6d7ae47&dn=0920.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F0920.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F0920.torrent',
      'Bike Show': 'magnet:?xt=urn:btih:86355cc4bb7dd710cb8947777ebff5b852887d84&dn=093.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F093.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F093.torrent',
      'Story of the Spring': 'magnet:?xt=urn:btih:8e28dc57738cf60125cdf3c6f5e081827cef70b2&dn=0669.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F0669.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F0669.torrent'
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
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, 640/480, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    let loader = new THREE.OBJLoader();
    var material = new THREE.PointsMaterial( { color: 0x00ffff, size: 0.002 } );
    loader.load('/media/test2.obj', function(object){
      var cube = new THREE.Points( object, material );
      scene.add(cube);
      renderer.setSize(640, 480);
      camera.position.z = 1.5;
      camera.position.x = 0;
      camera.position.y = 0;
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    })
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
