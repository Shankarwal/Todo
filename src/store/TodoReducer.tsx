import { combineReducers } from "redux";
import todoItems from "./Reducer";
import visibilityFilter from "./FilterReducer";

export default combineReducers({
  todoItems,
  visibilityFilter,
});
