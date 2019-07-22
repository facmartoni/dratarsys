import React, { Component } from "react";
import { TranslatorProvider } from "react-translate";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Awards from "../pages/Awards";
import Carrera from "../pages/Carrera";
import Layout from "./Layout";

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
        <BrowserRouter>
          <Layout
            activeButtonEN={this.state.activeButtonEN}
            activeButtonES={this.state.activeButtonES}
            handleButtonEN={this.handleButtonEN}
            handleButtonES={this.handleButtonES}
          >
            <Switch>
              <Route exact path="/dratarsys/" component={Home} />
              <Route exact path="/dratarsys/premios" component={Awards} />
              <Route exact path="/dratarsys/carrera" component={Carrera} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </TranslatorProvider>
    );
  }
}

export default App;
