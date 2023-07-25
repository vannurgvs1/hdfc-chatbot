import { ButtonGroup } from "@mui/material";
import React from "react";

const ButtonGroup_Core = (props) => {
  const { variant } = props;
  return <ButtonGroup variant={variant}>{props.children}</ButtonGroup>;
};

export default ButtonGroup_Core;
