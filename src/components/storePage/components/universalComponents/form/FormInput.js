import React from "react";

const FormInput = ({
  customStyle = "",
  onChange = (f) => f,
  type = "",
  placeholder = "",
  value = "",
}) => {
  return (
    <input
      className={`store-form-input ${customStyle}`}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default FormInput;
