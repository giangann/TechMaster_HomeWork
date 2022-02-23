import axios from "axios";

const api = "http://localhost:5000/Todo";

const GetTodoApi = () => {
  console.log("Get Todo Api Called")
  return axios.get(api + "/GetTodos?user=sylk");
};

const PostTodoApi = (newTodo) => {
  return axios.post(api + "/AddTodo", {
    user: "sylk",
    taskName: newTodo,
  });
};

const CheckCompleted=(id,status)=>{
  axios.post(api+ "/ChangeTaskCompletedState",{
    user: "sylk",
    id: id,
    isCompleted:status
  })
}

const CheckFavourite=(id,status)=>{
  axios.post(api+ "/ChangeTaskFavoriteState",{
    user: "sylk",
    id: id,
    isFavorite:status
  })
}
const TodoServices = {
  GetTodoApi,
  PostTodoApi,
  CheckCompleted,
  CheckFavourite
};

export default TodoServices;
