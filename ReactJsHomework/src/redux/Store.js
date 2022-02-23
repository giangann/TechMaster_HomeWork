import { createStore } from "redux";
import reducer from "./Reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const Store = createStore(reducer,applyMiddleware(thunk))
