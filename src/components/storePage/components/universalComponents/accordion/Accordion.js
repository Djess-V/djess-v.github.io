import React from "react";

const Accordion = ({ customStyle = "", children = "" }) => {
  return <div className={`store-accordion ${customStyle}`}>{children}</div>;
};

export default Accordion;
