import React, { useState } from "react";
import Button from "../Button";

const Dropdown = ({ items = [], nameToggle = "", selectItem = (f) => f }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`store-dropdown`}>
      <Button
        customStyle="store-dropdown-toggle"
        variant="primary"
        onClick={() => setShow(!show)}
      >
        {nameToggle}
      </Button>
      {show && (
        <div className="store-dropdown-menu">
          {items.map((item) => (
            <a
              key={item.id}
              href="#"
              className="store-dropdown-item"
              onClick={() => {
                setShow(false);
                selectItem(item);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
