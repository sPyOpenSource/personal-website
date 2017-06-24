import React, { Component } from 'react';

class Media extends Component {
  render() {
    return (
      <div>
        <div className="span4">
          <a href="./media/093.mp4"><img src="img/videos/germany.png" alt="Bike Show"></img></a>
          <p>Bike Show at Germany.</p>
          <br/>
        </div>
        <div className="span4">
          <a href="./media/0669.mp4"><img src="img/videos/spring.png" alt="Story of the Spring"></img></a>
          <p>Story of the Spring at Chinese New Year's Eve Doelen (Rotterdam, The Netherlands).</p>
          <br/>
        </div>
        <div className="span4">
          <a href="./media/0920.mp4"><img src="img/videos/show.png" alt="Modeshow"></img></a>
          <p>You are Beautiful Modeshow at Theather Zuidplein (Rotterdam, The Netherlands) supported by Red Cross.</p>
          <br/>
        </div>
      </div>
    );
  }
}

export default Media;
