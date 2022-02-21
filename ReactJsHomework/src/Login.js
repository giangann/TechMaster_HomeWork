import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { HandleLogin } from "./redux/ActionCreator";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(HandleLogin());
    navigate("/home", { replace: true });
  };
  return (
    <div>
      Login Page
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
