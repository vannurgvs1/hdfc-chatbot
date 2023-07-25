import React from "react";
import { TextField } from "@mui/material";
const Input_Core = (props) => {
  const { type, variant, name, size, value, onChange, error, ...other } = props;
  return (
    <TextField
      type={type}
      value={value}
      variant={variant}
      name={name}
      size={size}
      onChange={onChange}
      error={error}
      helperText={error}
      {...other}
    />
  );
};

export default Input_Core;
