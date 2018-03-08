import React, { Component } from 'react';
<<<<<<< HEAD
import { Button } from 'react-materialize';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> db4be881e6e0fd55ad30a1acec48aa87a15b9af5

class Matches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matches: null,
      page: 1
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);

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

    this.setState({ matches });
  }

  renderValues(values) {
    return Object.keys(values).map((key, i) => {
      return (
        <div key={i} className='company__value'>
          {key}: <strong>{values[key].grade}</strong>
        </div>
      );
    });
  }

  renderMatches(page) {

    const matchesForPage = {};
    const lastResult = page * 10;
    const matches = Object.keys(this.state.matches);

    for (let i = (lastResult - 10); i < lastResult; i++) {
      if (i > matches.length - 1) break;
      matchesForPage[matches[i]] = this.state.matches[matches[i]];
    }

    return Object.keys(matchesForPage)
      .filter(company => Object.keys(matchesForPage[company].culture).length > 0)
      .map((company, i) => {
        return (
          <div className='company' key={i}>
            <div className='company__header'>
              <h2>{company}</h2>
              <Link className='company__button' to={`/quiz/${company}`}>Apply</Link>
            </div>
            <div className='company__values'>
              {this.renderValues(matchesForPage[company].culture)}
            </div>
          </div>
        );
      });
  }

  handlePage(direction) {
    if (direction === 'previous' && this.state.page !== 1) {
      this.setState(prevState => ({ page: --prevState.page }));
    } else if (direction === 'next' && (Object.keys(this.state.matches).length > this.state.page * 10)) {
      this.setState(prevState => ({ page: ++prevState.page }));
    }
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='matches'>
        <div className='matches__page-buttons'>
          <button className='' onClick={() => this.handlePage.call(this, 'previous')}>Previous</button>
          <div className='matches__amount'>
            Showing {this.state.matches && Object.keys(this.state.matches).length} Results
          </div>
          <button onClick={() => this.handlePage.call(this, 'next')}>Next</button>
        </div>
        {this.state.matches && this.renderMatches.call(this, this.state.page)}
        <div className='matches__page-buttons'>
          <button className='' onClick={() => this.handlePage.call(this, 'previous')}>Previous</button>
          <div className='matches__amount'>
            Showing {this.state.matches && Object.keys(this.state.matches).length} Results
          </div>
          <button onClick={() => this.handlePage.call(this, 'next')}>Next</button>
        </div>
      </div>
    );
  }
}

export default Matches;