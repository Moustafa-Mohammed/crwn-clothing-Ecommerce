import React from "react";
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";

import "./sign-in.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    console.log(event);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account</h1>
        <p>Sign in with your email and password</p>
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
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
