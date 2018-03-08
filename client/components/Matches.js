import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Matches extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  renderMatches() {
    const charMap = { A: 5, B: 4, C: 3, D: 2, F: 1 }, matches = {};
    Object.keys(this.props.companies).forEach(key => {
      let match = true;
      const companyValues = this.props.companies[key].culture;
      const sliderValues = this.props.survey.sliderValues;
      Object.keys(companyValues).forEach(key2 => {
        const num = charMap[companyValues[key2].grade[0]];
        if ((sliderValues[key2].value - num) >= 2) match = false;
      });
      if (match) matches[key] = this.props.companies[key];
    });

    function renderValues(values) {
      return Object.keys(values).map((key, i) => {
        return (
          <div key={i} className='company__value'>
            {key}: <strong>{values[key].grade}</strong>
          </div>
        );
      });
    }

    return Object.keys(matches)
      .filter(company => Object.keys(matches[company].culture).length > 0)
      .map((company, i) => {
        return (
          <div className='company' key={i}>
            <div className='company__header'>
              <h2>{company}</h2>
              <Button waves='light'><Link to='/quiz'>Apply</Link></Button>
            </div>
            <div className='company__values'>
              {renderValues(matches[company].culture)}
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div id='matches'>
        {this.renderMatches.call(this)}
      </div>
    );
  }
}

export default Matches;