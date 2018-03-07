import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Footer from '../components/Footer.jsx';
import { Navbar, NavItem, Button } from 'react-materialize';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing.jsx';


class App extends Component {
  render() {
    return (
      <BrowserRouter>      
        <div className="app">
          <Navbar right brand="awesome team">
            <NavItem href="/companies">Companies</NavItem>
            <Button waves='light'>Employers</Button>
            <Button waves='light'>Candidates</Button>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/user/" component={} />
            <Route exact path="/matched/" component={} />
            <Route exact path="/companies/" component={} />
            <Route exact path="/interview/" component={} /> */}
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
