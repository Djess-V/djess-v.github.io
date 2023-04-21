import React from "react";
import ButtonClassF from "./buttons/ButtonClassF";
import ButtonClassStd from "./buttons/ButtonClassStd";
import ButtonEnter from "./buttons/ButtonEnter";
import {
  btn1F,
  btn2Number,
  btn3Tab,
  btn3CapsLock,
  btn4Shift,
  btn5Space,
} from "../data/data";

let CentralPanel = ({
  onComputer,
  onF1,
  onCalculator,
  onClock,
  onCalendar,
  onF10,
  onShift,
  onCapsLock,
  onAlt,
  onCtrl,
  onFN,
  onClick = (f) => f,
  isHidden = (f) => f,
  codeButtonDown,
  codeButtonUp,
}) => {
  return (
    <>
      <div className="keyboard__downContainer__centralPanel">
        <div className="centralPanel__blockEsc">
          {btn1F.map((item, i) => {
            let pressedButton;
            if (codeButtonDown === item.code) {
              pressedButton = true;

              if (codeButtonUp === item.code) {
                pressedButton = false;
              }
            } else {
              pressedButton = false;
            }

            return (
              <ButtonClassF
                key={i}
                onComputer={onComputer}
                onF1={onF1}
                onCalculator={onCalculator}
                onClock={onClock}
                onCalendar={onCalendar}
                onF10={onF10}
                data={item.data}
                id={item.id}
                block="blockEsc"
                onClick={onClick}
                onFN={onFN}
                isHidden={isHidden}
                pressedButton={pressedButton}
              />
            );
          })}
        </div>
        <div className="centralPanel__blockNumbers">
          {btn2Number.map((item, i) => {
            let pressedButton;
            if (codeButtonDown === item.code) {
              pressedButton = true;

              if (codeButtonUp === item.code) {
                pressedButton = false;
              }
            } else {
              pressedButton = false;
            }

            return (
              <ButtonClassStd
                key={i}
                onComputer={onComputer}
                data={item.data}
                id={item.id}
                block="blockNumbers"
                onClick={onClick}
                isHidden={isHidden}
                pressedButton={pressedButton}
              />
            );
          })}
        </div>
        <div className="centralPanel__containerEnter">
          <div className="centralPanel__blockTab">
            {btn3Tab.map((item, i) => {
              let pressedButton;
              if (codeButtonDown === item.code) {
                pressedButton = true;

                if (codeButtonUp === item.code) {
                  pressedButton = false;
                }
              } else {
                pressedButton = false;
              }

              return (
                <ButtonClassStd
                  key={i}
                  onComputer={onComputer}
                  data={item.data}
                  id={item.id}
                  block="blockTab"
                  onClick={onClick}
                  isHidden={isHidden}
                  pressedButton={pressedButton}
                />
              );
            })}
          </div>
          <div className="centralPanel__blockCapsLock">
            {btn3CapsLock.map((item, i) => {
              let pressedButton;
              if (codeButtonDown === item.code) {
                pressedButton = true;

                if (codeButtonUp === item.code) {
                  pressedButton = false;
                }
              } else {
                pressedButton = false;
              }

              return (
                <ButtonClassStd
                  key={i}
                  onComputer={onComputer}
                  onCapsLock={onCapsLock}
                  data={item.data}
                  id={item.id}
                  block="blockCapsLock"
                  onClick={onClick}
                  isHidden={isHidden}
                  pressedButton={pressedButton}
                />
              );
            })}
          </div>
          {[...Array({ data: [], id: 86, code: "Enter" })].map((item, i) => {
            let pressedButton;
            if (codeButtonDown === item.code) {
              pressedButton = true;

              if (codeButtonUp === item.code) {
                pressedButton = false;
              }
            } else {
              pressedButton = false;
            }

            return (
              <ButtonEnter
                key={item.id}
                onComputer={onComputer}
                onClick={onClick}
                isHidden={isHidden}
                pressedButton={pressedButton}
              />
            );
          })}
        </div>
        <div className="centralPanel__blockShift">
          {btn4Shift.map((item, i) => {
            let pressedButton;
            if (codeButtonDown === item.code) {
              pressedButton = true;

              if (codeButtonUp === item.code) {
                pressedButton = false;
              }
            } else {
              pressedButton = false;
            }

            return (
              <ButtonClassStd
                onComputer={onComputer}
                onShift={onShift}
                key={i}
                data={item.data}
                id={item.id}
                block="blockShift"
                onClick={onClick}
                isHidden={isHidden}
                pressedButton={pressedButton}
              />
            );
          })}
        </div>
        <div className="centralPanel__blockSpace">
          {btn5Space.map((item, i) => {
            let pressedButton;
            if (codeButtonDown === item.code) {
              pressedButton = true;

              if (codeButtonUp === item.code) {
                pressedButton = false;
              }
            } else {
              pressedButton = false;
            }

            return (
              <ButtonClassStd
                key={i}
                onComputer={onComputer}
                onFN={onFN}
                onAlt={onAlt}
                onCtrl={onCtrl}
                data={item.data}
                id={item.id}
                block="blockSpace"
                onClick={onClick}
                isHidden={isHidden}
                pressedButton={pressedButton}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

CentralPanel = React.memo(CentralPanel);

export default CentralPanel;
