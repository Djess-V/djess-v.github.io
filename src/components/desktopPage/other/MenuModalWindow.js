import React from "react";

let MenuModalWindow = ({
  closeModalDisplayBg = (f) => f,
  handlerClickModalDisplayBg = (f) => f,
}) => {
  return (
    <div className="menu_modalDisplayBg">
      <span onClick={closeModalDisplayBg}>х</span>
      {[...Array(4)].map((item, i) => (
        <div
          className={`displayImage_${i} miniImage`}
          key={i}
          onClick={() => handlerClickModalDisplayBg(i)}
        />
      ))}
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

MenuModalWindow = React.memo(MenuModalWindow);

export default MenuModalWindow;
