import React from "react";

const PaginationItem = ({ active = "", onClick = (f) => f, children = "" }) => {
  return (
    <li
      className={`store-page-item ${active ? "store-page-item_active" : ""}`}
      onClick={onClick}
    >
      {active ? (
        <span className="store-page-item_link">
          {children}
          <span className="store-page-item_visually-hidden">(current)</span>
        </span>
      ) : (
        <a className="store-page-item_link" role="button" tabIndex="0" href="#">
          {children}
        </a>
      )}
    </li>
  );
};

export default PaginationItem;
