import { useState, useReducer } from "react";
import { Fab, TextField } from "@mui/material";
import { getThemeProps } from "@mui/system";
import PlsTitle from "./PlsTitle";

const Title = (props) => {

  const text = props.text || "To Do List"

  return (
      <h1>{text}</h1>
  );
};

export default Title;
