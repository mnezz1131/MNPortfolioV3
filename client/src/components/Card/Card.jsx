import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="projectContainer">
      <div className="thumb">
        <img className="card-image" src={props.image} alt={props.name} />
      </div>
      <div className="projectText">
        <div className="card-tools">
          <p>{props.summary}</p>
        </div>
        <div className="card-tools">
          <p>Tools and Languages: {props.tools}</p>
        </div>

        <div className="card-tools">
          <p>
            GitHub Site:{" "}
            <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
              {props.name}
            </a>
          </p>
        </div>

        <div className="card-tools">
          <p>
            Deployed Site:{" "}
            <a href={props.deploy} target="_blank" rel="noopener noreferrer">
              {props.name}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
