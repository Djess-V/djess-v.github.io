import React from "react";

const CardBody = ({ customStyle = "", children = "" }) => {
  return <div className={`store-card-body ${customStyle}`}>{children}</div>;
};

export default CardBody;
