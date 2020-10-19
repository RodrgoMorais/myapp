import React from "react";
import PropTypes from "prop-types";

import "./display-calculator.css";

export default class DisplayCalculator extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <header className="header-display-calculator">
        <div className="display-calculator">
          <div>{this.props.value}</div>
        </div>
      </header>
    );
  }
}