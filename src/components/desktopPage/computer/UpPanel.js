import React from "react";
import { TfiApple } from "react-icons/tfi";
import { btnUpP } from "../data/data";

let UpPanel = ({
  onMouse,
  onMusic,
  onLock,
  onComputer,
  onAlt,
  isHidden = (f) => f,
  onClick = (f) => f,
}) => {
  return (
    <>
      <div className="keyboard__upPanel">
        <div className="keyboard__upPanel__leftPanel">
          {btnUpP.map((item, i) => (
            <button
              key={i}
              id={`${onComputer && item.id === 5 ? "onComputer" : ""}${
                onComputer && onLock && item.id === 4 ? "onLock" : ""
              }${onComputer && onMusic && item.id === 2 ? "onMusic" : ""}${
                onComputer && onMouse && item.id === 1 ? "onMouse" : ""
              }`}
              className={`${item.name} ${isHidden(item.id) ? "hidden" : ""} ${
                onComputer ? "onComputer" : ""
              }`}
              data-id={item.id}
              onClick={() => onClick(item.id)}
            >
              {item.data[0]}
              {item.data[1] && <p>{item.data[1]}</p>}
            </button>
          ))}
        </div>
        <div className="keyboard__upPanel__rightPanel">
          <div
            className="emblem"
            onClick={() => window.open("https://www.apple.ru/", "_blank")}
          >
            <TfiApple
              style={{ width: "25px", height: "25px" }}
              title="Нажми на меня, чтобы вернуть кнопки!"
            />
            <p>Apple</p>
          </div>
        </div>
        {onComputer && (
          <div className="upPanel_message">
            <div className="upPanel_message_layout">{onAlt ? "RUS" : "EN"}</div>
            <div className="upPanel_message_message">
              Для изменения раскладки клавиатуры нажмите Alt
            </div>
          </div>
        )}
      </div>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

UpPanel = React.memo(UpPanel);

export default UpPanel;
