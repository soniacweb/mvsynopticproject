import React, { useState, useEffect } from "react";
import { FormHelperText, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions";
import FormContainer from "../FormContainer";

import Inputfield from "../../reusableComponents/Inputfield";
import Message from "../../Message";
// import Loader from "../components/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [message, setMessage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate("/table", { replace: true }); // redirecting to home
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Unfortunately the passwords you've entered don't match");
    } else {
      console.log("dispatching registration details");
      dispatch(register(name, email, birthday, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign up</h1>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      <Inputfield
        htmlFor={"name"}
        label={"Name"}
        id={"name"}
        aria={"name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Inputfield
        htmlFor={"email"}
        label={"Email address"}
        id={"email"}
        aria={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
      <Inputfield
        htmlFor={"birthday"}
        label={"Birthday"}
        id={"birthday"}
        aria={"birthday"}
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />

      <Inputfield
        htmlFor={"password"}
        label={"Password"}
        id={"password"}
        aria={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Inputfield
        htmlFor={"confirmPassword"}
        label={" Confirm Password"}
        id={"confirmPassword"}
        aria={"confirm password"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button onClick={submitHandler}>Register</Button>
      <FormHelperText id="my-helper-text">
        Have an Account?{" "}
        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
          Login
        </Link>
      </FormHelperText>
    </FormContainer>
  );
};

export default Register;
