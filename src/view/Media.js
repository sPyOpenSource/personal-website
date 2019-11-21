import React, { Component } from 'react';
var WebTorrent = require('webtorrent');
let THREE = require('../utils/OBJLoader');
const ReactMarkdown = require('react-markdown')

class Media extends Component {
  constructor() {
    super();
    this.download      = this.download.bind(this);
    this.play          = this.play.bind(this);
    this.turn          = this.turn.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this.camera        = new THREE.PerspectiveCamera(75, 1 / 0.56, 0.1, 1000);
    this.scene         = new THREE.Scene();
    this.renderer      = new THREE.WebGLRenderer();
    this.state = {
      display: "none",
      angle: 0
    };
  }

  play(e) {
    if (WebTorrent.WEBRTC_SUPPORT) {
      // WebRTC is supported
      e.preventDefault();
      let client = new WebTorrent();
      if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
      }
      let torrentIds = {
        'Modeshow':            'magnet:?xt=urn:btih:916379bed14225a646b1fa3ba4d12614b6d7ae47&dn=0920.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F0920.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F0920.torrent',
        'Bike Show':           'magnet:?xt=urn:btih:86355cc4bb7dd710cb8947777ebff5b852887d84&dn=093.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F093.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F093.torrent',
        'Story of the Spring': 'magnet:?xt=urn:btih:8e28dc57738cf60125cdf3c6f5e081827cef70b2&dn=0669.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F0669.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F0669.torrent',
        'Clash of Clans':      'magnet:?xt=urn:btih:9512d00578c949f4eec1a39bdccbd2352050ed1e&dn=5149.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F5149.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F5149.torrent',
        'Real Racing 3':       'magnet:?xt=urn:btih:9087582e1702f531767132ffa2a23e8e8a6a9481&dn=5533.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&as='+escape(window.location.origin)+'%2Fmedia%2F5533.mp4&xs='+escape(window.location.origin)+'%2Fmedia%2F5533.torrent'
      };
      client.add(torrentIds[e.target.alt], this.download);
      window.scrollTo(0, 0)
    }
  }

  download(torrent) {
    // Torrents can contain many files. Let's use the .mp4 file
    let file = torrent.files[0];
    // Display the file by adding it to the DOM.
    this.setState({display: 'block'});
    file.renderTo('video');
  }

  turn(e) {
    e.preventDefault();
    this.setState({angle: this.state.angle + 0.1});
  }

  componentDidMount() {
    let handler  = this._handleResize;
    let scene    = this.scene;
    let renderer = this.renderer;
    let camera   = this.camera;
    let loader   = new THREE.OBJLoaderCloud();

    camera.position.z = 1.3;
    camera.position.x = 0;
    camera.position.y = 0;
    loader.load('/img/test.obj', function(object){
      scene.add(new THREE.Points( object, new THREE.PointsMaterial( { color: 0x00ffff, size: 0.001 } ) ));
      renderer.render(scene, camera);
      document.getElementById("3DImage").append(renderer.domElement);
      handler();
    });
    window.addEventListener('resize', handler);
  }

  _handleResize() {
    let width = document.getElementById("image").offsetWidth;
    this.setState({
      imageWidth: width
    });
    let canvas    = document.getElementsByTagName("canvas")[0];
    canvas.width  = width;
    canvas.height = width * 0.56;
  }

  render() {
    let width    = this.state.imageWidth;
    let angle    = this.state.angle;
    let camera   = this.camera;
    let renderer = this.renderer;
    camera.position.z = 1.3 * Math.cos(angle);
    camera.position.x = 1.3 * Math.sin(angle);
    camera.up = new THREE.Vector3(0, 1, 0);
    camera.lookAt( new THREE.Vector3(0, 0, 0) );
    renderer.setSize(width, width * 0.56);
    renderer.render(this.scene, camera);
    return (
      <div className="container">
        <video controls width = "100%" style = {{display: this.state.display, marginBottom: "20px"}}></video>
        <div className = "row">
          <div className = "col-sm-4">
            <a href = "./media/093.mp4" onClick={this.play}>
              <img id = "image" src = "img/videos/germany2.png" alt = "Bike Show" className = "img-responsive"></img>
            </a>
            <p>Bike Show at Germany.</p>
          </div>
          <div className = "col-sm-4">
            <a href = "./media/0669.mp4" onClick = {this.play}>
              <img src = "img/videos/spring2.png" alt = "Story of the Spring" className = "img-responsive"></img>
            </a>
            <ReactMarkdown source={"Story of the Spring at Chinese New Year's Eve Doelen (Rotterdam, The Netherlands)."} />
          </div>
          <div className = "col-sm-4">
            <a href = "./media/0920.mp4" onClick = {this.play}>
              <img src = "img/videos/show2.png" alt = "Modeshow" className = "img-responsive"></img>
            </a>
            <p>You are Beautiful Modeshow at Theather Zuidplein (Rotterdam, The Netherlands) supported by Red Cross.</p>
          </div>
          <div className = "col-sm-4">
            <a href = "./media/5149.mp4" onClick = {this.play}>
              <img src = "img/videos/clashofclans.png" alt = "Clash of Clans" className = "img-responsive"></img>
            </a>
            <p>This is a video of a Clash of Clans attack.</p>
          </div>
          <div className = "col-sm-4">
            <a href = "./media/5533.mp4" onClick = {this.play}>
              <img src = "img/videos/realracing3.png" alt = "Real Racing 3" className = "img-responsive"></img>
            </a>
            <p>This is a video of a racing of BMW M3 GTS.</p>
          </div>
          <div className = "col-sm-4">
            <a href = "#" onClick = {this.turn} id = "3DImage"></a>
            <ReactMarkdown source={"This is a 3D image made with a RealSence Camera (Utrecht, The Netherlands)."} />
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
