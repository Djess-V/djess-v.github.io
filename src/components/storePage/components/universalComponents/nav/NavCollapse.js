import React from "react";

const NavCollapse = ({ children = "", show }) => {
  return (
    <div
      className={`store-nav-collapse ${
        show ? "store-nav-collapse_mode_show" : ""
      }`}
    >
      <div className="store-nav-nav">{children}</div>
    </div>
  );
};

export default NavCollapse;
