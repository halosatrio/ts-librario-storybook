import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar isCentered={true} />
      <LoginForm data={data} onChange={handleChange} />
    </>
  );
};

export default LoginPage;
