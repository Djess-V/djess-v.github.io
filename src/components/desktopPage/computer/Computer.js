import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { symbolId, serviceButtonsId } from "../data/data";

let Computer = ({
  indexDisplayImage,
  missingButtons,
  buttonHidden,
  startMissingButtons = (f) => f,
}) => {
  const [onComputer, setOnComputer] = React.useState(true);
  const [onShift, setOnShift] = React.useState(false);
  const [onFN, setOnFN] = React.useState(false);
  const [onCapsLock, setOnCapsLock] = React.useState(false);
  const [onAlt, setOnAlt] = React.useState(false);
  const [onCtrl, setOnCtrl] = React.useState(false);
  const [onLock, setOnLock] = React.useState(false);
  const [onHome, setOnHome] = React.useState(true);
  const [onMusic, setOnMusic] = React.useState(false);
  const [onMouse, setOnMouse] = React.useState(false);
  const [mouseDirection, setMouseDirection] = React.useState("");
  const [timerCanselMouse, setTimerCanselMouse] = React.useState(0);
  const [onF1, setOnF1] = React.useState(false);
  const [onCalculator, setOnCalculator] = React.useState(false);
  const [onClock, setOnClock] = React.useState(false);
  const [onCalendar, setOnCalendar] = React.useState(false);
  const [onF8, setOnF8] = React.useState(false);
  const [onF10, setOnF10] = React.useState(false);
  const [onF11, setOnF11] = React.useState(0);
  const [onF12, setOnF12] = React.useState(0);
  const [symbol, setSymbol] = React.useState("");
  const [pressedButton, setPressedButton] = React.useState(0);
  const [pressedButtonTab, setPressedButtonTab] = React.useState(0);
  const [pressedButtonUpDown, setPressedButtonUpDown] = React.useState(0);
  const [pressedButtonLeft, setPressedButtonLeft] = React.useState(0);
  const [pressedButtonRight, setPressedButtonRight] = React.useState(0);
  const [pressedButtonDelete, setPressedButtonDelete] = React.useState(0);
  const [pressedButtonBackspace, setPressedButtonBackspace] = React.useState(0);
  const [pressedButtonEnter, setPressedButtonEnter] = React.useState(0);
  const [codeButtonDown, setCodeButtonDown] = React.useState(null);
  const [codeButtonUp, setCodeButtonUp] = React.useState(null);

  const changeCodeButtonDownUp = (e) => {
    if (e.type === "keydown") {
      setCodeButtonDown(e.code);
    } else if (e.type === "keyup") {
      setCodeButtonUp(e.code);
    }
  };

  const onClickButton = (id) => {
    if (buttonHidden) {
      startMissingButtons(id);
    } else {
      let flagServiceButtons = false;
      for (let item of serviceButtonsId) {
        if (item === id) {
          flagServiceButtons = true;
          changeCase(id);
        }
      }
      if (!flagServiceButtons) {
        setSymbol(printText(id, onShift, onCapsLock, onAlt));
        setPressedButton(pressedButton + 1);
      }
    }
  };

  const changeCase = (id) => {
    if (id === 1) {
      setOnMouse(!onMouse);
    } else if (id === 2) {
      setOnMusic(!onMusic);
      setPressedButtonUpDown(0);
      setPressedButtonEnter(0);
      setOnF11(0);
      setOnF12(0);
    } else if (id === 3) {
      if (onHome) {
        window.location.reload();
      }
    } else if (id === 4) {
      setOnLock(!onLock);
    } else if (id === 5) {
      setOnComputer(!onComputer);
      setOnShift(false);
      setOnAlt(false);
      setOnCtrl(false);
      setOnFN(false);
      setOnCapsLock(false);
      setOnLock(false);
      setOnHome(!onHome);
      setOnMusic(false);
      setOnMouse(false);
      setOnF1(false);
      setOnCalculator(false);
      setOnClock(false);
      setOnCalendar(false);
      setOnF11(0);
      setOnF12(0);
      setSymbol("");
      setPressedButton(0);
      setPressedButtonTab(0);
      setPressedButtonUpDown(0);
      setPressedButtonLeft(0);
      setPressedButtonRight(0);
      setPressedButtonDelete(0);
      setPressedButtonBackspace(0);
      setPressedButtonEnter(0);
    } else if (id === 7) {
      setOnF1(!onF1);
    } else if (id === 8) {
      window.open("https://www.youtube.com/", "_blank");
    } else if (id === 9) {
      window.open("https://github.com/Djess-V/djess-v.github.io", "_blank");
    } else if (id === 10) {
      setOnCalculator(!onCalculator);
    } else if (id === 11) {
      setOnClock(!onClock);
    } else if (id === 13) {
      setOnCalendar(!onCalendar);
    } else if (id === 14) {
      if (pressedButtonUpDown <= 0) {
        setPressedButtonUpDown(0);
      } else {
        setPressedButtonUpDown(pressedButtonUpDown - 1);
      }
      setTimeout(() => setPressedButtonEnter(pressedButtonEnter + 1), 0);
    } else if (id === 15) {
      setOnF8(!onF8);
    } else if (id === 16) {
      if (pressedButtonUpDown >= 4) {
        setPressedButtonUpDown(4);
      } else {
        setPressedButtonUpDown(pressedButtonUpDown + 1);
      }
      setTimeout(() => setPressedButtonEnter(pressedButtonEnter + 1), 0);
    } else if (id === 17) {
      setOnF10(!onF10);
    } else if (id === 18) {
      setOnF11(onF11 + 1);
    } else if (id === 19) {
      setOnF12(onF12 + 1);
    } else if (id === 21) {
      setPressedButtonDelete(pressedButtonDelete + 1);
    } else if (id === 35) {
      setPressedButtonBackspace(pressedButtonBackspace + 1);
    } else if (id === 36) {
      setPressedButtonTab(pressedButtonTab + 1);
    } else if (id === 49) {
      setOnCapsLock(!onCapsLock);
    } else if (id === 62 || id === 75) {
      setOnShift(!onShift);
    } else if (id === 74) {
      if (pressedButtonUpDown <= 0) {
        setPressedButtonUpDown(0);
      } else {
        setPressedButtonUpDown(pressedButtonUpDown - 1);
      }
    } else if (id === 76 || id === 82) {
      setOnCtrl(!onCtrl);
    } else if (id === 77) {
      setOnFN(!onFN);
    } else if (id === 78) {
      window.open("https://www.microsoft.ru/", "_blank");
    } else if (id === 79 || id === 81) {
      setOnAlt(!onAlt);
    } else if (id === 83) {
      setPressedButtonLeft(pressedButtonLeft + 1);
    } else if (id === 84) {
      if (pressedButtonUpDown >= 4) {
        setPressedButtonUpDown(4);
      } else {
        setPressedButtonUpDown(pressedButtonUpDown + 1);
      }
    } else if (id === 85) {
      setPressedButtonRight(pressedButtonRight + 1);
    } else if (id === 86) {
      setPressedButtonEnter(pressedButtonEnter + 1);
    }
  };

  const mouseMove = (direction) => {
    setMouseDirection(direction);
    if (!direction) {
      setOnMouse(false);
    }
  };

  const updateButtonEnter = () => {
    setPressedButtonEnter(0);
  };

  React.useEffect(() => {
    if (buttonHidden) {
      setOnCapsLock(false);
      setOnShift(false);
      setOnAlt(false);
      setOnCtrl(false);
    }
  }, [buttonHidden]);

  React.useEffect(() => {
    if (!onMouse) {
      clearTimeout(timerCanselMouse);
      setMouseDirection("");
    }
  }, [onMouse]);

  return (
    <div className="computer">
      <Display
        mouseDirection={mouseDirection}
        onMouse={onMouse}
        mouseMove={mouseMove}
        canselMouseMove={(timer) => setTimerCanselMouse(timer)}
        onMusicList={onMusic}
        onLock={onLock}
        onComputer={onComputer}
        onF1={onF1}
        onCalculator={onCalculator}
        onClock={onClock}
        onCalendar={onCalendar}
        onF8={onF8}
        onF10={onF10}
        onF11={onF11}
        onF12={onF12}
        symbol={symbol}
        pressedButton={pressedButton}
        indexDisplayImage={indexDisplayImage}
        pressedButtonTab={pressedButtonTab}
        pressedButtonUpDown={pressedButtonUpDown}
        pressedButtonLeft={pressedButtonLeft}
        pressedButtonRight={pressedButtonRight}
        pressedButtonDelete={pressedButtonDelete}
        pressedButtonBackspace={pressedButtonBackspace}
        pressedButtonEnter={pressedButtonEnter}
        updateButtonEnter={updateButtonEnter}
        raiseSelectionPositionAudio={(position) =>
          setPressedButtonUpDown(position)
        }
        raiseButtonCode={changeCodeButtonDownUp}
        returnFocusToSelectedSong={(position) =>
          setPressedButtonUpDown(position)
        }
      />
      <Keyboard
        onMouse={onMouse}
        onMusic={onMusic}
        onLock={onLock}
        onComputer={onComputer}
        onF1={onF1}
        onCalculator={onCalculator}
        onClock={onClock}
        onCalendar={onCalendar}
        onF10={onF10}
        onCapsLock={onCapsLock}
        onAlt={onAlt}
        onCtrl={onCtrl}
        onShift={onShift}
        onFN={onFN}
        missingButtons={missingButtons}
        onClickButton={onClickButton}
        codeButtonDown={codeButtonDown}
        codeButtonUp={codeButtonUp}
      />
    </div>
  );
};

/* -----------------------------------------------------------------------------------*/

function printText(id, onShift, onCapsLock, onAlt) {
  for (let item of symbolId) {
    if (item.id === id) {
      if (!onShift && !onCapsLock && !onAlt) {
        return item.data[2];
      } else if (!onShift && !onCapsLock && onAlt) {
        return item.data[0];
      } else if (onShift && !onCapsLock && !onAlt) {
        return item.data[3];
      } else if (onShift && !onCapsLock && onAlt) {
        return item.data[1];
      } else if (!onShift && onCapsLock && !onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[2];
        } else {
          return item.data[3];
        }
      } else if (!onShift && onCapsLock && onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[0];
        } else {
          return item.data[1];
        }
      } else if (onShift && onCapsLock && !onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[3];
        } else {
          return item.data[2];
        }
      } else if (onShift && onCapsLock && onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[1];
        } else {
          return item.data[0];
        }
      }
    }
  }
  return "";
}

/* ---------------------------------------------------------------------------------- */

Computer = React.memo(Computer);

export default Computer;
