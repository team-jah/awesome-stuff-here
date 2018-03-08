import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Steps, { Step } from 'rc-steps'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

const Landing = () => (
  <div>
    <div id="landing" className="row">
      <div className="col-md-6">
        <div className="text-description">
          <h2 className="small-header" align="center">Introducing Awesome Team</h2>
        </div>
        <div className="text-description">
          <h1 className="light-text" align="center">A new way to match and interview for the companies you want</h1>
        </div>
        <div className="center">
          <Link to="/survey"><Button large waves='light'>Start the process!</Button></Link>
          
        </div>


      </div>
    </div>
    <div id="steps" className="row">
      <div className="steps col-md-9">
        <div className="text-description">
          <h2 className="small-header" align="center">Steps to Success</h2>
          <p className="small-paragraph" align="center">We work with hundreds of companies of different sizes, stages, and industries and personally identify the ones that will be most exciting to you. All allow our pre-screened, pre-matched engineers to skip resume screens.</p>
        </div>
        <div id="rocket">
          <img id="rocket-png" style={{width: 200}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Noun_598870_cc_rocket.svg/200px-Noun_598870_cc_rocket.svg.png" alt=""/>
          <Steps size="large" className="margin-top-m" current={0}>
            <Step title="Step 1" description="Fill out our comprehensive survey to match with the companies whose culture you really care about" />
            <Step title="Step 2" description="Get matched with over 200 companies" />
            <Step title="Step 3" description="Apply with our quiz and fastpass to your final interview!" />
          </Steps>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;