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
  console.log ("dispatch add todo async")
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

export const HandleCheckCompletedApi = (id,status)=>async(dispatch) =>{
  await TodoServices.CheckCompleted(id,status)
  dispatch(HandleCheckCompleted(id,status))
}

export const HandleCheckFavourite = (id, value) => {
  return {
    type: "HANDLE_CHECK_FAVOURITE",
    payload: {
      id: id,
      value: value,
    },
  };
};
export const HandleCheckFavouriteApi = (id,status)=>async(dispatch) =>{
  await TodoServices.CheckFavourite(id,status)
  dispatch(HandleCheckFavourite(id,status))
}

export const OnChangeTaskInput = (value) => {
  return {
    type: "CHANGE_TASK_INPUT",
    payload: {
      value: value,
    },
  };
};
export const HandleLogin = () => {
  console.log ("Handle Login Called")
  return {
    type: "HANDLE_LOGIN",
  };
};
export const HandleLogout = () => {
  return {
    type: "HANDLE_LOGOUT",
  };
};
