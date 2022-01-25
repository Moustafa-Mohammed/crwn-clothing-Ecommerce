import React from "react";
import { auth, googleProvider } from "../../firebase/firebase-config.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";

import "./sign-in.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  signIn = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState((prevState) => {
        return { ...prevState, email: "", password: "" };
      });
    } catch (error) {
      console.log(error);
    }
  };

  signInWithGoogle = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account</h1>
        <p>Sign in with your email and password</p>
        {this.state.displayName && <h4>{this.state.displayName}</h4>}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="btn-group">
            <Button onSubmit={this.signIn} type="submit">
              Sign in
            </Button>
            <Button onClick={this.signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
