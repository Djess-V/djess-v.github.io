import React from "react";

let ButtonClassF = ({
  onComputer,
  onF1,
  onCalculator,
  onClock,
  onCalendar,
  onF10,
  onFN,
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
        className={`${block}__btnClassF ${isHidden(id) ? "hidden" : ""} ${
          onComputer ? "onComputer" : ""
        } ${pressedButton ? "buttonPressed" : ""} ${
          onF1 && id === 7 && onComputer ? "buttonOn" : ""
        }        ${onCalculator && id === 10 && onComputer ? "buttonOn" : ""} ${
          onClock && id === 11 && onComputer ? "buttonOn" : ""
        } ${onCalendar && id === 13 && onComputer ? "buttonOn" : ""} ${
          onF10 && id === 17 && onComputer ? "buttonOn" : ""
        }`}
      >
        {data[0]}
        <p>{data[1]}</p>
      </button>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

ButtonClassF = React.memo(ButtonClassF);

export default ButtonClassF;
