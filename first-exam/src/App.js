import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskInput from "./TaskInput";
import ShowTaskTable from "./ShowTaskTable";
import { useState } from "react";
import { MockTask } from "./MockTask";
import "antd/dist/antd.css";
import _ from "lodash";

function App() {
  // save Todo List to state
  const [todo, setTodo] = useState(MockTask);

  // partition to 2 table (todoCompleted and todoNotCompleted)
  const partition = _.partition(todo, (todo) => todo.isCompleted);

  // order 2 table with completedDate and createdDate properties
  const todoCompleted = _.orderBy(partition[0], "completedDate", "asc");
  const todoNotCompleted = _.orderBy(partition[1], "createdDate", "asc");

  // define function when user submit
  const handleSubmit = (newTodoName) => {
    const newTodo = {
      id: uuidv4(),
      createdDate: uuidv4(),
      completedDate: null,
      taskName: newTodoName,
      isFavorite: true,
      isCompleted: false,
      user: "sylk",
    };
    setTodo([...todo, newTodo]);
    console.log(newTodoName);
  };

  // define function when user delete todo work
  const handleDelete = (e, id) => {
    console.log("delete");
  };

  const handleCheck = (id, status) => {
    const temp_TodoList = todo.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: status,
          }
        : todo
    );
    setTodo(temp_TodoList);
  };
  return (
    <div className="Todo_Table">
      <TaskInput handleSubmit={handleSubmit} />

      <div className="Todo_List">
        <h1>Task Completed</h1>
        {todoCompleted.map((todo) => (
          <ShowTaskTable handleCheck={handleCheck} todo={todo} key={todo.id} />
        ))}
        <h1>Task Not Completed</h1>
        {todoNotCompleted.map((todo) => (
          <ShowTaskTable handleCheck={handleCheck} todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
