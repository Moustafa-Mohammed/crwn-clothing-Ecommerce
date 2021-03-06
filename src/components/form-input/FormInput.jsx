import React from "react";

import "./form-input.scss";

function FormInput({ handleChange, label, ...restOfProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...restOfProps} />
      {label ? (
        <label
          className={`${
            restOfProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
