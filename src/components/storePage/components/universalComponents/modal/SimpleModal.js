import React from "react";

const SimpleModal = ({ customStyle = "", children = "" }) => {
  return (
    <>
      <div className="store__modal_backdrop"></div>
      <div
        className={`${customStyle} store__modal`}
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="store__simple-modal_dialog">
          <div className="store__modal_content">
            <div className={`store__simple-modal_body ${customStyle}_body`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleModal;
