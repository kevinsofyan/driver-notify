import React, { Component } from 'react';
import './App.scss';

import Table from "./components/table/table";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Table/>
        </header>
      </div>
    );
  }
}
