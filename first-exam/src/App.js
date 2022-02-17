import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskInput from "./TaskInput";
import ShowTaskTable from "./ShowTaskTable";
import { useState } from "react";
import { MockTask } from "./MockTask";
import "antd/dist/antd.css";

function App() {
  // save Todo List to state
  const [todo, setTodo] = useState(MockTask);

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
        {todo.map((todo) => (
          <ShowTaskTable handleCheck={handleCheck} todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
