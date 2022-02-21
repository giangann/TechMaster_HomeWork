import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Axios from "./AxiosPage";
import Home from "./Home";

import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/axios" element={<Axios/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
