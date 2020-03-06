import { combineReducers } from "redux";

import { authentication } from "./authReducer";
import { registration } from "./regisReducer";
import { users } from "./userReducer";
import { alert } from "./messageReducer";


const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;