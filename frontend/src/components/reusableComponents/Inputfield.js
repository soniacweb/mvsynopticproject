import React from "react";
import { InputLabel, Input, FormControl } from "@mui/material";

const Inputfield = ({ htmlFor, label, id, aria, value, onChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
      <Input
        id={id}
        aria-describedby={aria}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default Inputfield;
