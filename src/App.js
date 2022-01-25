import React, { Component } from "react";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shoppage/ShopPage.jsx";
import SignInAndSignUp from "./pages/signIn-and-signUp/SignInAndSignUp";

import "./App.css";
import Header from "./components/header/Header.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase-config.js";

class App extends Component {
  state = {
    currentUser: null,
  };

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
      });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<Homepage />} />
          <Route path="/signIn" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
