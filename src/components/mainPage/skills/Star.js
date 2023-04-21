import React from "react";
import blackStar from "./img/star-svgrepo-com_black.svg";
import yellowStar from "./img/star-svgrepo-com_yellow.svg";

let Star = ({ id, type, handleClick = (f) => f }) => {
  return (
    <img
      className="MPcard__stars_star"
      src={type === "black" ? blackStar : yellowStar}
      alt="Star"
      onClick={() => handleClick(id)}
    />
  );
};

Star = React.memo(Star);

export default Star;
