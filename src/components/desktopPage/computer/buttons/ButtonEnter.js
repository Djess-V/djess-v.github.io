import React from "react";

let ButtonEnter = ({
  onComputer,
  onClick = (f) => f,
  isHidden = (f) => f,
  pressedButton,
}) => {
  const [active, setActive] = React.useState("notActive");
  const refBtnEnterLU = React.useRef();
  const refBtnEnterRU = React.useRef();
  const refBtnEnterRD = React.useRef();

  const addActive = () => {
    setActive("activeBtnEnter");
  };

  const addNotActive = () => {
    setActive("notActive");
  };

  React.useEffect(() => {
    refBtnEnterLU.current.id = active;
    refBtnEnterRU.current.id = active;
    refBtnEnterRD.current.id = active;
  }, [active, onComputer]);

  return (
    <>
      <div
        className={`btnEnter ${isHidden(86) ? "hidden" : ""} ${
          onComputer ? "onComputer" : ""
        }`}
        onClick={() => onClick(86)}
      >
        <div
          ref={refBtnEnterLU}
          onPointerOver={() => {
            onComputer && addActive();
          }}
          onPointerOut={() => {
            onComputer && addNotActive();
          }}
          className={`btnEnter__LU ${pressedButton ? "buttonPressed" : ""}`}
        ></div>
        <div className={`btnEnter__LD ${onComputer ? "onComputer" : ""}`}></div>
        <div
          ref={refBtnEnterRU}
          onPointerOver={() => {
            onComputer && addActive();
          }}
          onPointerOut={() => {
            onComputer && addNotActive();
          }}
          className={`btnEnter__RU ${onComputer ? "onComputer" : ""} 
          ${pressedButton ? "buttonPressed" : ""}`}
        >
          <p>Enter</p>
        </div>
        <div
          ref={refBtnEnterRD}
          onPointerOver={() => {
            onComputer && addActive();
          }}
          onPointerOut={() => {
            onComputer && addNotActive();
          }}
          className={`btnEnter__RD ${onComputer ? "onComputer" : ""}
          ${pressedButton ? "buttonPressed" : ""}`}
        ></div>
      </div>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

ButtonEnter = React.memo(ButtonEnter);

export default ButtonEnter;
