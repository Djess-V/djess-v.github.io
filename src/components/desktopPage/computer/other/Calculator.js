import React from "react";
import calculateValue from "./functionsForCalculator";

const numbers = {
  8: 7,
  9: 8,
  10: 9,
  12: 4,
  13: 5,
  14: 6,
  16: 1,
  17: 2,
  18: 3,
  21: 0,
};

const symbolsCalculator = [
  "MS",
  "MR",
  "MC",
  "M",
  "→",
  "CE",
  "C",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "±",
  "0",
  ".",
  "=",
];

let Calculator = () => {
  const [valueInput, setValueInput] = React.useState("");
  const [onMemory, setOnMemory] = React.useState(false);
  const [memory, setMemory] = React.useState(null);
  const [tablo, setTablo] = React.useState("");
  const [minus, setMinus] = React.useState(true);
  const [equallyPressed, setEquallyPressed] = React.useState(false);
  const [windowMemory, setWindowMemory] = React.useState(false);

  const buttons = symbolsCalculator.map((item, i) => (
    <button
      key={i}
      className={`calculator_button ${
        memoryButtonActivity(i) ? "disabled_button" : ""
      } ${onMemory && i === 3 ? "onMemory" : ""} ${
        windowMemory && i === 3 ? "windowMemoryOpen" : ""
      }`}
      title={makeTitleMemory(i)}
      disabled={memoryButtonActivity(i)}
      onClick={() => onClickButton(i)}
    >
      {item}
    </button>
  ));

  function makeTitleMemory(index) {
    switch (index) {
      case 0:
        return "Сохранить значение";
      case 1:
        return "Извлечь значение из памяти";
      case 2:
        return "Очистить память";
      case 3:
        return "Просмотр сотояния памяти";
      default:
        break;
    }
  }

  function memoryButtonActivity(index) {
    if (index >= 1 && index <= 3) {
      return !onMemory;
    }

    return false;
  }

  function installTablo(char) {
    let value = valueInput;

    if (valueInput[valueInput.length - 1] === ".") {
      value = valueInput.slice(0, valueInput.length - 1);
    }

    if (valueInput && Number(valueInput) === 0) {
      value = "0";
    }
    if (valueInput.length > 0 && !equallyPressed) {
      if (tablo) {
        setTablo(tablo.slice(0, tablo.length - 1) + char);
      } else {
        setTablo(value + char);
        setValueInput("");
        setMinus(true);
      }
    }
  }

  function showMemory() {
    setWindowMemory(!windowMemory);
  }

  function onClickButton(index) {
    if (index === 0) {
      let value = valueInput;

      if (value !== "Oops!") {
        if (Number(valueInput) === 0) {
          value = "0";
        }
        setOnMemory(true);
        setMemory(value);
      }
    } else if (index === 1) {
      if (!memory.includes("e")) {
        setValueInput(memory);
        setWindowMemory(false);
      } else {
        setValueInput("Oops!");
      }
    } else if (index === 2) {
      setOnMemory(false);
      setMemory(null);
      setWindowMemory(false);
    } else if (index === 3) {
      showMemory();
    } else if (index === 4) {
      if (!equallyPressed) {
        setValueInput(valueInput.slice(0, valueInput.length - 1));
      }
    } else if (index === 5) {
      if (tablo && tablo[tablo.length - 1] === "=") {
        setTablo("");
      }
      setValueInput("");
      setEquallyPressed(false);
      setMinus(true);
    } else if (index === 6) {
      setValueInput("");
      setEquallyPressed(false);
      setTablo("");
      setMinus(true);
    } else if (index === 7) {
      installTablo("/");
    } else if (index === 11) {
      installTablo("*");
    } else if (index === 15) {
      installTablo("-");
    } else if (index === 19) {
      installTablo("+");
    } else if (index === 22) {
      if (valueInput !== "") {
        if (!equallyPressed && !valueInput.includes(".")) {
          setValueInput(valueInput + ".");
        }
      }
    } else if (index === 23) {
      let value = valueInput;

      if (valueInput[valueInput.length - 1] === ".") {
        value = valueInput.slice(0, valueInput.length - 1);
      }

      if (valueInput && Number(valueInput) === 0) {
        value = "0";
      }

      if (tablo) {
        if (!equallyPressed && valueInput !== "") {
          setTablo(tablo + value + "=");
          setEquallyPressed(true);
        }
      }
    }

    if (
      !equallyPressed &&
      (valueInput === "" || (valueInput && valueInput.length < 10))
    ) {
      for (let key in numbers) {
        if (index === +key) {
          if (+key === 21) {
            if (
              valueInput === "" ||
              +valueInput !== 0 ||
              valueInput.includes(".")
            ) {
              setValueInput(valueInput + numbers[key]);
            }
          } else {
            if (
              +valueInput !== 0 ||
              valueInput.includes(".") ||
              valueInput === ""
            ) {
              setValueInput(valueInput + numbers[key]);
            }
          }
        }
      }
    }

    if (
      !equallyPressed &&
      (valueInput === "" || (valueInput && valueInput.length <= 11))
    ) {
      if (index === 20) {
        if (minus) {
          if (+valueInput !== 0) {
            setValueInput("-" + valueInput);
            setMinus(!minus);
          }
        } else {
          const firstCharacter = valueInput.slice(0, 1);
          if (firstCharacter === "-") {
            setValueInput(valueInput.slice(1));
            setMinus(!minus);
          }
        }
      }
    }
  }

  React.useEffect(() => {
    if (tablo && tablo[tablo.length - 1] === "=") {
      setValueInput(calculateValue(tablo.slice(0, tablo.length - 1)));
    }
  }, [tablo]);

  return (
    <div className="display_calculator">
      <div id="calculator_tablo">
        <div id="calculator_tablo_charMemory">{onMemory ? "M" : ""}</div>
        <p id="calculator_tablo_tablo">{tablo}</p>
      </div>
      <p id="field">{valueInput}</p>
      <div className="calculator_buttons">
        {buttons}
        {windowMemory && <div id="calculator_windowMemory">{memory}</div>}
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Calculator = React.memo(Calculator);

export default Calculator;
