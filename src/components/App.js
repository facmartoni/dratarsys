import React, { Component } from "react";
import { TranslatorProvider } from "react-translate";

import Home from "../pages/Home";

class App extends Component {
  state = {
    language: "es",
    activeButtonES: true,
    activeButtonEN: false
  };

  handleButtonEN = () => {
    if (!this.state.activeButtonEN) {
      this.setState({
        activeButtonEN: true,
        activeButtonES: false,
        language: "en"
      });
    }
  };

  handleButtonES = () => {
    if (!this.state.activeButtonES) {
      this.setState({
        activeButtonES: true,
        activeButtonEN: false,
        language: "es"
      });
    }
  };

  render() {
    return (
      <TranslatorProvider
        translations={require("../lang/" + this.state.language + ".json")}
      >
        <Home
          activeButtonEN={this.state.activeButtonEN}
          activeButtonES={this.state.activeButtonES}
          handleButtonEN={this.handleButtonEN}
          handleButtonES={this.handleButtonES}
        />
      </TranslatorProvider>
    );
  }
}

export default App;
