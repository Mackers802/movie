import React from "react";
import {Consumer} from "./Context"
import { Link } from "react-router-dom";

export default function Home(props){
    return(
        <Consumer>
            {(context) => {
                return(
                    <div className="containerHome">
                        <h1>{context.title}</h1>
                        <div className="imageHome">
                            <Link to="/Movie">
                            <img src={context.backdrop_path} alt={context.title} style={{
                                width: "65vw",
                                height: "50vh",
                                borderRadius: "25px",
                                margin: "0% 8%" 
                            }}/>
                            </Link>
                            <p>Click image see more info about {context.title}</p>
                        <button onClick={context.handleClickChooseNewMovie}>Shuffle Movie</button>
                        <br></br>
                        <br></br>
                        <div className="snacks">
                            Dont forget your Snacks and Popcorn 
                        </div>
                        <div className="emoji">
                            🥨 🍿 🍫 🍭 🍬 🥤 🍺 🥂 🍼
                        </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}