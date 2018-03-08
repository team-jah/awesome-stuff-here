import React, { Component } from 'react';
import { Button } from 'react-materialize';

const Landing = () => (
  <div>
    <div className="page-bg"></div>
    <div id="landing" className="row">
      <div className="col-md-6">
        <h2>Introducing Awesome Team</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt dapibus aliquam. 
          Cras porta lacus justo, sit amet fringilla elit accumsan non. Duis sit amet maximus erat. 
          Quisque mollis ultrices justo sed mattis. Cras vehicula arcu nulla, quis condimentum turpis mattis vel. 
        </h4>
        <div>
          <Button waves='light'>Candidates</Button>
          <Button waves='light'>Employers</Button>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;