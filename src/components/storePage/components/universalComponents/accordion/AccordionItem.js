import React, { useState } from "react";

const AccordionItem = ({ customStyle = "", title = "", children = "" }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`store-accordion-item ${customStyle}`}>
      <h2
        className="store-accordion-header"
        onClick={() => setCollapsed(!collapsed)}
      >
        <button
          type="button"
          aria-expanded={false}
          className={`store-accordion-header_button ${
            collapsed ? "store-accordion-header_button_mode_collapsed" : ""
          }`}
        >
          {title}&nbsp;
        </button>
      </h2>
      <div
        className={`store-accordion-collapse store-accordion-collapse_mode_collapse ${
          collapsed ? "" : "store-accordion-collapse_mode_show"
        }`}
      >
        <div className="store-accordion-body">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
