import React from "react";
import PropTypes from "prop-types";

import "./display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <header className="header-display">
        <div className="display">
          <div>{this.props.value}</div>
        </div>
      </header>
      
    );
  }
}