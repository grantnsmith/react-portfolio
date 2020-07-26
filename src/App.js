import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

class App extends Component {
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
