import React, { Component } from 'react';
import Pagination from './Pagination.jsx';
import fetch from 'cross-fetch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      rowSet: [],
      currPageOfItems: []
    };
    this.fetchFromAPI = this.fetchFromAPI.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.fetchFromAPI();
  }

  onPageChange(newPageOfItems) {
    this.setState(Object.assign(
      this.state,
      { currPageOfItems: newPageOfItems }
    ));
  }

  // grab API through proxy because of CORS
  fetchFromAPI() {
    // Stephen Curry
    const url = 'https://crossorigin.me/http://stats.nba.com/stats/playergamelog/?PlayerId=201939&Season=2016-17&SeasonType=Regular+Season&LeagueId=00';
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        const { name, headers, rowSet } = data.resultSets[0];
        this.setState(Object.assign(
          this.state,
          { name, headers, rowSet },
        ));
      });
  }


  render() {
    const tHeaders = this.state.headers.map((header, i) => <th key={`header${i}`} scope="col">{header}</th>);
    const tRows = this.state.currPageOfItems.map((row, i) => {
      const rowItems = row.map((item, j) => <td key={`rowitem${j}`}>{item}</td>);
      return (
        <tr key={`row${i}`}>{rowItems}</tr>
      );
    });
    return (
      <div style={{ width: '100%', margin: '30px auto' }}>
        <h1>NBA Stats - Stephen Curry</h1>
        <h3>Season: 2016-2017</h3>
        <table className="table table-sm">
          <thead>
            <tr>
              {tHeaders}
            </tr>
          </thead>
          <tbody>
            {tRows}
          </tbody>
        </table>
        <Pagination items={this.state.rowSet} onPageChange={this.onPageChange} />
      </div>
    );
  }
}

export default App;
