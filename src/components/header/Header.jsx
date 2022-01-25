import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../firebase/firebase-config";
import { ReactComponent as Logo } from "../assets/logo.svg";

import "./header.scss";

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => logout()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
