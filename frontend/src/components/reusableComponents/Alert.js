import React from "react";
import { AlertStyled } from "../ReusableTheme.styled";

const AlertComponent = ({ severity, message, onClose }) => {
  return (
    <AlertStyled severity={severity} spacing={2} onClose={onClose}>
      {message}
    </AlertStyled>
  );
};

export default AlertComponent;
