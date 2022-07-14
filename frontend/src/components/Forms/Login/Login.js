import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";
import { Button } from "@mui/material";

import FormContainer from "../FormContainer";
import Inputfield from "../../reusableComponents/Inputfield";
import Message from "../../Message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState(null);

  // const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate("/foodmenu", { replace: true }); // redirecting to main menu
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign up</h1>
      {/* {message && <Message>{message}</Message>} */}
      {error && <Message>{error}</Message>}

      <Inputfield
        htmlFor={"email"}
        label={"Email address"}
        id={"email"}
        aria={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Inputfield
        htmlFor={"password"}
        label={"Password"}
        id={"password"}
        aria={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={submitHandler}>Register</Button>
    </FormContainer>
  );
};

export default Login;
