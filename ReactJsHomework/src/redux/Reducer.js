import { MockTask } from "../MockTask";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";
const reducer = (state = { taskList: MockTask, onChangeVal: "" }, action) => {
  switch (action.type) {
    case "HANDLE_ADD_TASK": {
      const newTask = {
        id: uuidv4(),
        createdDate: new Date(),
        completedDate: new Date(),
        taskName: action.payload.taskName,
        isFavorite: false,
        isCompleted: false,
        user: "sylk",
      };

      return {
        ...state,
        taskList: [...state.taskList, newTask],
        value:''
      };
    }

    case "HANDLE_CHECK_COMPLETED": {
      const tempTaskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              isCompleted: action.payload.value,
            }
          : task
      );
      return{
          ...state,
          taskList:tempTaskList
      }
    }
    case "HANDLE_CHECK_FAVOURITE": {
        const tempTaskList = state.taskList.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                isFavorite: action.payload.value,
              }
            : task
        );
        return{
            ...state,
            taskList:tempTaskList
        }
      }

    case "CHANGE_TASK_INPUT":{
        return{
            ...state,
            value: action.payload.value
        }
    }
    default:
      return state;
  }
};

export default reducer;
