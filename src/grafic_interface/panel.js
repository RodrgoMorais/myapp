import Button from "./button";
import React from "react";
import PropTypes from "prop-types";

import "./panel.css";

export default class Panel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="panel">
        <div>
          <Button name="+" clickHandler={this.handleClick} />
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="0" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="-" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="." clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="x" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="AC" clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button name="÷" clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} wide />
        </div>
      </div>
    );
  }
}