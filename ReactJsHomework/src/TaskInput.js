import { useState } from "react";
import { Input } from "antd";
import { HandleAddTask, OnChangeTaskInput } from "./redux/ActionCreator";
import { useDispatch, useSelector } from "react-redux";

function TaskInput({ todo }) {
  // state save what user type in input field
  const value = useSelector(state => state.value);
  const handleChange = (e) => {
    dispatch(OnChangeTaskInput(e.target.value));
  };

  // validate user input (not allow string is null or spaces only)
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  // use Dispatch to dispatch action to reducer
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    if (!isEmptyOrSpaces(value)) {
      dispatch(HandleAddTask(value));
    }
  };

  return (
    <div>
      <Input
        className="Input"
        onChange={handleChange}
        onPressEnter={(e) => {
          // e.preventDefault()
          handleSubmit(value);
        }}
        placeholder="Type todo work"
        value={value}
      />
    </div>
  );
}

export default TaskInput;
