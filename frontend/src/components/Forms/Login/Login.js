import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";
import { Button } from "@mui/material";
import HeroImage from "../../LazyHero/HeroImage";
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
      navigate("/table", { replace: true }); // redirecting to table
    }
  }, [dispatch, userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <HeroImage
        src={
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
        }
        heading={"Login"}
      />

      <FormContainer>
        <h1>Login</h1>
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
        <Button onClick={submitHandler}>Login</Button>
      </FormContainer>
    </>
  );
};

export default Login;
