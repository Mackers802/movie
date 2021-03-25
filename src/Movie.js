import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";

export default function Movie(props) {
  return (
    <Consumer>
      {(context) => {
        return (
          <div className="movieContainer">
            <h1>{context.title}</h1>
              <div id="movieImage">
                <img src={context.backdrop_path} alt={context.title}/>
            </div>
            <div id="rating">
              <Link to="/Reviews">
                <button onClick={context.handleClickReview}>
                  Reviews
                </button>
              </Link>
            </div>
            <div className="movieOverview">
              <h1>
                Movie Description
              </h1>
              <p>
                {context.overview}
              </p> 
            </div>
            <div className="movieReleaseDate">
              Movie Debut: {context.release_date}
            </div>
            <br></br>
            <div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
