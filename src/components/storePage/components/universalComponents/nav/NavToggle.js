import React from "react";

const NavToggle = ({ customStyle = "", onClick = (f) => f }) => {
  return (
    <button
      className={`store-nav-toggler ${customStyle}`}
      type="button"
      onClick={onClick}
    >
      <span className="store-nav-toggler_icon"></span>
    </button>
  );
};

export default NavToggle;
