import { combineReducers } from "redux";
import userReducer from "../usersDashboard/userReducer";

const rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;