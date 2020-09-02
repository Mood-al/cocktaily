import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Default from "./Default";
import SingleCoctail from "./SingleCoctail";
import NavBar from "./NavBar";
import "../App.css";
const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/cocktails/:id">
          <SingleCoctail />
        </Route>
        <Route path="*">
          <Default />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
