import axios from "axios";

const api = "http://localhost:5000/Todo";

const GetTodoApi = () => {
  return axios.get(api + "/GetTodos?user=sylk");
};

const PostTodoApi = (newTodo) => {
  return axios.post(api + "/AddTodo", {
    user: "sylk",
    taskName: newTodo,
  });
};

const TodoServices = {
  GetTodoApi,
  PostTodoApi,
};

export default TodoServices;
