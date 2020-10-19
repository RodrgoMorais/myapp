import React from "react";
import PropTypes from "prop-types";

import "./display-memory.css";

export default class DisplayMemory extends React.Component {
    static propTypes = {
      value: PropTypes.string,
    };
  
    render() {
      return (
        <header className="header-display-memory">
          <div className="display-memory">
            <div>{this.props.value}</div>
          </div>
        </header>
      );
    }
}