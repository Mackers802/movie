import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import Review from "./Review";
// <Reviews />
import { Consumer } from "./Context";

export default function reviews(props) {
  return (
    <Consumer>

      {(context) => {
        return (
          <div className="reviewContainer">
              <div className="revImg">
                <Link to="/Movie">
                  <img src={context.backdrop_path} alt={context.title}></img>
                </Link>
              </div>
            <p>Click image for {context.title} discription page</p>
            <h1>Tell me what you thought about {context.title}</h1>
              <Form />
                <h1>Previous Ratings</h1>
            <div className="writtenReviews">
                    {context.reviews.map(review => <Review review = {review} />)}
                </div>
          </div>
        );
      }}
    </Consumer>
  );
}
