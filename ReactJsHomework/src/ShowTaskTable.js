import { Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import {
  HandleCheckCompleted,
  HandleCheckFavourite,
} from "./redux/ActionCreator";
import { AiFillHeart } from "react-icons/ai";
function ShowTaskTable({ todo }) {
  const dispatch = useDispatch();
  const handleCheck = (id, value) => {
    dispatch(HandleCheckCompleted(id, value));
  };

  const handleFavourite = (id, value) => {
    dispatch(HandleCheckFavourite(id, value));
  };
  return (
    <div className="Todo_Card" key={todo.id}>
      <Checkbox
        onChange={() => {
          handleCheck(todo.id, !todo.isCompleted);
        }}
        checked={todo.isCompleted}
      />

      <div className="Task_Content">
        <div className="Task_Name">
          <p
            className={
              todo.isCompleted ? "Task_Completed" : "Task_NotCompleted"
            }
          >
            {todo.taskName}
          </p>
        </div>
        <p className="Task_Time">
          {todo.isCompleted
            ? "Completed date: " + todo.completedDate
            : "Created date: " + todo.createdDate}
        </p>
      </div>

      {todo.isCompleted ? (
        ""
      ) : (
        <AiFillHeart
          onClick={()=>handleFavourite(todo.id, !todo.isFavorite)}
          size={24}
          color={todo.isFavorite ? "red" : ""}
        />
      )}
      <Button>Delete</Button>
    </div>
  );
}

export default ShowTaskTable;
