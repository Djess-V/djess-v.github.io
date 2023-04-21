import React from "react";

const ListItem = ({ children = "", active = false, onClick = (f) => f }) => {
  return (
    <div
      className={`store-list-group-item ${
        active ? "store-list-group-item_active" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ListItem;
