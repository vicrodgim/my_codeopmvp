import React from "react";
import "./FormInput.css";

export const FormInput = ({
  id,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  inputClassName = "",
}) => {
  return (
    <div className="mb-3">
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`form-control form-control-md ${inputClassName}`}
      ></input>
    </div>
  );
};
