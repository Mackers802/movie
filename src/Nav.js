import React from "react";
import Home from "./Home";
import Movie from "./Movie";
import Reviews from "./Reviews";

import { Link, Switch, Route } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">🍿</button>
          <div className="dropdown-content">
            <div>
              <Link to="/"> Home </Link>
            </div>
            <br></br>
            <div>
              <Link to="/Movie"> Movie Info  </Link>
            </div>
            <br></br>
            <div>
              <Link to="/Reviews"> Reviews </Link>
            </div>
          </div>
        </div>
        </div>
      </nav>

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
