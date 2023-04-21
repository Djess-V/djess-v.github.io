import React from "react";

let ButtonClassStd = ({
  onComputer,
  onShift,
  onCapsLock,
  onFN,
  onAlt,
  onCtrl,
  isHidden = (f) => f,
  data,
  id,
  block = "",
  onClick = (f) => f,
  pressedButton,
}) => {
  return (
    <>
      <button
        onClick={() => onClick(id)}
        className={`${block}__btnClassStd ${isHidden(id) ? "hidden" : ""} 
        ${onShift && (id === 62 || id === 75) && onComputer ? "buttonOn" : ""} 
        ${onComputer ? "onComputer" : ""} 
        ${onFN && id === 77 && onComputer ? "buttonOn" : ""}
        ${onCapsLock && id === 49 && onComputer ? "buttonOn" : ""}
        ${onAlt && (id === 79 || id === 81) && onComputer ? "buttonOn" : ""}
        ${onCtrl && (id === 76 || id === 82) && onComputer ? "buttonOn" : ""}
        ${pressedButton ? "buttonPressed" : ""}`}
      >
        <div className="column1">
          <p>{data[0]}</p>
          {data[1] && <p>{data[1]}</p>}
        </div>
        <div className="column2">
          {data[2] && <p>{data[2]}</p>}
          {data[3] && <p>{data[3]}</p>}
        </div>
      </button>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

ButtonClassStd = React.memo(ButtonClassStd);

export default ButtonClassStd;
