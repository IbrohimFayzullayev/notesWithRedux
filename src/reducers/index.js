import { combineReducers } from "redux";
import noteListReducer from "./noteListReducer";

const allReducers = combineReducers({
  noteList: noteListReducer,
});

export default allReducers;
