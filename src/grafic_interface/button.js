import React from "react";
import PropTypes from "prop-types";

import "./button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    wide: PropTypes.bool,
    blue: PropTypes.bool,
    darkblue: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "button",
      this.props.wide ? "wide" : "",
      this.props.blue ? "blue" : "",
      this.props.darkblue ? "darkblue" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}