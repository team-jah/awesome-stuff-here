import React, { Component } from 'react';

class Matches extends Component {

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
    return Object.keys(matches).map((company, i) => {
      return (
        <div key={i}>
          {company}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderMatches.call(this)}
      </div>
    );
  }
}

export default Matches;