import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Steps, { Step } from 'rc-steps'
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
          <h1 className="light-text" align="center">A new way to get matched and interview</h1>
        </div>
        <div className="center">
          <Button large waves='light'>Start the process!</Button>
        </div>


      </div>
    </div>
    <div id="steps" className="row">
      <div className="steps col-md-6">
        <Steps size="large" className="margin-top-m" current={0}>
          <Step title="Step 1" description="do this" />
          <Step title="Step 2" description="do this" />
          <Step title="Step 3" description="do this" />
        </Steps>
      </div>
    </div>
  </div>
)

export default Landing;