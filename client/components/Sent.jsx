import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

const Sent = () => (

    <div id="landing" className="row">
      <div className="col-md-6">
        <div className="text-description">
          <h1 className="light-text" align="center">Thank you for your submission!</h1>
        </div>
        <div className="center">
          <Link to="/matches"><Button large waves='light'>More Companies</Button></Link>   
        </div>


      </div>
    </div>

)

export default Sent;