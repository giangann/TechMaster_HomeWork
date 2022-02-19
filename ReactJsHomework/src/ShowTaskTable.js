import { Button, Checkbox } from "antd";
import { AiFillHeart } from "react-icons/ai";
function ShowTaskTable({ todo, handleCheck, handleFavorite }) {
  return (
    <div className="Todo_Card" key={todo.id}>
      <Checkbox
        onChange={(e) => {
          handleCheck(todo.id, e.target.checked);
          console.log(todo.completedDate);
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
          onClick={() => {
            handleFavorite(todo.id, !todo.isFavorite);
          }}
          size={24}
          style={todo.isFavorite ? { fill: "red" } : ""}
        />
      )}

      <Button>Delete</Button>
    </div>
  );
}

export default ShowTaskTable;
