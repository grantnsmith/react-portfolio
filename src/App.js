import React, { Component } from "react";
import { Route, Switch, Navlink, BrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
