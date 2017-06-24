import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="span12">
        <div className="row-fluid">
      	    <div className="span9">
        	    <div className="span4">
        	      <img src="img/projects/IMG_1882_web.JPG" alt="Drone"></img>
        	    </div>
        	    <div className="span8">
        	      <p>
                  Artificial Intelligence Drone is a hobby project which I'm working with my friends since 2015.
                  The aim of those projects are to build drones which can be charged by itself.
                  On the later phase we are going to build a network of drones.
                  The drones can communicate with each other inside this network.
                  They form a swarm of drones...
                  <a href="./files/ganttchartdrone.ods">Show Progress</a>
                </p>
        	    </div>
      	    </div>
          </div>
          <br/>
      	  <div className="row-fluid">
      	    <div className="span9">
      	      <div className="span4">
                <a href="https://www.dropbox.com/s/t86jtx7dazg9mri/proposalv4.pdf?dl=0"><img src="img/projects/XY-meterExploded-view.jpg" alt="XY-meter"></img></a>
              </div>
              <div className="span8">
        	      <p>
                  Anemometer is a project from the Challenge Program and founded by Delft Univeristy of Technology.
                  The aim of this project is to build an anemometer in the mekelpark at Delft University of Technology.
                  It starts by a challenge program within Delft Honours Program.
                  Our anemometer gets the second place of this challenge.
                  Until now we have made a design of our anemometer.
                  We need to improve it in order to build a human size anemometer in the mekelpark...
                  <a href="./files/ganttchart.ods">Show Progress</a>
                </p>
        	    </div>
      	    </div>
      	 </div>
      	 <br/>
      	 <div className="row-fluid">
      	    <div className="span9">
        	    <div className="span4">
        	      <a href="http://ccc.weblog.tudelft.nl/category/measuringwater/weatherobservationpole/"><img src="img/projects/impressie_wop.jpg" alt="Weatherpole"></img></a>
        	    </div>
        	    <div className="span8">
        	      <p>
                  Weather Observation Pole is a project from Climate City Campus Program and founded by Delft University of Technology.
                  The Weather Observation Pole is a project that it is coordinated by Rolf Hut.
                  Three students Alex Jakeman, Daniel Dogger and I keep the project running.
                  Jop Jansen has been join us later on for technical support, but this project is still in developing.
                  You can see the sketch of the Wather Obervation Pole here.
                </p>
        	    </div>
      	    </div>
      	 </div>
      </div>
    );
  }
}

export default Projects;
