
export const HandleAddTask = (newTaskName) => {
  return {
    type: "HANDLE_ADD_TASK",
    payload:{
        taskName: newTaskName
    }
  }
};

// HandleCheckCompleted
// HandleCheckFavourite

export const HandleCheckCompleted = (id,value) =>{
    return{
        type: "HANDLE_CHECK_COMPLETED",
        payload:{
            id:id,
            value:value
        }
    }
}

export const HandleCheckFavourite = (id,value) =>{
    return{
        type: "HANDLE_CHECK_FAVOURITE",
        payload:{
            id:id,
            value:value
        }
    }
}

export const OnChangeTaskInput = (value) =>{
    return{
        type:"CHANGE_TASK_INPUT",
        payload:{
            value: value
        }
    }
}
