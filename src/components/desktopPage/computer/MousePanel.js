import React from "react";

let MousePanel = ({ onCapsLock, onComputer }) => {
  return (
    <>
      <div className="keyboard__downContainer__mousePanel">
        <div className="downContainer__mousePanel__board"></div>
        <div className="downContainer__mousePanel__buttons">
          <button
            className={`mousePanel__buttons__left ${
              onComputer ? "onComputer" : ""
            }`}
          ></button>
          <button
            className={`mousePanel__buttons__right ${
              onComputer ? "onComputer" : ""
            }`}
          ></button>
        </div>
        {onCapsLock && onComputer && (
          <div className="downContainer__mousePanel__message">
            CapsLock включён
          </div>
        )}
      </div>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

MousePanel = React.memo(MousePanel);

export default MousePanel;
