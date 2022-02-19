import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskInput from "./TaskInput";
import ShowTaskTable from "./ShowTaskTable";
import "antd/dist/antd.css";
import _, { isEmpty } from "lodash";
import { useSelector } from "react-redux";

function App() {
  const todo = useSelector(state=>state.taskList)
  console.log(todo)

  // partition to 2 table (todoCompleted and todoNotCompleted)
  const partition = _.partition(todo, (todo) => todo.isCompleted);

  // order 2 table with completedDate and createdDate properties
  const todoCompleted = _.orderBy(partition[0], "completedDate", "asc");
  const todoNotCompleted = _.orderBy(partition[1], ["isFavorite","createdDate"], "desc");

  // define function when user delete todo work
  const handleDelete = (e, id) => {
    console.log("delete");
  };

  return (
    <div className="Todo_Table">
      <TaskInput />
      <div className="Todo_List">
        <h1>Task Completed</h1>
        {todoCompleted.map((todo) => (
          <ShowTaskTable  todo={todo} key={todo.id} />
        ))}
        <h1>Task Not Completed</h1>
        {todoNotCompleted.map((todo) => (
          <ShowTaskTable  todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
