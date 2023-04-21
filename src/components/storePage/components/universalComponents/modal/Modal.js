import React from "react";
import Button from "../Button";

const Modal = ({
  children = "",
  title = "",
  action = "",
  onClick = (f) => f,
  onHide = (f) => f,
}) => {
  return (
    <>
      <div className="store__modal_backdrop"></div>
      <div
        className={`store__modal`}
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
        style={{ display: "block" }}
        onClick={(e) => {
          onHide();
          e.stopPropagation();
        }}
      >
        <div className="store__modal_dialog store__modal_dialog_centered">
          <div
            className="store__modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="store__modal_header">
              <h4 className="store__modal_title">{title}</h4>
            </div>
            <div className={`store__modal_body`}>{children}</div>
            <div className="store__modal_footer">
              {action && (
                <Button variant="outline-success" onClick={onClick}>
                  {action}
                </Button>
              )}
              <Button variant="outline-danger" onClick={onHide}>
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
