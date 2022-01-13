import React, { Component } from "react";

import NavBar from "../components/NavBar";
import RegisterForm from "../components/RegisterForm";

class RegisterPage extends Component {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <NavBar isCentered />
        <RegisterForm data={data} onChange={this.onChange} />
      </>
    );
  }
}

export default RegisterPage;
