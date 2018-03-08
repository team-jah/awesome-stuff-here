import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Survey from '../components/Survey';
import Matches from '../components/Matches';
import Scores from '../components/Scores';
import Quiz from '../components/Quiz.jsx';
import Footer from '../components/Footer';
import { Navbar, NavItem, Button } from 'react-materialize';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Landing from '../components/Landing';
import Recording from '../components/Recording';
import Sent from '../components/Sent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      survey: null,
      companies: null,
      matches: false,
      quizScore: 0
    }
  }

  addSurvey(survey) {
    fetch('/api/companies').then(response => response.json()).then(companies => {
      this.setState({ survey, companies, matches: true });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar right brand="awesome team">
            <Link className='link' to='/survey'>Candidates</Link>
            <Link className='link' to='/scores'>Employers</Link>
          </Navbar>

          {this.state.matches && <Redirect to='/matches' />}

          <div id='content'>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/scores" component={Scores} />
              <Route exact path="/survey" render={(routeProps) => (
                <Survey {...routeProps} addSurvey={this.addSurvey.bind(this)} resetMatches={() => this.setState({ matches: false })} />
              )}
              />
              <Route exact path="/matches" render={(routeProps) => (
                <Matches {...routeProps} survey={this.state.survey} companies={this.state.companies} />
              )}
              />
              <Route path="/quiz" render={(routeProps) => (
                <Quiz {...routeProps} quizScore={this.state.quizScore} />
              )}
              />
            <Route exact path="/interview/" component={Recording} />
            <Route exact path="/sent/" component={Sent} />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
