import React, { Component } from 'react';
const MathJax = require('react-mathjax');

class About extends Component {
  render() {
    return (
	       <div className="container">
            <div>
	      		   <img src="./img/DSC001952.jpg" height="386" width="290" alt="My face"/>
	    	    </div>
	    	    <div>
		            <h2>Biography</h2>
                <p>
                  I was born in 1988. In 2001 I emigrated from China to Netherlands.
                  In 2008 I started my study at Delft University of Technology.
                  In 2012 from August to November I have worked on a simulation project at FOM Institute AMOLF.
                  In 2014 I&#8217;ve finished my Master&#8217;s degree (Applied Physics) at Delft University of Technology.
                  I&#8217;ve worked on a Master&#8217;s Thesis Project of 2D crystalline materials at Molecular Electronics and Devices group of Quantum Nanoscience Department.
                  My main interest is the Nanooscience.
                  I&#8217;m still looking for a job in a high tech company.
                  I have written following papers during my study at Delft University of Technology.
                </p>
                <MathJax.Context>
                  <a href="./files/mscThesis.pdf">
                    <h2>
                      Strain engineering in atomically thin MoS<MathJax.Node inline>{'_2'}</MathJax.Node> and MoSe<MathJax.Node inline>{'_2'}</MathJax.Node>
                    </h2>
                  </a>
                </MathJax.Context>
                <MathJax.Context>
                  <p>
                    This is a research report for a Master’s thesis project within the Quantum Nanoscience Department.
                    The aim of this project is to study strain engineering on 2D materials: MoS<MathJax.Node inline>{'_2'}</MathJax.Node> and MoSe<MathJax.Node inline>{'_2'}</MathJax.Node>.
                    We would like to investigate the bandgap of these materials when strain is applied.
                    For that reason we have examined four different techniques to induce strain in 2D materials.
                    Firstly we observe an opposite change of the bandgap of MoS<MathJax.Node inline>{'_2'}</MathJax.Node> by using our techniques compared to an experimental result from a reference.
                    Secondly we do not see a significant change in the bandgap energy of MoSe<MathJax.Node inline>{'_2'}</MathJax.Node> when up to 0.4% strain is applied by using the wrinkling technique.
                  </p>
                </MathJax.Context>
                <a href="./files/Report.pdf">
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
                <MathJax.Context>
                  <a href="./files/NanoReport1.0.pdf">
                    <h2>Impact of plasma chemistry of SiO<MathJax.Node inline>{'_2'}</MathJax.Node> substrate etching</h2>
                  </a>
                </MathJax.Context>
                <MathJax.Context>
                  <p>
                    In this report we present an optimal ratio of the CHF<MathJax.Node inline>{'_4'}</MathJax.Node>/O<MathJax.Node inline>{'_2'}</MathJax.Node> concentration for etching of SiO<MathJax.Node inline>{'_2'}</MathJax.Node> substrate.
                    We found the optimal concentration ratio is to have no O<MathJax.Node inline>{'_2'}</MathJax.Node> at the inlet gas.
                    The whole process of pattern design, pattern lithograph and dry etching are described in this report.
                    We have also inspected the structure before, after and during etching with different methods.
                    The process of pattern transfer, coating of the photoresist and pattern development are also explained in this report.
                  </p>
                </MathJax.Context>
                  <a href="./files/graphenev2.pdf">
                    <h2>Determination of the ionic capacitance of graphene</h2>
                  </a>
                <MathJax.Context>
                  <p>
                    This is a report of a Bachelor’s thesis project. The aim of this project is to determinate the ionic capacitance of a free-standing graphene membrane.
                    During this research we encountered a problem that the support-chips have large capacitance contribution to the total capacitance, but we avoid this problem by using a different type of support-chip.
                    Finally we found the capacitance of graphene which is 0.04±0.02 F/m<MathJax.Node inline>{'^2'}</MathJax.Node>.
                    This value agrees to the value which we have found in a literature.
                  </p>
                </MathJax.Context>
            </div>
        </div>
    );
  }
}

export default About;
