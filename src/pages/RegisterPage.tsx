import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
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
      <Navbar isCentered />
      <RegisterForm data={data} onChange={handleChange} />
    </>
  );
};

export default RegisterPage;
