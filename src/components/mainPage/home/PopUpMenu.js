import React from "react";
import close from "./img/x.svg";
import { addHandler } from "../scripts/addHandler";
const menuLink = ["Home", "About Me", "Skills", "Portfolio", "Contacts"];

let PopUpMenu = ({ handleClick = (f) => f }) => {
  const links = menuLink.map((link, i) => (
    <div
      key={i}
      className={`MPpop-up-menu__row ${
        i === 0 ? "MPpop-up-menu__row_type_first" : ""
      }`}
    >
      <p className="MPpop-up-menu__row_name">{link}</p>
      {i === 0 && (
        <div className="MPpop-up-menu__row_close" onClick={handleClick}>
          <img src={close} alt="Close" />
        </div>
      )}
    </div>
  ));

  React.useEffect(() => {
    addHandler("MPpop-up-menu");
  }, []);

  return <div className="MPpop-up-menu__container">{links}</div>;
};

PopUpMenu = React.memo(PopUpMenu);

export default PopUpMenu;
