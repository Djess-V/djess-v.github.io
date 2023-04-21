import React from "react";

let StartModalWindow = ({ closeModalWindow }) => {
  return (
    <div className="dm-overlay">
      <div className="dm-table">
        <div className="dm-cell">
          <div className="dm-modal">
            <span className="close" onClick={closeModalWindow}></span>
            <p>
              Прочитайте памятку под клавиатурой! Данная страница не адаптивная!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

StartModalWindow = React.memo(StartModalWindow);

export default StartModalWindow;
