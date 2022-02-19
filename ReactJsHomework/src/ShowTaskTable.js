import { Button, Checkbox } from "antd";

function ShowTaskTable({ todo, handleCheck }) {
  return (
    <div className="Todo_Card" key={todo.id}>
      <Checkbox
        onChange={(e) => {
          handleCheck(todo.id, e.target.checked);
        console.log(todo.taskName)
        }}
        className="CheckBox_Button"
        checked= {todo.isCompleted}
      />
      {todo.isCompleted ? (
        <p className="Task_Completed">{todo.taskName}</p>
      ) : (
        <p className="Task_NotCompleted">{todo.taskName}</p>
      )}
      <Button>Delete</Button>
    </div>
  );
}

export default ShowTaskTable;
