import Button from "./button";
import React from "react";
import PropTypes from "prop-types";

import "./memory.css";

export default class Memory extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="memory">
        <div>
          <Button name="MC1" clickHandler={this.handleClick} darkblue/>
          <Button name="MR1" clickHandler={this.handleClick} darkblue/>
        </div>
        <div>
          <Button name="MC2" clickHandler={this.handleClick} darkblue/>
          <Button name="MR2" clickHandler={this.handleClick} darkblue/>
        </div>
        <div>
          <Button name="MC3" clickHandler={this.handleClick} darkblue/>
          <Button name="MR3" clickHandler={this.handleClick} darkblue/>
        </div>
        <div>
          <Button name="MC4" clickHandler={this.handleClick} darkblue/>
          <Button name="MR4" clickHandler={this.handleClick} darkblue/>
        </div>
      </div>
    );
  }
}