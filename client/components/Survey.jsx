import React, { Component } from 'react';

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      sliderValues: {
        team: {
          value: 3,
          label: 'Team'
        },
        perkAndBenefits: {
          value: 3,
          label: 'Perks And Benefits'
        },
        meetings: {
          value: 3,
          label: 'Meetings'
        },
        ceoRating: {
          value: 3,
          label: 'CEO Rating'
        },
        executiveTeam: {
          value: 3,
          label: 'Executive Team'
        },
        leadership: {
          value: 3,
          label: 'Leadership'
        },
        workCulture: {
          value: 3,
          label: 'Work Culture'
        },
        overallCulture: {
          value: 3,
          label: 'Overall Culture'
        },
        professionalDevelopment: {
          value: 3,
          label: 'Professional Development'
        },
        compensation: {
          value: 3,
          label: 'Compensation'
        },
        environment: {
          value: 3,
          label: 'Environment'
        },
        happiness: {
          value: 3,
          label: 'Happiness'
        },
        diversity: {
          value: 3,
          label: 'Diversity'
        },
        gender: {
          value: 3,
          label: 'Gender'
        },
        retention: {
          value: 3,
          label: 'Retention'
        },
        manager: {
          value: 3,
          label: 'Manager'
        },
        eNPS: {
          value: 3,
          label: 'eNPS'
        },
        officeCulture: {
          value: 3,
          label: 'Office Culture'
        },
        sentiment: {
          value: 3,
          label: 'Sentiment'
        }
      }
    };
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSlider(event, key) {
    event.persist();
    const sliderValues = Object.assign({}, this.state.sliderValues);
    sliderValues[key] = {
      value: event.target.value,
      label: sliderValues[key].label
    };
    this.setState({ sliderValues });
  }

  handleSubmit() {
    fetch('/survey', {
      method: 'POST',
      body: JSON.stringify(this.state)
    });
  }

  renderSliders() {
    return Object.keys(this.state.sliderValues).map((key, i) => {
      return (
        <div key={i} className='survey__slider-container'>
          <h2 className='survey__header'>{this.state.sliderValues[key].label}</h2>
          <div className='survey__importance'>
            <div>
              Not Important
            </div>
            <div>
              Very Important
            </div>
          </div>
          <input onChange={(event) => this.handleSlider.call(this, event, key)} type='range' min='1' max='5' value={this.state.sliderValues[key].value} className='survey__slider' id='myRange'></input>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='survey'>
        <h1 className='survey__title'>
          Company Survey
        </h1>
        <div className='survey__field'>
          <div className='survey__label'>
            First Name:
          </div>
          <input onChange={this.handleName.bind(this)} value={this.state.name} type='text' className='survey__input'></input>
        </div>
        <div className='survey__field'>
          <div className='survey__label'>
            Email:
          </div>
          <input onChange={this.handleEmail.bind(this)} value={this.state.email} type='text' className='survey__input'></input>
        </div>
        <div className='survey__description'>
          Please select how import each of the following values are to you when looking for a company. 
        </div>
        {this.renderSliders.call(this)}
        <button onClick={this.handleSubmit.bind(this)} className='survey__submit'>
          Submit
        </button>
      </div>
    );
  }
}

export default Survey;