import React from "react";

let SearchPanel = ({
  pressedButton,
  pressedButtonTab,
  pressedButtonBackspace,
  pressedButtonDelete,
  pressedButtonLeft,
  pressedButtonRight,
  symbol,
  raiseButtonCode = (f) => f,
}) => {
  const [valueInput, setValueInput] = React.useState("Hello, World!");
  const [cursorPosition, setCursorPosition] = React.useState(15);
  const refInput = React.useRef();

  const createQueryString = () => {
    const substring = encodeURIComponent(valueInput);
    return `https://www.google.com/search?q=${substring}`;
  };

  React.useEffect(() => {
    if (refInput.current && symbol !== "") {
      setValueInput(
        valueInput.slice(0, cursorPosition) +
          symbol +
          valueInput.slice(cursorPosition)
      );
      setCursorPosition(cursorPosition + 1);
    }
  }, [symbol, pressedButton]);

  React.useEffect(() => {
    if (pressedButtonLeft > 0 && cursorPosition > 0 && refInput.current) {
      setCursorPosition(cursorPosition - 1);
    }
  }, [pressedButtonLeft]);

  React.useEffect(() => {
    if (
      pressedButtonRight > 0 &&
      cursorPosition <= valueInput.length &&
      refInput.current
    ) {
      setCursorPosition(cursorPosition + 1);
    }
  }, [pressedButtonRight]);

  React.useEffect(() => {
    if (
      pressedButtonTab > 0 &&
      cursorPosition < valueInput.length &&
      refInput.current
    ) {
      setValueInput(
        valueInput.slice(0, cursorPosition) +
          "  " +
          valueInput.slice(cursorPosition)
      );
      setCursorPosition(cursorPosition + 2);
    }
  }, [pressedButtonTab]);

  React.useEffect(() => {
    if (
      pressedButtonDelete > 0 &&
      refInput.current &&
      cursorPosition < valueInput.length
    ) {
      setValueInput(
        valueInput.slice(0, cursorPosition) +
          valueInput.slice(cursorPosition + 1)
      );
      setTimeout(() => {
        refInput.current.selectionStart = refInput.current.selectionEnd =
          cursorPosition;
        refInput.current.focus();
      }, 0);
    }
  }, [pressedButtonDelete]);

  React.useEffect(() => {
    if (pressedButtonBackspace > 0 && refInput.current && cursorPosition > 0) {
      setValueInput(
        valueInput.slice(0, cursorPosition - 1) +
          valueInput.slice(cursorPosition)
      );
      setCursorPosition(cursorPosition - 1);
    }
  }, [pressedButtonBackspace]);

  React.useEffect(() => {
    if (refInput.current) {
      refInput.current.selectionStart = refInput.current.selectionEnd =
        cursorPosition;
      refInput.current.focus();
    }
  }, [cursorPosition]);

  return (
    <>
      <input
        ref={refInput}
        value={valueInput}
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
        onBlur={(e) => {
          setCursorPosition(e.target.selectionEnd);
        }}
        onKeyDown={(e) => raiseButtonCode(e)}
        onKeyUp={(e) => raiseButtonCode(e)}
      ></input>
      <button
        id="searchButton"
        onClick={() => window.open(createQueryString(), "_blank")}
      >
        Поиск
      </button>
      <button id="clearButton" onClick={() => setValueInput("")}>
        Очистить
      </button>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

SearchPanel = React.memo(SearchPanel);

export default SearchPanel;
