import React from "react";

import "./button.scss";

function Button({ children, ...restOfProps }) {
  return (
    <button className="btn" {...restOfProps}>
      {children}
    </button>
  );
}

export default Button;
