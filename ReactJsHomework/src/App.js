import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskInput from "./TaskInput";
import ShowTaskTable from "./ShowTaskTable";
import { useState } from "react";
import { MockTask } from "./MockTask";
import "antd/dist/antd.css";
import _, { isEmpty, values } from "lodash";

function App() {
  // save Todo List to state
  const [todo, setTodo] = useState(MockTask);

  // partition to 2 table (todoCompleted and todoNotCompleted)
  const partition = _.partition(todo, (todo) => todo.isCompleted);

  // order 2 table with completedDate and createdDate properties
  const todoCompleted = _.orderBy(partition[0], "completedDate", "asc");
  const todoNotCompleted = _.orderBy(partition[1], ["isFavorite","createdDate"], "desc");

  // validate user input (not allow string is null or spaces only)
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
  // define function when user submit with 'isEmptyOrSpaces function to validate'
  const handleSubmit = (newTodoName) => {
    if (!isEmptyOrSpaces(newTodoName)) {
      const newTodo = {
        id: uuidv4(),
        createdDate: new Date(),
        completedDate: null,
        taskName: newTodoName,
        isFavorite: false,
        isCompleted: false,
        user: "sylk",
      };
      console.log(newTodo.createdDate);
      setTodo([...todo, newTodo]);
      console.log(newTodoName);
    }
  };

  // define function when user delete todo work
  const handleDelete = (e, id) => {
    console.log("delete");
  };
  // define function when user check todo work that completed
  const handleCheck = (id, status) => {
    const temp_TodoList = todo.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: status,
            completedDate: new Date(),
          }
        : todo
    );
    setTodo(temp_TodoList);
  };

  // define function when user check todo work that completed
  const handleFavorite = (id, value) =>{
    const temp_TodoList = todo.map(todo =>todo.id === id ?{
      ...todo,
      isFavorite: value
    }:todo)
    setTodo(temp_TodoList)
  }

  return (
    <div className="Todo_Table">
      <TaskInput handleSubmit={handleSubmit} />

      <div className="Todo_List">
        <h1>Task Completed</h1>
        {todoCompleted.map((todo) => (
          <ShowTaskTable handleFavorite={handleFavorite} handleCheck={handleCheck} todo={todo} key={todo.id} />
        ))}
        <h1>Task Not Completed</h1>
        {todoNotCompleted.map((todo) => (
          <ShowTaskTable handleFavorite={handleFavorite} handleCheck={handleCheck} todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
