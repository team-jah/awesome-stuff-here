import React, { Component } from 'react';

class Scores extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: null
    }
  }

  componentDidMount() {
    fetch('/api/scores').then(response => response.json()).then(companies => {
      this.setState({ companies });
    });
  }

  renderApplicants(applicants) {
    return applicants.map(applicant => {
      return (
        <div className='score__applicant'>
          <span>{applicant.name}</span>
          <span>{applicant.email}</span>
          <span>{applicant.score}</span >
        </div>
      );
    });
  }

  renderCompanies() {
    return this.state.companies.map((company, i) => {
      return (
        <div className='score' key={i}>
          <div className='score__name'>
            <h2>{company.name.replace(new RegExp('%20', 'g'), ' ')}</h2>
          </div>
          <div className='score__applicants'>
            {this.renderApplicants(company.applicants)}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='scores'>
        {this.state.companies && this.renderCompanies.call(this)}
      </div>
    );
  }
}

export default Scores;