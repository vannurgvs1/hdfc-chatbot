import React from "react";
import { Button } from "@mui/material";
import { OtherHousesSharp } from "@mui/icons-material";
const Button_Core = (props) => {
  const { variant, size, color, onClick, title, ...other } = props;
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...other}
    >
      {title}
    </Button>
  );
};

export default Button_Core;
