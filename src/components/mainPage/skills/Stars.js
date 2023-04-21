import React from "react";
import Star from "./Star";

let Stars = () => {
  const [value, setValue] = React.useState(5);

  const handleClick = (id) => {
    setValue(id);
  };

  const stars = [...Array(5)].map((star, i) => (
    <Star
      key={i}
      id={i}
      type={value < i ? "black" : "yellow"}
      handleClick={handleClick}
    />
  ));

  return <div className="MPcard__stars">{stars}</div>;
};

Stars = React.memo(Stars);

export default Stars;
