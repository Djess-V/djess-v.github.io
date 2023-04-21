import React from "react";

const Row = ({ customStyle = "", style = {}, children = "" }) => {
  return (
    <div className={`${customStyle} store-row`} style={style}>
      {children}
    </div>
  );
};

export default Row;
