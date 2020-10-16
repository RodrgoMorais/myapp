import React from 'react';
import Display from "./grafic_interface/display";
import Panel from "./grafic_interface/panel";
import calculate from "./logic/calculation";

import './App.css';

export default class App extends React.Component {
  state = {
    previous: null,
    total: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
ß
  render() {
    return (
      <div className="component-app">
        <Display value={(this.state.previous + this.state.operation) || null} />
        <Display value={this.state.total  || "0"}/>
        <Panel clickHandler={this.handleClick} />
      </div>
    );
  }
}
