import React from 'react';
import DisplayCalculator from "./grafic_interface/display-calculator";
import DisplayMemory from "./grafic_interface/display-memory";
import Panel from "./grafic_interface/panel";
import calculate from "./logic/calculation";

import './App.css';
import Memory from './grafic_interface/memory';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: null,
      total: null,
      operation: null,
      saved1: null,
      saved2: null,
      saved3: null,
      saved4: null,
    }
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  
  render() {
    return (
      <main>
        <div className="calculator">
          <h3>
              Calculator
          </h3>
            <DisplayCalculator value={(this.state.previous + this.state.operation) || "-"}/>
            <DisplayCalculator value={this.state.total  || "0"}/>
            <Panel clickHandler={this.handleClick}/>
        </div>
        <br></br>
        <div className="memory-part">
          <h3>
            Memory
          </h3>
          <div className="memory-container">
            <div className="memory-part1">
              <DisplayMemory value={this.state.saved1  || "-"}/>
              <DisplayMemory value={this.state.saved2  || "-"}/>
              <DisplayMemory value={this.state.saved3  || "-"}/>
              <DisplayMemory value={this.state.saved4  || "-"}/>
            </div>
            <div className="memory-part2">
              <Memory clickHandler={this.handleClick}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
