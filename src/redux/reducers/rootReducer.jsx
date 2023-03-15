import { combineReducers } from "redux";
import blogReducer from "./blogReducers";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  filter: filterReducer,
});

export default rootReducer;
