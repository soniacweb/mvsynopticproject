import React from "react";
import { Snackbar } from "@mui/material";

const Message = ({ variant, children }) => {
  return <Snackbar variant={variant}>{children}</Snackbar>;
};

export default Message;
