import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
	       <div>
            <div className="span3">
	      		   <img src="./img/DSC00195.jpg" height="386" width="290" alt="My face"/>
	    	    </div>
	    	    <div className="span6">
		            <strong>Biography:</strong>
                <p>
                  I was born on February 10th.
                  In 2001 I emigrated from China to Netherlands.
                  I've finished my Master's degree (Applied Physics) at Delft University of Technology.
                  I've worked on a Master's Thesis Project of 2D crystaline materials at Molecular Electronics and Devices group of Quantum Nanoscience Department.
                  I'm interested in Nanooscience.
                  In 2012 from August to November I have worked on a simulation project at FOM Institute AMOLF.
                  I'm still looking for a job in a high tech company.
                </p>
		            <strong>Papers:</strong>
                <br/>
		            <a href="./files/mscThesis.pdf">Master's Thesis Project</a>: Strain engineering in atomically thin MoS2 and MoSe2, 2014
                <br/>
		            <a href="./files/Report.pdf">Research Internship Report</a>: Simulating hindered diffusion, 2012
                <br/>
		            <a href="./files/NanoReport1.0.pdf">Nanotechnology Report</a>: Impact of plasma chemistry of SiO2 substrate etching, 2012
                <br/>
		            <a href="./files/graphenev2.pdf">Bachelor's Thesis Project</a>: Determination of the ionic capacitance of graphene, 2011
                <br/>
            </div>
          </div>
    );
  }
}

export default About;
