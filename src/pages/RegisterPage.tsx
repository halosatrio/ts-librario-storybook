import React, { Component, useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    proofPayment: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar isCentered />
      <RegisterForm data={data} onChange={handleChange} />
    </>
  );
};

export default RegisterPage;
