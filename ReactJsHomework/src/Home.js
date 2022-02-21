import "./App.css";
import TaskInput from "./TaskInput";
import ShowTaskTable from "./ShowTaskTable";
import "antd/dist/antd.css";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HandleLogout } from "./redux/ActionCreator";

function Home() {
  const data = useSelector((state) => state);
  const todo = data.taskList;

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
  const navigate =  useNavigate()
  const dispatch = useDispatch()
  const handleLogOut = ()=>{
    dispatch(HandleLogout())
  }
  return (
    <div className="Todo_Table">
      <button onClick={handleLogOut}>Log Out</button>
      <TaskInput />
      <div className="Todo_List">
        <h1>Task Completed</h1>
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
