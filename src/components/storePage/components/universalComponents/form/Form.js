import React from "react";

const Form = ({ customStyle = "", onClick = (f) => f, children = "" }) => {
  return (
    <form className={`store-form ${customStyle}`} onClick={onClick}>
      {children}
    </form>
  );
};

export default Form;
