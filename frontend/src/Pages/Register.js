import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
// import Message from "../components/Message";
// import Loader from "../components/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, birthday, password));
  };

  return (
    <>
      <h1>Sign up</h1>
      {/* {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>} */}
      <FormControl onSubmit={submitHandler}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          aria-describedby="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          aria-describedby="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>

        <InputLabel htmlFor="birthday">Birthday</InputLabel>
        <Input
          id="birthday"
          aria-describedby="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          aria-describedby="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
    </>
  );
};

export default Register;
