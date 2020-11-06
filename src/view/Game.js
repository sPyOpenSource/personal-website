import React, { Component } from 'react'

class Game extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <a href="/games">
              <img id="image" src="img/games/rccar.png" alt="RC Car" className="img-responsive"></img>
            </a>
            <p>RC Car.</p>
          </div>
          <div className="col-sm-4">
            <a href="/games/drone.html">
              <img src="img/games/drone.png" alt="Drone" className="img-responsive"></img>
            </a>
            <p>Drone Simulator.</p>
          </div>
          <div className="col-sm-4">
            <a href="/rpg">
              <img src="img/games/rpg.png" alt="RPG" className="img-responsive"></img>
            </a>
            <p>RPG Game.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
