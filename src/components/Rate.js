import React from "react";

import redStar from "../assets/red_star.svg";
import star from "../assets/star.svg";

function Rate({ rate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rate">
      {stars.map((s, index) => (
        <img
          key={index}
          className="rate__icon"
          src={rate >= s ? redStar : star}
          alt={rate >= s ? "Etoile rouge" : "Etoile vide"}
        />
      ))}
    </div>
  );
}
export default Rate;
