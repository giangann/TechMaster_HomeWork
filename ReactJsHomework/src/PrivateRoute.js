import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";

function PrivateRoute({children}){
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    console.log(isLoggedIn)
    console.log("error")

    return isLoggedIn?(
        children
    ):(
        <Navigate to = "/login"/>
    )
}

export default PrivateRoute