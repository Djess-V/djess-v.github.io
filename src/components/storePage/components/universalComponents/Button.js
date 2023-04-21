import React from "react";

const Button = ({
  customStyle = "",
  variant = "",
  onClick = (f) => f,
  children = "",
}) => {
  return (
    <button
      className={`store-btn ${customStyle} ${
        variant ? `store-btn_variant_${variant}` : variant
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
