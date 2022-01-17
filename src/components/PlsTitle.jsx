import { useReducer, useRef } from "react";
import React from "react";
import { TextField } from "@mui/material";

const initialState = { title: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

const PlsTitle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Ref = useRef();

  const submitTitleHandler = (e) => {
    e.preventDefault();

    Ref.current.innerText = `${state.title}`;

  };

  return (
    <div>
      <div className="center">
        <h2 ref={Ref}>To Do List</h2>
      </div>

      <form onSubmit={submitTitleHandler}>
        <TextField
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: "change-name",
              payload: { value: e.target.value, field: "title" },
            })
          }
          id="standard-basic"
          label="my to do list..."
          variant="standard"
          size="small"
        />
        {/* <Fab
        color="#fff"
        aria-label="add"
        size="small"
      >
        +
      </Fab> */}
      </form>
    </div>
  );
};

export default PlsTitle;
