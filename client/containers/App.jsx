import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Survey from '../components/Survey';
import Matches from '../components/Matches';
import Footer from '../components/Footer.jsx';
import { Navbar, NavItem, Button } from 'react-materialize';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Landing from '../components/Landing.jsx';
import Recording from '../components/Recording.jsx';
import Sent from '../components/Sent.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      survey: null,
      companies: null,
      matches: false
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
            {/* <NavItem href="/companies">Companies</NavItem> */}
            {/* <NavItem>Employers</NavItem> */}
            <Link className='link' to='/matches'>Companies</Link>
            <Link className='link' to='/survey'>Employers</Link>
            <Link className='link' to='/interview'>Sign in</Link>
          </Navbar>

          {this.state.matches && <Redirect to='/matches' />}

          <div id='content'>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/survey" render={(routeProps) => (
                <Survey {...routeProps} addSurvey={this.addSurvey.bind(this)} resetMatches={() => this.setState({ matches: false })} />
              )}
              />
              <Route exact path="/matches" render={(routeProps) => (
                <Matches {...routeProps} survey={this.state.survey} companies={this.state.companies} />
              )}
              />
              {/* <Route exact path="/user/" component={} />
            <Route exact path="/matched/" component={} />
            <Route exact path="/companies/" component={} /> */}
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
