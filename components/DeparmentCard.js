import React from "react";

const Card = props => (
  <li className="card">
    <img src={props.logo} />
    <h4>{props.name}</h4>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </li>
);

export default Card;
