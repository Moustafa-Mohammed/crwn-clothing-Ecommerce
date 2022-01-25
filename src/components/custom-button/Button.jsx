import React from "react";

import "./button.scss";

function Button({ children, isGoogleSignIn, ...restOfProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} btn`}
      {...restOfProps}
    >
      {children}
    </button>
  );
}

export default Button;
