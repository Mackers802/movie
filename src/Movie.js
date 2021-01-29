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
              <div className="movieImage">
                <img src={context.backdrop_path} alt={context.title} style={{
                                width: "65vw",
                                height: "50vh",
                                borderRadius: "25px",
                                margin: "0% 8%" 
                            }}/>
            </div>
            <div className="revRate">
              <Link to="/Reviews">
                <button onClick={context.handleClickReview}>
                  Reviews ⭐⭐⭐ Ratings
                </button>
              </Link>
              <br></br>
            </div>
            <div className="movieOverview">
              <h1>
                What this move is about:
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
