import React from "react";

const Card = ({ name, img, title, alcoholic }) => {
  return (
    <div className="cardd">
      <div className="card-header">
        <img src={img} alt="rover" />
      </div>
      <div className="color text-primary">
        <span className="tagg tag-teal">{alcoholic}</span>
        <h4>{title}</h4>

        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
