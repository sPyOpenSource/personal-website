import React, { Component } from 'react'
let THREE = require('../utils/OBJLoader');

class Game extends Component {
  constructor() {
    super();
    this.camera        = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.scene         = new THREE.Scene();
    this.clock         = new THREE.Clock();
    this.renderer      = new THREE.WebGLRenderer();
    this.webSocket     = new WebSocket('ws://' + window.location.host + '/ai/');
    this.animate       = this.animate.bind(this);
    this.onSubmit      = this.onSubmit.bind(this);
    this.createText    = this.createText.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this.state         = {}
  }

  componentDidMount() {
    let createText = this.createText;
    let webSocket  = this.webSocket;
    let scene      = this.scene;
    let renderer   = this.renderer;
    let camera     = this.camera;
    let animate    = this.animate;
    let handler    = this._handleResize;
    let objLoader  = new THREE.OBJLoader();
    //let TexLoader  = new THREE.TextureLoader();
    let keyLight   = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);

    let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    var gridHelper = new THREE.GridHelper( 1000, 20 );
		scene.add(gridHelper);

    camera.position.z = 1000;
    camera.position.x = 500;
    camera.position.y = 100;
    camera.up = new THREE.Vector3(0, 1, 0);
    camera.lookAt( new THREE.Vector3(0, 0, 0) );
    objLoader.load(
      '/img/drone.obj',
      // called when resource is loaded
    	function (object){
        object.position.y = 0;
        object.name = "drone";
        scene.add(object);
        object.velocity = new THREE.Vector3(0, 0, 0);
        object.acceleration = new THREE.Vector3(0, -981, 0)
    	},
    	// called when loading is in progresses
    	function (xhr){
    		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    	},
    	// called when loading has errors
    	function (error){
    		console.log('An error happened');
    	}
    );
    var fontLoader = new THREE.FontLoader();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("Game").append(renderer.domElement);
    window.addEventListener('keydown', (e) => {
      this.handleKey(e)
    })
    window.addEventListener('keyup', (e) => {
      this.handleKey(e)
    })
    window.addEventListener('devicemotion', (e) => {
      this.handleKey(e)
    }, true)
    window.addEventListener('resize', handler)
    webSocket.onopen = function(event){
      fontLoader.load('fonts/gentilis_bold.typeface.json', function(response){
        createText(response, 'Connected');
      });
    }
    webSocket.onmessage = function(event){
      let textMesh = scene.getObjectByName("text");
      scene.remove(textMesh);
      createText(null, event.data);
    }
    animate();
    let canvas = document.getElementsByTagName("canvas")[0]
    canvas.addEventListener("touchstart", (e) => {
      this.handleKey(e)
      }, false
    )
    canvas.addEventListener("touchend", (e) => {
      this.handleKey(e)
      }, false
    )
    handler()
  }

  _handleResize() {
    let camera = this.camera
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    let width = document.getElementById("Game").offsetWidth;
    this.setState({
      imageWidth: width
    });
    let canvas    = document.getElementsByTagName("canvas")[0];
    canvas.width  = width;
    canvas.height = width *  window.innerHeight / window.innerWidth
  }

  handleKey(e){
    let drone = this.scene.getObjectByName("drone");
    if (typeof drone != "undefined"){
      let keyCode = e.keyCode
      let type = e.type
      if (e.type === "devicemotion"){
        if (e.accelerationIncludingGravity.x > 5){
          if (e.accelerationIncludingGravity.y > 1){
            type = "keydown"
            keyCode = 39
          } else if (e.accelerationIncludingGravity.y < -1) {
            type = "keydown"
            keyCode = 37
          } else {
            drone.acceleration.x = 0
          }
          if (e.accelerationIncludingGravity.x > 8){
            type = "keydown"
            keyCode = 40
          } else if (e.accelerationIncludingGravity.x < 6){
            type = "keydown"
            keyCode = 38
          } else {
            drone.acceleration.z = 0
          }
        }
        if (e.accelerationIncludingGravity.x < -5){
          if (e.accelerationIncludingGravity.y > 1){
            type = "keydown"
            keyCode = 37
          } else if (e.accelerationIncludingGravity.y < -1) {
            type = "keydown"
            keyCode = 39
          } else {
            drone.acceleration.x = 0
          }
          if (e.accelerationIncludingGravity.x < -8){
            type = "keydown"
            keyCode = 40
          } else if (e.accelerationIncludingGravity.x > -6){
            type = "keydown"
            keyCode = 38
          } else {
            drone.acceleration.z = 0
          }
        }
        if (e.accelerationIncludingGravity.y > 5){
          if (e.accelerationIncludingGravity.x > 1){
            type = "keydown"
            keyCode = 37
          } else if (e.accelerationIncludingGravity.x < -1) {
            type = "keydown"
            keyCode = 39
          } else {
            drone.acceleration.x = 0
          }
          if (e.accelerationIncludingGravity.y > 8){
            type = "keydown"
            keyCode = 40
          } else if (e.accelerationIncludingGravity.y < 6){
            type = "keydown"
            keyCode = 38
          } else {
            drone.acceleration.z = 0
          }
        }
      }
      if (e.type === "touchstart"){
        type = "keydown"
        keyCode = 32
      }
      if (e.type === "touchend"){
        keyCode = 32
      }
      switch(keyCode) {
        case 13:
          if (type === "keydown"){
            this.onSubmit(e)
          }
          break;

        case 37:
          if (type === "keydown"){
            drone.acceleration.x = -100;
          } else {
            drone.acceleration.x = 0;
          }
          break;

        case 38:
          if (type === "keydown"){
            drone.acceleration.z = -100;
          } else {
            drone.acceleration.z = 0;
          }
          break;

        case 39:
          if (type === "keydown"){
            drone.acceleration.x = 100;
          } else {
            drone.acceleration.x = 0;
          }
          break;

        case 40:
          if (type === "keydown"){
            drone.acceleration.z = 100;
          } else {
            drone.acceleration.z = 0;
          }
          break;

        case 32:
          if (type === "keydown"){
            drone.acceleration.y = 100;
          } else {
            drone.acceleration.y = -981;
          }
          break;

        default:
          console.log(e.keyCode)
      }
    }
  }

  onSubmit(e){
    e.preventDefault();
    let message = this.message;
    this.webSocket.send(message.value);
    message.value = '';
  }

  createText(font, text){
    if (font){
      this.font = font;
    }
    let textGeo = new THREE.TextGeometry(text, {
      font: this.font,
      size: 40,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5
    });
    textGeo.computeBoundingBox();
		textGeo.computeVertexNormals();
    textGeo = new THREE.BufferGeometry().fromGeometry(textGeo);
    let materials = [
					new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
					new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
				];
    let textMesh = new THREE.Mesh(textGeo, materials);
    textMesh.position.x = -500;
    textMesh.position.y = 500;
    textMesh.position.z = -100;
    textMesh.rotation.y = 0.4;
    textMesh.name = "text";
    this.scene.add(textMesh);
  }

  animate(){
		window.requestAnimationFrame(this.animate);
		let delta = this.clock.getDelta();
    let drone = this.scene.getObjectByName("drone");
    if (typeof drone != "undefined"){
      drone.velocity.x += delta * drone.acceleration.x;
      drone.velocity.z += delta * drone.acceleration.z;
      if (drone.position.y <= 0){
        drone.position.y = 0;
        drone.velocity.y = 0;
        drone.rotation.x = 0;
        drone.rotation.y = 0;
        drone.rotation.z = 0;
        drone.velocity.x = 0
        drone.velocity.z = 0
      }
      drone.position.x += delta * drone.velocity.x;
      drone.velocity.y += delta * drone.acceleration.y;
      drone.position.y += delta * drone.velocity.y;
      drone.position.z += delta * drone.velocity.z;
    }
		this.renderer.render(this.scene, this.camera);
  }

  render(){
    let width    = this.state.imageWidth
    let renderer = this.renderer
    renderer.setSize(width, width * window.innerHeight / window.innerWidth)
    return (
      <div className = "container">
        <div id = "Game"></div>
        <input type = "text" ref = {(c) => this.message = c} name = "message" style = {{width: width - 62}}/><button type = "button" onClick = {this.onSubmit} className = "btn btn-info">Send</button>
        <p>Use Space or Touch to fly. Use Arrow Keys or Rotation to move the drone.</p>
      </div>
    )
  }
}

export default Game
