import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="App">
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
