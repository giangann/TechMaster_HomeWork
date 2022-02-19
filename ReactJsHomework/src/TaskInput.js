import { useState } from "react";
import { Input } from "antd";

function TaskInput({ handleSubmit }) {
  // state save what user type in input field
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input
        className="Input"
        onChange={handleChange}
        onPressEnter={(e) => {
          // e.preventDefault()
          handleSubmit(value);
          setValue("");
        }}
        placeholder="Type todo work"
        value={value}
      />
    </div>
  );
}

export default TaskInput;
