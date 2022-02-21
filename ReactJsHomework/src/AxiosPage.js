import { Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleAddTask, OnChangeTaskInput } from "./redux/ActionCreator";

function Axios() {
  const api = "http://localhost:5000/Todo";
  const dispatch = useDispatch();

  const value = useSelector((state) => state.value);
  const handleChange = (value) => {
    dispatch(OnChangeTaskInput(value));
  };

  const handleSubmit = (newTaskName) => {
    dispatch(HandleAddTask(newTaskName));
    console.log(value);
  };

//   array in 2th argument of useEffect, make component re-render 
  const [amount, setAmount] = useState(1);

  const [todoApi, setTodoApi] = useState([]);
  //   get data from API (before component render)
  useEffect(() => {
    const getDataApi = async () => {
      const data = await axios.get(api + "/GetTodos?user=sylk");
      setTodoApi(data.data.data);
    };
    getDataApi();
  }, [amount]);

  // handle to post data (when user submit) to API
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  const handlePost = async (newTaskName) => {
    if (!isEmptyOrSpaces(newTaskName)) {
      try {
        await axios.post(api + "/AddTodo", {
          user: "sylk",
          taskName: newTaskName,
        });
        setAmount(amount + 1);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Input
        onChange={(e) => handleChange(e.target.value)}
        onPressEnter={() => handlePost(value)}
        value={value}
      />
      {todoApi.map((todo) => (
        <p key={todo.id}>{todo.taskName}</p>
      ))}
    </div>
  );
}
export default Axios;
