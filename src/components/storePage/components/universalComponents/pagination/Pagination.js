import React from "react";

const Pagination = ({ customStyle = "", children = "" }) => {
  return <ul className={`store-pagination ${customStyle}`}>{children}</ul>;
};

export default Pagination;
