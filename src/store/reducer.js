import { combineReducers } from "redux";
import studentReducer from "../components/student/reducer";

const rootReducer = combineReducers({
  studentReducer,
});

export { rootReducer };