import React from "react";
import { Switch, Route } from "react-router-dom"
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Movie from "./Movie";
import Reviews from "./Reviews";

function App() {
  return (
    <div id="appContainer">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Movie">
          <Movie />
        </Route>
        <Route path="/Reviews">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
