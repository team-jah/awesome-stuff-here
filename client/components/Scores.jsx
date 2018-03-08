import React, { Component } from 'react';

class Scores extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: null,
      buffer: null
    }
  }

  componentDidMount() {
    fetch('/api/scores').then(response => response.json()).then(companies => {
      this.setState({ companies });
    });
  }

  handleBuffer() {
    if (window.buffer) this.setState({ buffer: window.buffer });
  }

  renderVideo() {
    const superBuffer = new window.Blob(this.state.buffer, {type: 'video/webm'});
    const src = window.URL.createObjectURL(superBuffer);
    return (
      <video className='score__video' autoPlay controls src={src}></video>
    );
  }

  renderApplicants(applicants) {
    return applicants.map((applicant, i) => {
      return (
        <div className='score__applicant' key={i}>
          <div>{applicant.name}</div>
          <div>{applicant.email}</div>
          <div><i onClick={this.handleBuffer.bind(this)} className="material-icons">videocam</i></div>
          <div>{applicant.score + '%'}</div>
        </div>
      );
    });
  }

  renderCompanies() {
    return this.state.companies.map((company, i) => {
      return (
        <div className='score' key={i}>
          <div className='score__name'>
            <h2>{company.name}</h2>
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
        {this.state.buffer && this.renderVideo.call(this)}
        {this.state.companies && this.renderCompanies.call(this)}
      </div>
    );
  }
}

export default Scores;