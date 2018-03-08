import React, { Component } from 'react';
import Timer from './Timer.jsx';
import tests from '../../server/db/testTest';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests,
      currentQuestion: 0,
      secondsLeft: 30,
      selectedOption: '',
      quizScore: 0
    };
    this.incrementer = null;

    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }


  getNextQuestion() {
    this.setState(prevState => ({ currentQuestion: ++prevState.currentQuestion }));
  }

  checkAnswer() {
    if (this.state.currentQuestion < this.state.tests.length) {
      const { answer } = this.state.tests[this.state.currentQuestion];
      if (this.state.selectedOption !== '' && Number(this.state.selectedOption) === answer) {
        this.setState(prevState => ({ quizScore: ++prevState.quizScore }));
      }
    }
  }

  handleStartClick() {
    if (this.incrementer) {
      clearInterval(this.incrementer);
      this.setState({
        secondsLeft: 30,
      });
    }
    this.incrementer = setInterval(() =>
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      }), 1000);
  }

  handleRadioClick(event) {
    this.setState(Object.assign({}, this.state, {
      selectedOption: event.target.value
    }));
  }

  render() {
    const i = this.state.currentQuestion;
    console.log(this.props.location);
    if (i === this.state.tests.length) {
      return (
        <div id="results-block">
          <h1>You received a score of {this.state.quizScore}/{this.state.tests.length}</h1>
        </div>
      );
    }

    const problem = this.state.tests[i];
    return (
      <div id="quiz-block">
        <Timer secondsLeft={this.state.secondsLeft} getNextQuestion={this.getNextQuestion} handleStartClick={this.handleStartClick} />
        <h5>{problem.question}</h5>
        <input type="radio" name={`problem${i}`} onClick={this.handleRadioClick} value={0} id={`A${i}`} />
        <label htmlFor={`A${i}`}>{problem.choices[0]}</label>
        <br />
        <input type="radio" name={`problem${i}`} onClick={this.handleRadioClick} value={1} id={`B${i}`} />
        <label htmlFor={`B${i}`}>{problem.choices[1]}</label>
        <br />
        <input type="radio" name={`problem${i}`} onClick={this.handleRadioClick} value={2} id={`C${i}`} />
        <label htmlFor={`C${i}`}>{problem.choices[2]}</label>
        <br />
        <input type="radio" name={`problem${i}`} onClick={this.handleRadioClick} value={3} id={`D${i}`} />
        <label htmlFor={`D${i}`}>{problem.choices[3]}</label>
        <br />
        <button className="company__button" onClick={() => { this.checkAnswer(); this.getNextQuestion(); this.handleStartClick(); }}>Next &gt;</button>
      </div>
    );
  }
}

export default Quiz;
