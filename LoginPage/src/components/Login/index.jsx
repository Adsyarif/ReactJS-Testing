import React from "react";
import { Button } from "../Button";
import Input from "../Input";

const Login = () => {
  return (
    <>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Pasword" />
        <Button />
      </form>
    </>
  );
};

export default Login;
