import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./nav/Nav";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
