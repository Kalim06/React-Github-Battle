import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Navbar";
import Home from "./Home";
import Battle from "../Battle/Battle";
import Results from "../Battle/Results";
import Popular from "../Popular/Popular";
import Search from "../Search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route path="/search" component={Search} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
