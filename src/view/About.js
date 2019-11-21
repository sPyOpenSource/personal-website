import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
	       <div className="container">
            <div>
	      		   <img src="/img/DSC001952.jpg" height="386" width="290" alt="My face"/>
	    	    </div>
	    	    <div>
		            <h2>Biography</h2>
                <p>
                  I was born in 1988. In 2001 I emigrated from China to Netherlands.
                  In 2008 I started my study at Delft University of Technology.
                  In 2012 from August to November I have worked on a simulation project at FOM Institute AMOLF.
                  In 2014 I've finished my Master's degree (Applied Physics) at Delft University of Technology.
                  I've worked on a Master's Thesis Project of 2D crystalline materials at Molecular Electronics and Devices group of Quantum Nanoscience Department.
                  My main interest is the Nanooscience.
                  I'm still looking for a job in a high tech company.
                  I have written following papers during my study at Delft University of Technology.
                </p>
                  <a href="/html/papers/master.html">
                    <h2>
                      Strain engineering in atomically thin MoS2 and MoSe2
                    </h2>
                  </a>
                  <p>
                    This is a research report for a Master’s thesis project within the Quantum Nanoscience Department.
                    The aim of this project is to study strain engineering on 2D materials: MoS2 and MoSe2.
                    We would like to investigate the bandgap of these materials when strain is applied.
                    For that reason we have examined four different techniques to induce strain in 2D materials.
                    Firstly we observe an opposite change of the bandgap of MoS2 by using our techniques compared to an experimental result from a reference.
                    Secondly we do not see a significant change in the bandgap energy of MoSe2 when up to 0.4% strain is applied by using the wrinkling technique.
                  </p>
                <a href="/html/papers/intern.html">
                  <h2>Simulating hindered diffusion</h2>
                </a>
                <p>
                  Diffusion inside the biological systems is complicated, because the irregular shape of the boundaries and presence of the obstacles.
                  One way to understand the diffusion inside those systems is to analyze them with computer simulations.
                  In this report we use three different simulation methods to simulate those problems.
                  They are random walk simulation, discrete Gauss approximated simulation and Green’s function diffusion dynamics (GFDD) simulation.
                  We have analysed the advantage and disadvantage of those simulation methods.
                  We have also investigate a model of mitochondria which describes the diffusion process inside mitochondria.
                </p>
                  <a href="/html/papers/nano.html">
                    <h2>Impact of plasma chemistry of SiO2 substrate etching</h2>
                  </a>
                  <p>
                    In this report we present a dry etching technique for SiO2 substrate.
                    The whole process this technique of pattern design, pattern lithograph and etching are described in this report.
                    We have also inspected the structure before, after and during etching with different techniques.
                    The process of pattern transfer, coating of the photoresist and pattern development are also explained in this report.
                  </p>
                  <a href="/html/papers/bachelor.html">
                    <h2>Determination of the ionic capacitance of graphene</h2>
                  </a>
                  <p>
                    This is a report of a Bachelor’s thesis project. The aim of this project is to determinate the ionic capacitance of a free-standing graphene membrane.
                    During this research we encountered a problem that the support-chips have large capacitance contribution to the total capacitance, but we avoid this problem by using a different type of support-chip.
                    Finally we found the capacitance of graphene which is 0.04±0.02 F/m2.
                    This value agrees to the value which we have found in a literature.
                  </p>
            </div>
        </div>
    );
  }
}

export default About;
