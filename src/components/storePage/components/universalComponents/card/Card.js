import React from "react";

const Card = ({
  customStyle = "",
  onClick = (f) => f,
  children = "",
  title = "",
  style = {},
}) => {
  return (
    <div
      className={`store-card ${customStyle}`}
      title={title}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
