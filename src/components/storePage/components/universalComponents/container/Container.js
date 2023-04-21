import React from "react";

const Container = ({ customStyle = "", style = {}, children = "" }) => {
  return (
    <div className={`store-container ${customStyle}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
