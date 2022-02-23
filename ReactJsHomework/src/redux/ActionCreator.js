import TodoServices from "../Services/TodoServices";

export const HandleAddTask = (newTaskName) => {
  return {
    type: "HANDLE_ADD_TASK",
    payload: {
      taskName: newTaskName,
    },
  };
};

export const AddTodoApiAsync = (newTaskName)=> async(dispatch,getState) =>{
  await TodoServices.PostTodoApi(newTaskName)
  dispatch(HandleAddTask(newTaskName))
}


export const GetTodoApiAsync =() => async (dispatch) => {
  const response = await TodoServices.GetTodoApi();
  dispatch ({
      type:"GET_TODO_REDUX",  

      payload:{
          taskList: response.data.data
      }
  })
};

// HandleCheckCompleted
// HandleCheckFavourite

export const HandleCheckCompleted = (id, value) => {
  return {
    type: "HANDLE_CHECK_COMPLETED",
    payload: {
      id: id,
      value: value,
    },
  };
};

export const HandleCheckFavourite = (id, value) => {
  return {
    type: "HANDLE_CHECK_FAVOURITE",
    payload: {
      id: id,
      value: value,
    },
  };
};

export const OnChangeTaskInput = (value) => {
  return {
    type: "CHANGE_TASK_INPUT",
    payload: {
      value: value,
    },
  };
};
export const HandleLogin = () => {
  return {
    type: "HANDLE_LOGIN",
  };
};
export const HandleLogout = () => {
  return {
    type: "HANDLE_LOGOUT",
  };
};
