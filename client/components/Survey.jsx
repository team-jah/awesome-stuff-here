import React, { Component } from 'react';

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      sliderValues: {
        Team: {
          value: 3,
          label: 'Team'
        },
        PerkAndBenefits: {
          value: 3,
          label: 'Perks And Benefits'
        },
        Meetings: {
          value: 3,
          label: 'Meetings'
        },
        CEORating: {
          value: 3,
          label: 'CEO Rating'
        },
        ExecutiveTeam: {
          value: 3,
          label: 'Executive Team'
        },
        Leadership: {
          value: 3,
          label: 'Leadership'
        },
        WorkCulture: {
          value: 3,
          label: 'Work Culture'
        },
        OverallCulture: {
          value: 3,
          label: 'Overall Culture'
        },
        ProfessionalDevelopment: {
          value: 3,
          label: 'Professional Development'
        },
        Compensation: {
          value: 3,
          label: 'Compensation'
        },
        Environment: {
          value: 3,
          label: 'Environment'
        },
        Happiness: {
          value: 3,
          label: 'Happiness'
        },
        Diversity: {
          value: 3,
          label: 'Diversity'
        },
        Gender: {
          value: 3,
          label: 'Gender'
        },
        Retention: {
          value: 3,
          label: 'Retention'
        },
        Manager: {
          value: 3,
          label: 'Manager'
        },
        eNPS: {
          value: 3,
          label: 'eNPS'
        },
        OfficeCulture: {
          value: 3,
          label: 'Office Culture'
        },
        Sentiment: {
          value: 3,
          label: 'Sentiment'
        }
      }
    };
  }

  componentDidMount() {
    this.props.resetMatches();
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
    if (this.state.name === '' || this.state.email === '') {
      alert('Please provide a name and email.');
    } else {
      this.props.addSurvey(this.state);
    }
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
        <div className='survey__description'>
          Select how important each of the following values are to you when looking for a company.
        </div>
        {this.renderSliders.call(this)}
        <div className='survey__description'>
          Enter your information that can be provided to employers.
        </div>
        <div className='survey__field'>
          <div className='survey__label'>
            Full Name:
          </div>
          <input onChange={this.handleName.bind(this)} value={this.state.name} type='text' className='survey__input'></input>
        </div>
        <div className='survey__field'>
          <div className='survey__label'>
            Email:
          </div>
          <input onChange={this.handleEmail.bind(this)} value={this.state.email} type='text' className='survey__input'></input>
        </div>
        <button onClick={this.handleSubmit.bind(this)} className='survey__submit'>
          Submit
        </button>
      </div>
    );
  }
}

export default Survey;