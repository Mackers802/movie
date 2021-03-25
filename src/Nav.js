import React from "react";

import { Link} from "react-router-dom";

export default function Nav() {
  return (
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
  );
}
