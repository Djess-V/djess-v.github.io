import React from "react";
import SearchPanel from "./other/SearchPanel";
import AudioMenu from "./other/AudioMenu";
import YandexMap from "../other/YandexMap";
import Calculator from "./other/Calculator";
import Clock from "./other/Clock";
import Calendar from "./other/Calendar";
import { audioList } from "./other/AudioMenu";

let Display = ({
  onMouse,
  onMusicList,
  onLock,
  symbol,
  pressedButton,
  indexDisplayImage,
  onComputer,
  onF1,
  onCalculator,
  onClock,
  onCalendar,
  onF8,
  onF10,
  onF11,
  onF12,
  mouseMove = (f) => f,
  canselMouseMove = (f) => f,
  mouseDirection,
  pressedButtonTab,
  pressedButtonUpDown,
  pressedButtonLeft,
  pressedButtonRight,
  pressedButtonDelete,
  pressedButtonBackspace,
  pressedButtonEnter,
  updateButtonEnter = (f) => f,
  raiseSelectionPositionAudio = (f) => f,
  raiseButtonCode = (f) => f,
  returnFocusToSelectedSong = (f) => f,
}) => {
  const [audioChoice, setAudioChoice] = React.useState(null);
  const [onAudio, setOnAudio] = React.useState(false);
  const [audioPause, setAudioPause] = React.useState(false);
  const refAudio = React.useRef();

  const lossOfFocusAudioMenu = () => {
    if (audioChoice) {
      const index = audioChoice.indexOf("assets");
      const substring1 = audioChoice.slice(index + 7);
      audioList.forEach((item, i) => {
        const substring2 = item.link.slice(8);
        if (substring2 === substring1) {
          returnFocusToSelectedSong(i);
        }
      });
    }
  };

  const refMouse = React.useRef();
  let timerMoveMouse;

  React.useEffect(() => {
    if (!onMusicList) {
      setAudioChoice(null);
    }
  }, [onMusicList]);

  React.useEffect(() => {
    if (pressedButtonEnter > 0) {
      setOnAudio(false);
    }
  }, [pressedButtonEnter]);

  React.useEffect(() => {
    if (
      (refAudio.current && !onF8 && audioPause) ||
      (refAudio.current && onF8 && audioPause)
    ) {
      refAudio.current.play();
    } else if (
      (refAudio.current && onF8 && !audioPause) ||
      (refAudio.current && !onF8 && !audioPause)
    ) {
      refAudio.current.pause();
    }
  }, [onF8]);

  React.useEffect(() => {
    if (refAudio.current) {
      if (refAudio.current.volume <= 1 && refAudio.current.volume > 0) {
        refAudio.current.volume = 0;
      } else {
        refAudio.current.volume = 1;
      }
    }
  }, [onF10]);

  React.useEffect(() => {
    if (refAudio.current) {
      if (refAudio.current.volume > 0.1) {
        refAudio.current.volume -= 0.1;
      } else if (
        refAudio.current.volume >= 0 &&
        refAudio.current.volume <= 0.1
      ) {
        refAudio.current.volume = 0;
      }
    }
  }, [onF11]);

  React.useEffect(() => {
    if (refAudio.current) {
      if (refAudio.current.volume >= 0 && refAudio.current.volume < 0.9) {
        refAudio.current.volume += 0.1;
      } else if (refAudio.current.volume >= 0.9) {
        refAudio.current.volume = 1;
      }
    }
  }, [onF12]);

  return (
    <div className={`computer__display`}>
      {onComputer && !onLock && (
        <div className={`display_background displayImage_${indexDisplayImage}`}>
          <>
            {onF1 && (
              <div id="YMapsID" className="display__map">
                <YandexMap />
              </div>
            )}
            {onCalculator && <Calculator />}
            {onClock && <Clock />}
            {onCalendar && <Calendar />}
            {!onMusicList && !onF1 && (
              <SearchPanel
                pressedButton={pressedButton}
                pressedButtonTab={pressedButtonTab}
                pressedButtonBackspace={pressedButtonBackspace}
                pressedButtonDelete={pressedButtonDelete}
                pressedButtonLeft={pressedButtonLeft}
                pressedButtonRight={pressedButtonRight}
                symbol={symbol}
                raiseButtonCode={raiseButtonCode}
              />
            )}
            {onMusicList && !onF1 && (
              <AudioMenu
                pressedButtonUpDown={pressedButtonUpDown}
                pressedButtonEnter={pressedButtonEnter}
                raiseAudio={(choice) => {
                  if (typeof choice === "string") {
                    setAudioChoice(choice);
                  } else {
                    setAudioChoice(choice.target.href);
                    updateButtonEnter();
                  }
                }}
                raiseSelectionPositionAudio={raiseSelectionPositionAudio}
                onAudio={() => setOnAudio(true)}
                lossOfFocusAudioMenu={lossOfFocusAudioMenu}
              />
            )}
            {audioChoice &&
              !onF1 &&
              (pressedButtonEnter > 0 || onAudio) &&
              onMusicList && (
                <audio
                  ref={refAudio}
                  controls
                  src={audioChoice}
                  autoPlay
                  onPause={() => setAudioPause(true)}
                  onPlay={() => setAudioPause(false)}
                />
              )}
            {onMouse && (
              <div
                ref={refMouse}
                className={`display_mouse ${onMouse ? mouseDirection : ""}`}
                onPointerOver={() => {
                  if (!mouseDirection) {
                    timerMoveMouse = setTimeout(() => {
                      mouseMove("moveRightMouse");
                      timerMoveMouse = setTimeout(() => {
                        mouseMove("rotateMouseUp");
                        timerMoveMouse = setTimeout(() => {
                          mouseMove("moveUpMouse");
                          timerMoveMouse = setTimeout(() => {
                            mouseMove("rotateMouseLeft");
                            timerMoveMouse = setTimeout(() => {
                              mouseMove("moveLeftMouse");
                              timerMoveMouse = setTimeout(() => {
                                mouseMove("rotateMouseDown");
                                timerMoveMouse = setTimeout(() => {
                                  mouseMove("moveDownMouse");
                                  timerMoveMouse = setTimeout(() => {
                                    mouseMove("rotateMouseRight");
                                    timerMoveMouse = setTimeout(() => {
                                      mouseMove("");
                                    }, 4100);
                                  }, 4000);
                                }, 4000);
                              }, 8000);
                            }, 4000);
                          }, 4000);
                        }, 4000);
                      }, 8000);
                    }, 0);
                    setTimeout(() => {
                      canselMouseMove(timerMoveMouse);
                      setTimeout(() => {
                        canselMouseMove(timerMoveMouse);
                        setTimeout(() => {
                          canselMouseMove(timerMoveMouse);
                          setTimeout(() => {
                            canselMouseMove(timerMoveMouse);
                            setTimeout(() => {
                              canselMouseMove(timerMoveMouse);
                              setTimeout(() => {
                                canselMouseMove(timerMoveMouse);
                                setTimeout(() => {
                                  canselMouseMove(timerMoveMouse);
                                  setTimeout(() => {
                                    canselMouseMove(timerMoveMouse);
                                  }, 4500);
                                }, 4500);
                              }, 8500);
                            }, 4500);
                          }, 4500);
                        }, 4500);
                      }, 8500);
                    }, 500);
                  }
                }}
              ></div>
            )}
          </>
        </div>
      )}
      {onComputer && onLock && (
        <div
          id="display_lock"
          className={`display_background display_lock`}
        ></div>
      )}
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Display = React.memo(Display);

export default Display;
