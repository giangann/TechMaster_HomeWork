import "./App.css";
import TaskInput from "./TaskInput";
import ShowTaskTable from "./ShowTaskTable";
import "antd/dist/antd.css";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { GetTodoApiAsync, HandleLogout } from "./redux/ActionCreator";
import { useEffect, useState } from "react";
import TodoServices from "./Services/TodoServices";

function Home() {
  const data = useSelector((state) => state);
  const todo = data.taskList;

  const dispatch = useDispatch();
  dispatch(GetTodoApiAsync());
  // //useState to save data from api fetch:
  // const [todo,setTodo] = useState([])

  // partition to 2 table (todoCompleted and todoNotCompleted)
  const partition = _.partition(todo, (todo) => todo.isCompleted);

  // order 2 table with completedDate and createdDate properties
  const todoCompleted = _.orderBy(partition[0], "completedDate", "asc");
  const todoNotCompleted = _.orderBy(
    partition[1],
    ["isFavorite", "createdDate"],
    "desc"
  );

  // define function when user delete todo work
  const handleDelete = (e, id) => {
    console.log("delete");
  };

  // define function when user logout
  const handleLogOut = () => {
    dispatch(HandleLogout());
  };
  return (
    <div className="Todo_Table">
      <button onClick={handleLogOut}>Log Out</button>
      <TaskInput />
      <div className="Todo_List">
        <h1> Completed</h1>
        {todoCompleted.map((todo) => (
          <ShowTaskTable todo={todo} key={todo.id} />
        ))}
        <h1>Task Not Completed</h1>
        {todoNotCompleted.map((todo) => (
          <ShowTaskTable todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
