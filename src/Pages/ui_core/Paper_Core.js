import React from "react";
import { Paper, TextField } from "@mui/material";
const Paper_Core = (props) => {
  const { width, padding } = props;
  return <Paper sx={{ width, padding }}>{props.children}</Paper>;
};

export default Paper_Core;
